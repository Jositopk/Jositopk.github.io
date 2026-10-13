// Reproductores del portfolio y mezclador sincronizado de BandBang.
// Los audios solo se descargan al reproducirlos; no hay reproducción automática.
const musicText = {
  es: {
    title: 'Música que también juega.',
    intro: 'Escucha los temas y descubre cómo cambia BandBang al sumar cada músico.',
    bandNote: 'Una banda que se construye al jugar: cada músico añade su instrumento.',
    lazosNote: 'Composiciones para Lazos de Sangre.',
    timeNote: 'Menú, ambiente y ritmo para Time Bender.',
    full: 'OST ALL · Canción completa', ambience: 'Ambiente',
    explore: 'Explorar instrumentos y mezclas',
    mixer: 'Construye la banda',
    mixerNote: 'Activa instrumentos, escúchalos solos o combínalos. Todos comparten el mismo tiempo de reproducción.',
    versions: 'Mezclas exportadas',
    versionsNote: 'Versiones originales con distintas combinaciones de instrumentos.',
    play: 'Reproducir', pause: 'Pausar', solo: 'Solo',
    all: 'Todos', none: 'Ninguno', loading: 'Cargando instrumentos…',
    ready: 'Elige los músicos y pulsa reproducir.',
    error: 'No se pudo cargar el audio. Comprueba la conexión y vuelve a intentarlo.',
    local: 'El mezclador necesita abrirse desde GitHub Pages o un servidor local. Puedes escuchar las mezclas exportadas de abajo.',
    seek: 'Posición de reproducción', volume: 'Volumen',
    menu: 'Menú principal', gameplay: 'Gameplay', day: 'Día',
    theme1: 'Tema 1', theme2: 'Tema 2',
    guitar: 'Guitarra española', fiddle: 'Violín', shehnai: 'Shehnai',
    sitar: 'Sitar', drums: 'Batería', sax: 'Saxofón',
  },
  en: {
    title: 'Music that plays a part.',
    intro: 'Listen to the tracks and hear BandBang change as each musician joins in.',
    bandNote: 'Build a band as you play: each musician adds their own instrument.',
    lazosNote: 'Compositions for Lazos de Sangre.',
    timeNote: 'Menu music, ambience and rhythm for Time Bender.',
    full: 'OST ALL · Full track', ambience: 'Ambience',
    explore: 'Explore instruments and mixes',
    mixer: 'Build the band',
    mixerNote: 'Enable instruments, solo them or combine them. They all share the same playback timeline.',
    versions: 'Exported mixes',
    versionsNote: 'Original versions featuring different instrument combinations.',
    play: 'Play', pause: 'Pause', solo: 'Solo',
    all: 'All', none: 'None', loading: 'Loading instruments…',
    ready: 'Choose your musicians and press play.',
    error: 'Could not load the audio. Check your connection and try again.',
    local: 'The mixer needs GitHub Pages or a local server. You can listen to the exported mixes below.',
    seek: 'Playback position', volume: 'Volume',
    menu: 'Main menu', gameplay: 'Gameplay', day: 'Day',
    theme1: 'Theme 1', theme2: 'Theme 2',
    guitar: 'Spanish guitar', fiddle: 'Violin', shehnai: 'Shehnai',
    sitar: 'Sitar', drums: 'Drums', sax: 'Saxophone',
  },
};
const musicians = [
  {code: 'G', label: 'guitar'},
  {code: 'F', label: 'fiddle'},
  {code: 'H', label: 'shehnai'},
  {code: 'S', label: 'sitar'},
  {code: 'D', label: 'drums'},
  {code: 'X', label: 'sax'},
];
const musicRoot = document.querySelector('#music-library');
const musicLabel = (key) => musicText[lang][key] || key;
const musicTime = (seconds) => {
  const n = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
};
const songName = (song) => song.codes
  ? song.codes.split('').map((code) => musicLabel(musicians.find((m) => m.code === code).label)).join(' + ')
  : musicLabel(song.label);

function trackMarkup(song) {
  return `
    <article class="music-track" data-track="${song.id}">
      <button type="button" class="music-play" aria-label="${musicLabel('play')}: ${songName(song)}">▶</button>
      <div class="music-track-body">
        <h4>${songName(song)}</h4>
        <div class="music-timeline">
          <span class="music-elapsed">0:00</span>
          <input type="range" class="music-seek" min="0" max="${song.duration}"
            step="0.1" value="0" aria-label="${musicLabel('seek')}: ${songName(song)}">
          <span>${musicTime(song.duration)}</span>
        </div>
        <p class="music-error" role="status" hidden></p>
      </div>
      <audio preload="none" src="${song.file}"></audio>
    </article>`;
}

musicRoot.innerHTML = `
  <div class="music-master">
    <span class="eyebrow">JM / SOUNDTRACKS</span>
    <label><span data-mt="volume"></span>
      <input id="music-volume" type="range" min="0" max="1" step="0.01" value="0.8">
    </label>
  </div>
  <article class="music-album">
    <div class="music-album-heading"><span class="music-number">01</span>
      <div><h3>BandBang</h3><p data-mt="bandNote"></p></div>
    </div>
    ${musicSongs.filter((s) => s.group === 'bandbang').map(trackMarkup).join('')}
    <details class="music-details">
      <summary><span data-mt="explore"></span><span aria-hidden="true">+</span></summary>
      <div class="music-expanded">
        <h4 data-mt="mixer"></h4><p data-mt="mixerNote"></p>
        <div class="mixer-presets">
          <button type="button" data-preset="all" data-mt="all"></button>
          <button type="button" data-preset="none" data-mt="none"></button>
        </div>
        <div class="musician-list">
          ${musicians.map((m, i) => `
            <div class="musician">
              <label><input type="checkbox" data-musician="${i}" checked>
                <span class="instrument-code">${m.code}</span><span data-mt="${m.label}"></span>
              </label>
              <button type="button" data-solo="${i}" data-mt="solo"></button>
            </div>`).join('')}
        </div>
        <div class="mixer-transport">
          <button type="button" id="mixer-play" class="music-play">▶</button>
          <span id="mixer-elapsed">0:00</span>
          <input id="mixer-seek" type="range" min="0" max="${musicStems[0].duration}" step="0.1" value="0">
          <span id="mixer-duration">${musicTime(musicStems[0].duration)}</span>
        </div>
        <p id="mixer-status" role="status" data-mt="ready"></p>
        <details class="music-versions">
          <summary data-mt="versions"></summary><p data-mt="versionsNote"></p>
          ${musicSongs.filter((s) => s.group === 'mixes').map(trackMarkup).join('')}
        </details>
      </div>
    </details>
  </article>
  ${[['lazos', 'Lazos de Sangre', 'lazosNote'], ['timebender', 'Time Bender', 'timeNote']].map(([id, title, note], i) => `
    <article class="music-album">
      <div class="music-album-heading"><span class="music-number">0${i + 2}</span>
        <div><h3>${title}</h3><p data-mt="${note}"></p></div>
      </div>
      ${musicSongs.filter((s) => s.group === id).map(trackMarkup).join('')}
    </article>`).join('')}
`;

// Un único reproductor activo: las canciones y el mezclador se excluyen entre sí.
const songPlayers = [...musicRoot.querySelectorAll('[data-track]')].map((row) => ({
  row,
  song: musicSongs.find((song) => song.id === row.dataset.track),
  audio: row.querySelector('audio'),
  play: row.querySelector('.music-play'),
  seek: row.querySelector('.music-seek'),
  elapsed: row.querySelector('.music-elapsed'),
  error: row.querySelector('.music-error'),
}));
let playbackRequest = 0;
let masterVolume = 0.8;
function updateSongButton(player) {
  player.play.textContent = player.audio.paused ? '▶' : 'Ⅱ';
  player.play.setAttribute('aria-label', `${musicLabel(player.audio.paused ? 'play' : 'pause')}: ${songName(player.song)}`);
  player.row.classList.toggle('is-playing', !player.audio.paused);
}
function pauseSongs(except) {
  songPlayers.forEach((player) => { if (player !== except) player.audio.pause(); });
}
for (const player of songPlayers) {
  const {audio, play, seek, elapsed, error} = player;
  audio.volume = masterVolume;
  play.addEventListener('click', async () => {
    ++playbackRequest;
    if (!audio.paused) { audio.pause(); return; }
    pauseSongs(player);
    pauseMixer();
    error.hidden = true;
    try { await audio.play(); }
    catch { error.textContent = musicLabel('error'); error.hidden = false; }
  });
  audio.addEventListener('play', () => { pauseSongs(player); pauseMixer(); updateSongButton(player); });
  ['pause', 'ended'].forEach((event) => audio.addEventListener(event, () => updateSongButton(player)));
  audio.addEventListener('timeupdate', () => {
    seek.value = audio.currentTime;
    elapsed.textContent = musicTime(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => { seek.max = audio.duration; });
  audio.addEventListener('error', () => { error.textContent = musicLabel('error'); error.hidden = false; });
  seek.addEventListener('input', () => {
    if (audio.readyState) audio.currentTime = Number(seek.value);
  });
}

// Web Audio arranca todas las pistas en el mismo instante del reloj de audio.
// Al cambiar los músicos solo cambia su ganancia: no se pierde sincronización.
let audioContext;
let mixerMaster;
let mixerBuffers;
let mixerLoading;
let mixerNodes = [];
let mixerOffset = 0;
let mixerStart = 0;
let mixerPlaying = false;
let mixerFrame;
const enabledMusicians = musicians.map(() => true);
const mixerPlay = document.querySelector('#mixer-play');
const mixerSeek = document.querySelector('#mixer-seek');
const mixerStatus = document.querySelector('#mixer-status');
function mixerDuration() { return mixerBuffers ? Math.min(...mixerBuffers.map((b) => b.duration)) : musicStems[0].duration; }
function mixerPosition() {
  return mixerPlaying ? Math.min(mixerDuration(), mixerOffset + audioContext.currentTime - mixerStart) : mixerOffset;
}
function mixerMessage(key) {
  mixerStatus.dataset.mt = key;
  mixerStatus.textContent = musicLabel(key);
}
function updateMixerButton() {
  mixerPlay.textContent = mixerPlaying ? 'Ⅱ' : '▶';
  mixerPlay.setAttribute('aria-label', `${musicLabel(mixerPlaying ? 'pause' : 'play')}: ${musicLabel('mixer')}`);
}
function paintMixerTime() {
  const position = mixerPosition();
  mixerSeek.value = position;
  document.querySelector('#mixer-elapsed').textContent = musicTime(position);
  if (mixerPlaying && position >= mixerDuration()) {
    pauseMixer(); mixerOffset = 0; mixerSeek.value = 0;
    document.querySelector('#mixer-elapsed').textContent = '0:00';
  } else if (mixerPlaying) mixerFrame = requestAnimationFrame(paintMixerTime);
}
function pauseMixer() {
  if (mixerPlaying) mixerOffset = mixerPosition();
  mixerPlaying = false;
  mixerNodes.forEach(({source, gain}) => {
    try { source.stop(); } catch {}
    source.disconnect(); gain.disconnect();
  });
  mixerNodes = [];
  cancelAnimationFrame(mixerFrame);
  updateMixerButton();
}
async function loadMixer() {
  if (mixerBuffers) return;
  if (mixerLoading) return mixerLoading;
  mixerLoading = Promise.all(musicStems.map(async (stem) => {
    const response = await fetch(stem.file);
    if (!response.ok) throw new Error('Audio unavailable');
    return audioContext.decodeAudioData(await response.arrayBuffer());
  })).then((buffers) => {
    mixerBuffers = buffers;
    mixerSeek.max = mixerDuration();
    document.querySelector('#mixer-duration').textContent = musicTime(mixerDuration());
  }).finally(() => { mixerLoading = null; });
  return mixerLoading;
}
function startMixer() {
  if (mixerOffset >= mixerDuration()) mixerOffset = 0;
  const when = audioContext.currentTime + 0.04;
  mixerStart = when;
  mixerNodes = mixerBuffers.map((buffer, i) => {
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    source.buffer = buffer;
    gain.gain.value = enabledMusicians[i] ? 1 : 0;
    source.connect(gain).connect(mixerMaster);
    source.start(when, mixerOffset);
    return {source, gain};
  });
  mixerPlaying = true;
  updateMixerButton(); paintMixerTime();
}
mixerPlay.addEventListener('click', async () => {
  const request = ++playbackRequest;
  if (mixerPlaying) { pauseMixer(); return; }
  if (location.protocol === 'file:') { mixerMessage('local'); return; }
  mixerPlay.disabled = true;
  mixerMessage('loading');
  pauseSongs();
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      mixerMaster = audioContext.createGain();
      // Un compresor limita los picos al sumar varios instrumentos.
      const compressor = audioContext.createDynamicsCompressor();
      mixerMaster.gain.value = masterVolume;
      mixerMaster.connect(compressor).connect(audioContext.destination);
    }
    await audioContext.resume();
    await loadMixer();
    if (request !== playbackRequest) { mixerMessage('ready'); return; }
    startMixer(); mixerMessage('ready');
  } catch { mixerMessage('error'); }
  finally { mixerPlay.disabled = false; }
});
function setMusicians(values) {
  values.forEach((value, i) => {
    enabledMusicians[i] = value;
    musicRoot.querySelector(`[data-musician="${i}"]`).checked = value;
    musicRoot.querySelector(`[data-solo="${i}"]`).setAttribute('aria-pressed', String(value && values.filter(Boolean).length === 1));
    if (mixerNodes[i]) mixerNodes[i].gain.gain.setTargetAtTime(value ? 1 : 0, audioContext.currentTime, 0.02);
  });
}
musicRoot.querySelectorAll('[data-musician]').forEach((checkbox) => checkbox.addEventListener('change', () => {
  const values = [...enabledMusicians]; values[Number(checkbox.dataset.musician)] = checkbox.checked;
  setMusicians(values);
}));
musicRoot.querySelectorAll('[data-solo]').forEach((button) => button.addEventListener('click', () => {
  setMusicians(musicians.map((_, i) => i === Number(button.dataset.solo)));
}));
musicRoot.querySelectorAll('[data-preset]').forEach((button) => button.addEventListener('click', () => {
  setMusicians(musicians.map(() => button.dataset.preset === 'all'));
}));
mixerSeek.addEventListener('input', () => {
  const wasPlaying = mixerPlaying;
  pauseMixer(); mixerOffset = Number(mixerSeek.value);
  document.querySelector('#mixer-elapsed').textContent = musicTime(mixerOffset);
  if (wasPlaying) startMixer();
});
document.querySelector('#music-volume').addEventListener('input', (event) => {
  masterVolume = Number(event.target.value);
  songPlayers.forEach(({audio}) => { audio.volume = masterVolume; });
  if (mixerMaster) mixerMaster.gain.setTargetAtTime(masterVolume, audioContext.currentTime, 0.02);
});
function translateMusic() {
  musicRoot.querySelectorAll('[data-mt]').forEach((el) => { el.textContent = musicLabel(el.dataset.mt); });
  songPlayers.forEach((player) => {
    player.row.querySelector('h4').textContent = songName(player.song);
    player.seek.setAttribute('aria-label', `${musicLabel('seek')}: ${songName(player.song)}`);
    if (!player.error.hidden) player.error.textContent = musicLabel('error');
    updateSongButton(player);
  });
  musicians.forEach((m, i) => {
    musicRoot.querySelector(`[data-solo="${i}"]`).setAttribute('aria-label', `${musicLabel('solo')}: ${musicLabel(m.label)}`);
  });
  mixerSeek.setAttribute('aria-label', `${musicLabel('seek')}: ${musicLabel('mixer')}`);
  updateMixerButton();
}
document.querySelector('#language').addEventListener('change', translateMusic);
window.addEventListener('pagehide', () => { ++playbackRequest; pauseSongs(); pauseMixer(); });
translateMusic(); setMusicians(enabledMusicians);
