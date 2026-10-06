// Galería por proyectos. Las imágenes completas solo se cargan al abrir el visor.
const artGroups = [
  ["bandbang", "BandBang"],
  ["kitcheneer", "Kitcheneer"],
  ["subconcious", "Subconcious"],
  ["jailbreak", "Jailbreak"],
  ["lambda", "Proyecto Lambda"],
  ["nordico", "Nórdico"],
  ["legado", "Legado de Sangre"],
  ["personal", "Arte personal"],
];
let selectedGroup = artGroups.some(([id]) => id === location.hash.slice(1))
  ? location.hash.slice(1)
  : "all";
let activeArtwork = 0;
let artworkTrigger = null;
const artViewer = document.querySelector("#art-viewer");

function renderGallery() {
  const t = translations[lang];
  artGroups.find(([id]) => id === "personal")[1] = t.personalArt;
  document.title = `${t.gallery2D} — Jose Manuel Pastor González`;
  document.querySelector("#art-filters").innerHTML = [
    ["all", t.galleryAll],
    ...artGroups,
  ].map(([id, title]) => `
    <button type="button" data-filter="${id}"
      aria-pressed="${selectedGroup === id}">${title}</button>
  `).join("");
  document.querySelector("#art-gallery").innerHTML = artGroups
    .filter(([id]) => selectedGroup === "all" || selectedGroup === id)
    .map(([id, title]) => `
      <section class="art-project" id="${id}">
        <div class="section-head">
          <h2>${title}</h2>
          <span class="eyebrow">${id === "bandbang" ? "GAME JAM" : id === "personal" ? "2D / FAN ART" : id === "legado" ? "2D / LOGO" : "UNI / 2D"}</span>
        </div>
        <div class="artworks">
          ${artworks.map((art, index) => art.group !== id ? "" : `
            <button class="artwork" type="button" data-artwork="${index}">
              <span class="artwork-image">
                <img src="${art.thumb}" alt="${art.title[lang]}"
                  class="${art.pixel ? "pixel-art" : ""}" loading="lazy"
                  width="${art.width}" height="${art.height}">
              </span>
              <span class="artwork-label">${art.title[lang]} <span aria-hidden="true">↗</span></span>
            </button>
          `).join("")}
        </div>
      </section>
    `).join("");
  if (artViewer.open) showArtwork(activeArtwork);
}

function showArtwork(index) {
  activeArtwork = index;
  const art = artworks[index];
  const image = document.querySelector("#art-image");
  image.src = art.image;
  image.alt = art.title[lang];
  image.className = art.pixel ? "pixel-art" : "";
  document.querySelector("#art-caption").textContent =
    `${artGroups.find(([id]) => id === art.group)[1]} · ${art.title[lang]}`;
  document.querySelector("#art-full").href = art.image;
}

document.querySelector("#art-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  selectedGroup = button.dataset.filter;
  renderGallery();
  document.querySelector(`[data-filter="${selectedGroup}"]`).focus();
});
document.querySelector("#art-gallery").addEventListener("click", (event) => {
  artworkTrigger = event.target.closest("[data-artwork]");
  if (!artworkTrigger) return;
  showArtwork(Number(artworkTrigger.dataset.artwork));
  artViewer.showModal();
  document.body.classList.add("modal-open");
});
function changeArtwork(direction) {
  const indices = artworks.map((art, index) => ({art, index}))
    .filter(({art}) => selectedGroup === "all" || art.group === selectedGroup)
    .map(({index}) => index);
  const position = indices.indexOf(activeArtwork);
  showArtwork(indices[(position + direction + indices.length) % indices.length]);
}
document.querySelector("#art-prev").addEventListener("click", () => changeArtwork(-1));
document.querySelector("#art-next").addEventListener("click", () => changeArtwork(1));
document.querySelector("#art-close").addEventListener("click", () => artViewer.close());
artViewer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") changeArtwork(-1);
  if (event.key === "ArrowRight") changeArtwork(1);
});
artViewer.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  artworkTrigger?.focus({preventScroll: true});
});
