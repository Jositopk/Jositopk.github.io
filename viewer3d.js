import * as THREE from 'three';
import { OrbitControls } from './assets/vendor/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './assets/vendor/three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from './assets/vendor/three/examples/jsm/RoomEnvironment.js';
import { models } from './models-data-v22.js';

// El visor solo carga un modelo. Sus recursos se liberan al cambiar de pieza.
const stage = document.querySelector('#model-stage');
const canvas = document.querySelector('#model-canvas');
const poster = document.querySelector('#model-poster');
const status = document.querySelector('#model-status');
const gallery = document.querySelector('#model-gallery');
const rotationButton = document.querySelector('#model-rotation');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const labels = {
  es: {
    loading: 'Cargando modelo y texturas…',
    error: 'No se ha podido cargar esta pieza. Puedes volver a intentarlo.',
    unsupported: 'El visor necesita WebGL 2. Puedes consultar las portadas o probar otro navegador.',
    local: 'Abre esta página desde GitHub Pages o un servidor local para usar el visor.',
    retry: 'Reintentar',
    triangles: 'triángulos',
    none: 'Sin texturas',
    pixel: 'Texturas pixelizadas',
    original: 'Texturas originales',
    supplied: 'Texturas del modelo',
    left: 'Girar a la izquierda',
    right: 'Girar a la derecha',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    canvas: 'Modelo 3D: arrastra para girar, usa la rueda para acercar. También puedes usar los botones de cámara.',
  },
  en: {
    loading: 'Loading model and textures…',
    error: 'This model could not be loaded. Please try again.',
    unsupported: 'The viewer requires WebGL 2. Browse the covers or try another browser.',
    local: 'Open this page on GitHub Pages or a local server to use the viewer.',
    retry: 'Retry',
    triangles: 'triangles',
    none: 'Untextured',
    pixel: 'Pixelated textures',
    original: 'Original textures',
    supplied: 'Model textures',
    left: 'Rotate left',
    right: 'Rotate right',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    canvas: '3D model: drag to rotate, scroll to zoom. Camera buttons are also available.',
  },
};
const projectNames = { 'time-bender': 'Time Bender', nordico: 'Nórdico' };

let language = document.documentElement.lang === 'en' ? 'en' : 'es';
let selected = models.find((model) => `#${model.id}` === location.hash) || models[0];
let renderer, controls, scene, camera;
let currentRoot = null;
let materialRecords = [];
let requestNumber = 0;
let mode = 'textured';
let state = 'loading';
let autoRotate = !reducedMotion.matches;
let interacting = false;
let pausedUntil = 0;
let previousTime = 0;
let visible = true;
let fittedDistance = 5;

function visibleModels() {
  const filter = document.querySelector('#model-project').value || 'all';
  return models.filter(model => filter === 'all' || model.project === filter);
}

function refreshLabels() {
  const text = labels[language];
  document.querySelectorAll('#model-project option').forEach(option => {
    option.textContent = option.value === 'all'
      ? (language === 'en' ? 'All projects' : 'Todos los proyectos')
      : option.value === 'nordico'
        ? (language === 'en' ? 'Norse project' : 'Nórdico')
        : projectNames[option.value] || option.value;
  });
  document.title = `${language === 'en' ? '3D art' : 'Arte 3D'} — Jose Manuel Pastor González`;
  document.querySelector('#model-name').textContent = selected.title[language];
  document.querySelector('#model-counter').textContent =
    `${String(visibleModels().indexOf(selected) + 1).padStart(2, '0')} / ${visibleModels().length} · ${selected.project === 'nordico' && language === 'en' ? 'Norse project' : projectNames[selected.project] || selected.project}`;
  document.querySelector('#model-meta').textContent =
    `${selected.triangles.toLocaleString(language)} ${text.triangles} · ${text[selected.textureType]}`;
  poster.alt = selected.title[language];
  canvas.setAttribute('aria-label', text.canvas);
  for (const [id, key] of [['left', 'left'], ['right', 'right'], ['zoom-in', 'zoomIn'], ['zoom-out', 'zoomOut']]) {
    document.querySelector(`#model-${id}`).setAttribute('aria-label', text[key]);
  }
  gallery.querySelectorAll('button').forEach((button, index) => {
    button.querySelector('span').textContent = models[index].title[language];
    button.querySelector('img').alt = models[index].title[language];
    button.setAttribute('aria-pressed', String(models[index] === selected));
  });
  rotationButton.setAttribute('aria-pressed', String(autoRotate));
  status.replaceChildren();
  if (state !== 'ready') {
    status.append(document.createTextNode(text[state] || text.error));
    if (state === 'error') {
      const retry = document.createElement('button');
      retry.type = 'button';
      retry.textContent = text.retry;
      retry.addEventListener('click', () => selectModel(selected));
      status.append(retry);
    }
  }
}

function setState(next) {
  state = next;
  stage.setAttribute('aria-busy', String(state === 'loading'));
  stage.dataset.failed = String(state !== 'ready' && state !== 'loading');
  document.querySelectorAll('.model-workbench button:not(#model-status button)')
    .forEach((button) => { button.disabled = state !== 'ready'; });
  refreshLabels();
}

function buildGallery() {
  for (const model of models) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'model-card';
    button.dataset.project = model.project;
    const image = document.createElement('img');
    image.src = `${model.poster}?v=3d-22`;
    image.width = image.height = 600;
    image.loading = 'lazy';
    button.append(image, document.createElement('span'));
    button.addEventListener('click', () => {
      history.replaceState(null, '', `${location.pathname}${location.search}#${model.id}`);
      selectModel(model);

    });
    gallery.append(button);
  }
}

function pauseRotation() {
  pausedUntil = performance.now() + 5000;
}

// Zona del canvas que queda libre de paneles superpuestos. El modelo se centra
// ahí (en escritorio: el 65 % derecho, por encima del selector y el carrusel).
function freeArea() {
  const w = stage.clientWidth, h = stage.clientHeight;
  const rect = stage.getBoundingClientRect();
  const filter = document.querySelector('.model-project-filter').getBoundingClientRect();
  const panel = document.querySelector('.model-panel').getBoundingClientRect();
  const left = innerWidth > 700 ? w * 0.35 : 0;
  // Permitimos que el carrusel tape un poco la base del modelo.
  const bottom = Math.min(h, filter.top - rect.top + 24);
  const top = innerWidth > 700 ? 0 : Math.max(0, panel.bottom - rect.top);
  return { w, h, left, top, bottom };
}

// Desplaza la proyección para que el centro del modelo caiga en la zona libre.
function applyViewOffset(area) {
  const freeW = area.w - area.left, freeH = Math.max(40, area.bottom - area.top);
  const shiftX = area.left + freeW / 2 - area.w / 2;
  const shiftY = area.top + freeH / 2 - area.h / 2;
  camera.setViewOffset(area.w, area.h, -shiftX, -shiftY, area.w, area.h);
  return { freeW, freeH };
}

// Encuadre automático: usa las dimensiones reales de la geometría. Como el modelo
// gira alrededor del eje vertical, se mide su radio horizontal máximo y su altura.
function fitCamera(keepDirection = false) {
  if (!currentRoot) return;
  const area = freeArea();
  if (!area.w || !area.h) return;
  const { freeW, freeH } = applyViewOffset(area);
  const box = new THREE.Box3().setFromObject(currentRoot);
  const center = box.getCenter(new THREE.Vector3());
  let radius = 0;
  for (const x of [box.min.x, box.max.x]) {
    for (const z of [box.min.z, box.max.z]) radius = Math.max(radius, Math.hypot(x - center.x, z - center.z));
  }
  const halfHeight = (box.max.y - box.min.y) / 2;
  const fill = 0.94; // fracción de la zona libre que ocupa el modelo
  const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * (freeH / area.h) * fill;
  const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * (freeW / area.h) * fill;
  const sinH = tanH / Math.sqrt(1 + tanH * tanH);
  const newDistance = Math.max(radius / sinH, halfHeight / tanV + radius * 0.85, 0.05);
  const oldDistance = camera.position.distanceTo(controls.target);
  const direction = keepDirection && fittedDistance > 0 && oldDistance > 0
    ? camera.position.clone().sub(controls.target).normalize()
    : new THREE.Vector3(4, 2.5, 5).normalize();
  const zoomRatio = keepDirection && fittedDistance > 0 ? oldDistance / fittedDistance : 1;
  fittedDistance = newDistance;
  controls.target.copy(center);
  camera.position.copy(direction.multiplyScalar(newDistance * zoomRatio).add(center));
  controls.minDistance = Math.max(radius, halfHeight) * 0.45;
  controls.maxDistance = newDistance * 3;
  controls.update();
  if (!keepDirection) controls.saveState();
}

function disposeRoot(root) {
  if (!root) return;
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  root.traverse((mesh) => {
    if (mesh.geometry) geometries.add(mesh.geometry);
    if (mesh.material) {
      const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      list.forEach((material) => materials.add(material));
    }
    mesh.userData.originalMaterials?.forEach((material) => materials.add(material));
  });
  materials.forEach((material) => {
    Object.values(material).forEach((value) => { if (value?.isTexture) textures.add(value); });
    material.dispose();
  });
  textures.forEach((texture) => texture.dispose());
  geometries.forEach((geometry) => geometry.dispose());
}

async function applyTextures(root, model) {
  const texturePromises = new Map();
  const loader = new THREE.TextureLoader();
  const tasks = [];
  const records = [];
  root.traverse((mesh) => {
    if (!mesh.isMesh) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mesh.userData.originalMaterials = [...materials];
    for (const material of materials) {
      const key = material.name.match(/#(\d+)/)?.[1] || 'default';
      const maps = model.textures[key] || model.textures.default || {};
      material.color.set(0xffffff);
      material.roughness = 0.82;
      material.metalness = maps.metalnessMap ? 0.6 : 0;
      material.side = THREE.DoubleSide;
      material.polygonOffset = true;
      material.polygonOffsetFactor = 1;
      material.polygonOffsetUnits = 1;
      if (maps.emissiveMap) {
        material.emissive.set(0xffffff);
        material.emissiveIntensity = 0.5;
      }
      if (maps.alphaMap) {
        material.transparent = true;
        material.depthWrite = false;
        material.opacity = 0.55;
      }
      for (const [slot, url] of Object.entries(maps)) {
        if (!texturePromises.has(url)) {
          texturePromises.set(url, loader.loadAsync(`${url}?v=3d-22`).then((texture) => {
            // Estas imágenes son las originales para las UV del FBX, no imágenes
            // empaquetadas por el exportador GLTF; mantienen la orientación vertical.
            texture.flipY = true;
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.colorSpace = ['map', 'emissiveMap'].includes(slot)
              ? THREE.SRGBColorSpace : THREE.NoColorSpace;
            if (model.textureType === 'pixel') {
              texture.magFilter = THREE.NearestFilter;
              texture.minFilter = THREE.NearestMipmapNearestFilter;
            }
            texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
            return texture;
          }));
        }
        tasks.push(texturePromises.get(url).then((texture) => {
          material[slot] = texture;
          material.needsUpdate = true;
        }));
      }
    }
    records.push({ mesh, original: mesh.material });
  });
  // Espera todas las texturas, incluso cuando falla una, antes de liberar recursos.
  const results = await Promise.allSettled(tasks);
  if (results.some((result) => result.status === 'rejected')) {
    throw new Error('Texture load failed');
  }
  for (const record of records) {
    record.wire = new THREE.MeshBasicMaterial({
      color: 0xc7d062, wireframe: true, side: THREE.DoubleSide,
    });
    const overlayMaterial = record.wire.clone();
    overlayMaterial.transparent = true;
    overlayMaterial.opacity = 0.65;
    overlayMaterial.depthWrite = false;
    record.overlay = new THREE.Mesh(record.mesh.geometry, overlayMaterial);
    record.overlay.name = 'Wireframe overlay';
    record.overlay.visible = false;
    record.overlay.renderOrder = 1;
    record.mesh.add(record.overlay);
    // La alternativa wireframe también se libera aunque no esté activa al cambiar.
    record.mesh.userData.originalMaterials.push(record.wire);
  }
  return records;
}

function applyMode() {
  for (const record of materialRecords) {
    record.mesh.material = mode === 'wire' ? record.wire : record.original;
    record.overlay.visible = mode === 'overlay';
  }
  document.querySelectorAll('[data-mode]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  });
}

async function selectModel(model) {
  selected = model;
  if (!visibleModels().includes(model)) {
    document.querySelector('#model-project').value = 'all';
    gallery.querySelectorAll('.model-card').forEach(card => { card.hidden = false; });
  }
  poster.src = `${model.poster}?v=3d-22`;
  poster.hidden = false;
  refreshLabels();
  if (!renderer) return;
  const request = ++requestNumber;
  setState('loading');
  let root;
  try {
    const gltf = await new GLTFLoader().loadAsync(`${model.url}?v=3d-22`);
    root = gltf.scene;
    const records = await applyTextures(root, model);
    if (request !== requestNumber) { disposeRoot(root); return; }
    if (currentRoot) scene.remove(currentRoot);
    disposeRoot(currentRoot);
    currentRoot = root;
    materialRecords = records;
    scene.add(root);
    applyMode();
    fitCamera();
    pausedUntil = performance.now() + 1000;
    renderer.render(scene, camera);
    poster.hidden = true;
    setState('ready');
  } catch (error) {
    disposeRoot(root);
    if (request === requestNumber) setState('error');
    console.warn('3D model could not be loaded:', model.id, error);
  }
}

function initializeRenderer() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x243341);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  scene.environmentIntensity = 0.55;
  room.dispose();
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x687580, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 1.3);
  key.position.set(3, 5, 4);
  scene.add(key);
  camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotateSpeed = 0.6;
  controls.addEventListener('start', () => { interacting = true; pauseRotation(); });
  controls.addEventListener('end', () => { interacting = false; pauseRotation(); });
  canvas.addEventListener('pointerdown', pauseRotation);
  canvas.addEventListener('wheel', pauseRotation, { passive: true });
  canvas.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', '+', '-', '='].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') orbit(-0.2);
    else if (event.key === 'ArrowRight') orbit(0.2);
    else zoom(['+', '='].includes(event.key) ? 0.85 : 1.15);
  });
  const resize = () => {
    const width = stage.clientWidth, height = stage.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    // Reencuadra al cambiar el tamaño, conservando el giro y zoom del usuario.
    fitCamera(true);
  };
  new ResizeObserver(resize).observe(stage);
  resize();
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; })
    .observe(stage);
  renderer.setAnimationLoop((time) => {
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    if (document.hidden || !visible || state !== 'ready') return;
    controls.autoRotate = autoRotate && !interacting && time >= pausedUntil;
    controls.update(delta);
    renderer.render(scene, camera);
  });
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    requestNumber++;
    poster.hidden = false;
    renderer = null;
    setState('unsupported');
  });
}

function orbit(angle) {
  if (!controls) return;
  pauseRotation();
  camera.position.sub(controls.target).applyAxisAngle(new THREE.Vector3(0, 1, 0), angle).add(controls.target);
  controls.autoRotate = false;
  controls.update();
}

function zoom(factor) {
  if (!controls) return;
  pauseRotation();
  const offset = camera.position.clone().sub(controls.target);
  offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance));
  camera.position.copy(controls.target).add(offset);
  controls.autoRotate = false;
  controls.update();
}

document.querySelectorAll('[data-mode]').forEach((button) => {
  button.addEventListener('click', () => { mode = button.dataset.mode; applyMode(); });
});
rotationButton.addEventListener('click', () => {
  autoRotate = !autoRotate;
  if (autoRotate) pausedUntil = 0;
  refreshLabels();
});
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) { autoRotate = false; refreshLabels(); }
});
document.querySelector('#model-left').addEventListener('click', () => orbit(-0.25));
document.querySelector('#model-right').addEventListener('click', () => orbit(0.25));
document.querySelector('#model-zoom-in').addEventListener('click', () => zoom(0.8));
document.querySelector('#model-zoom-out').addEventListener('click', () => zoom(1.25));
document.querySelector('#model-reset').addEventListener('click', () => { pauseRotation(); fitCamera(false); });
document.addEventListener('portfolio-language', (event) => {
  language = event.detail;
  refreshLabels();
});
window.addEventListener('hashchange', () => {
  const model = models.find((item) => `#${item.id}` === location.hash);
  if (model && model !== selected) selectModel(model);
});

// Una sola escena WebGL; el filtro controla las miniaturas disponibles.
const projectFilter = document.querySelector('#model-project');
projectFilter.replaceChildren();
for (const project of ['all', ...new Set(models.map(model => model.project))]) {
  const option = document.createElement('option');
  option.value = project;
  option.textContent = project === 'all' ? 'Todos los proyectos' : projectNames[project] || project;
  if (project === 'all') option.dataset.t = 'modelAllProjects';
  if (project === 'nordico') option.dataset.t = 'modelNordic';
  projectFilter.append(option);
}
projectFilter.addEventListener('change', () => {
  const project = projectFilter.value;
  gallery.querySelectorAll('.model-card').forEach((card) => {
    card.hidden = project !== 'all' && card.dataset.project !== project;
  });
  const first = models.find((model) => project === 'all' || model.project === project);
  if (first && project !== 'all' && selected.project !== project) selectModel(first);
  refreshLabels();
  gallery.scrollTo({ left: 0, behavior: 'auto' });
});
for (const [id, direction] of [['gallery-prev', -1], ['gallery-next', 1]]) {
  document.querySelector(`#${id}`).addEventListener('click', () => {
    gallery.scrollBy({ left: direction * gallery.clientWidth * 0.75,
      behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  });
}

// La rueda sobre las miniaturas recorre la fila, sin desplazar la página.
gallery.addEventListener('wheel', (event) => {
  if (gallery.scrollWidth <= gallery.clientWidth) return;
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    gallery.scrollLeft += event.deltaY * (event.deltaMode === 1 ? 16 : 1);
  }
}, { passive: false });

buildGallery();
refreshLabels();
if (location.protocol === 'file:') {
  setState('local');
} else {
  try {
    initializeRenderer();
    selectModel(selected);
  } catch (error) {
    renderer = null;
    setState('unsupported');
    console.warn('3D rendering is unavailable:', error);
  }
}
