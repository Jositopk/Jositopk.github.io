// INTERACCIONES DEL PORTFOLIO
// Los textos y datos se cargan antes, desde content.js.

let lang = "es";
try {
  lang = localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
} catch {}
const requestedLang = new URLSearchParams(location.search).get("lang");
if (["es", "en"].includes(requestedLang)) lang = requestedLang;
const dialog = document.querySelector("#project-dialog");
const isJams = document.body.dataset.page === "jams";
// Actualiza los textos y genera las tarjetas según el idioma.
function render() {
  const t = translations[lang];
  document.querySelector(".menu-toggle")?.setAttribute("aria-label", t.menuOpen);
  document.querySelector(".menu-close")?.setAttribute("aria-label", t.menuClose);
  document.documentElement.lang = lang;
  document.querySelector("#language").value = lang;
  document.querySelectorAll("[data-t]").forEach((el) => (el.innerHTML = t[el.dataset.t]));
  document.querySelectorAll("[data-alt]").forEach((el) => (el.alt = t[el.dataset.alt]));
  document.querySelector('meta[name="description"]').content = isJams
    ? t.jamMeta
    : document.body.dataset.page === "art" ? t.galleryMeta : t.meta;
  document
    .querySelector("nav")
    .setAttribute("aria-label", lang === "es" ? "Principal" : "Main navigation");
  document
    .querySelectorAll(".brand")
    .forEach((el) =>
      el.setAttribute(
        "aria-label",
        lang === "es" ? "José Manuel — Inicio" : "José Manuel — Home",
      ),
    );
  const avatar = document.querySelector(".avatar");
  if (avatar)
    avatar.alt =
      lang === "es"
        ? "Ilustración del avatar de José Manuel"
        : "José Manuel’s illustrated avatar";
  document.querySelector(".cv-close")?.setAttribute("aria-label", t.close);
  document.querySelector("#cv-frame")?.setAttribute("title", t.cvFrameTitle);
  const close = document.querySelector(".close");
  if (close) close.setAttribute("aria-label", t.close);
  const grid = document.querySelector("#projects");
  if (grid)
    grid.innerHTML = projects
      .map(
        (p, i) =>
          /* HTML */ `<button type="button" class="project-card" data-project="${i}">
            <div class="project-face">
              <div class="meta"><span>0${i + 1}</span><span>JM / PORTFOLIO</span></div>
              <strong>${lang === "en" && p.titleEn ? p.titleEn : p.title}</strong><span class="category">${p.label[lang]}</span>
            </div>
            <div class="card-bottom">
              <span>${p.short[lang]}</span><span>${t.view}</span>
            </div>
          </button>`,
      )
      .join("");
  const list = document.querySelector("#jam-list");
  if (list)
    list.innerHTML = jams
      .map(
        (j, i) =>
          /* HTML */ `<article class="jam-entry">
            <div class="jam-visual">
              <a href="${j.url}" target="_blank" rel="noopener noreferrer"
                ><img
                  src="${j.image}"
                  alt="${t.coverAlt} ${j.title}"
                  width="630"
                  height="500"
                  loading="lazy" /></a><span class="eyebrow">0${i + 1} / ${j.genre}</span>
            </div>
            <div class="jam-copy">
              <span class="eyebrow"
                >${lang === "en" && j.eventEn ? j.eventEn : j.event}</span>
              <h2>${j.title}</h2>
              <p>${j.description[lang]}</p>
              <h3>${t.role}</h3>
              <p>${j.role[lang]}</p>
              <span class="eyebrow jam-duration">${t.duration}</span>
              <div class="jam-actions">
                ${j.title === "BandBang" ? `<a class="text-link" href="art.html#bandbang">${t.galleryLink}</a>` : ""}
                <a class="solid" href="${j.url}" target="_blank" rel="noopener noreferrer"
                  >${t.gameLink}</a><a
                  class="text-link"
                  href="${j.jamUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  >${t.jamLink}</a>
              </div>
            </div>
          </article>`,
      )
      .join("");
  if (typeof renderGallery === "function") renderGallery();
  // Conserva el idioma al cambiar de página, incluso al abrir archivos locales.
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (/^(index|jams|art)\.html/.test(href)) {
      const u = new URL(href, location.href);
      u.searchParams.set("lang", lang);
      a.setAttribute("href", u.pathname.split("/").pop() + u.search + u.hash);
    }
  });
}
// Ventana de detalle de un proyecto.
function openProject(i) {
  const p = projects[i],
    t = translations[lang];
  document.querySelector("#dialog-content").innerHTML = /* HTML */ `<span class="eyebrow"
      >${p.label[lang]}</span>
    <h2 id="dialog-title">${lang === "en" && p.titleEn ? p.titleEn : p.title}</h2>
    <p>${p.desc[lang]}</p>
    <h3>${t.role}</h3>
    <p>${p.role[lang]}</p>
    <h3>${t.tools}</h3>
    <div class="skills">
      ${p.tools
        .split(" / ")
        .map((s) => `<span>${s}</span>`)
        .join("")}
    </div>
    ${p.url ? /* HTML */ `<div class="project-actions"><a class="solid" href="${p.url}" target="_blank" rel="noopener noreferrer">${t[p.linkKey]}</a></div>` : ""}`;
  dialog.showModal();
  document.body.classList.add("modal-open");
}
document.querySelector("#language").addEventListener("change", (e) => {
  lang = e.target.value;
  try {
    localStorage.setItem("portfolio-language", lang);
  } catch {}
  // Actualiza el idioma de la URL para conservarlo al recargar.
  if (location.protocol !== "file:") {
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u);
  }
  render();
});
document.querySelector("#projects")?.addEventListener("click", (e) => {
  const card = e.target.closest("[data-project]");
  if (card) openProject(Number(card.dataset.project));
});
document.querySelector(".close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
dialog?.addEventListener("close", () => document.body.classList.remove("modal-open"));
render();

// Visor del CV: apertura, cierre y retorno del foco al botón.
const cvDialog = document.querySelector("#cv-dialog");
const cvTrigger = document.querySelector("#view-cv");
cvTrigger?.addEventListener("click", () => {
  const frame = document.querySelector("#cv-frame");
  if (!frame.hasAttribute("src")) frame.src = frame.dataset.src;
  cvDialog.showModal();
  document.body.classList.add("modal-open");
});
document.querySelector(".cv-close")?.addEventListener("click", () => cvDialog.close());
cvDialog?.addEventListener("click", (e) => {
  if (e.target !== cvDialog) return;
  const r = cvDialog.getBoundingClientRect();
  if (
    e.clientX < r.left ||
    e.clientX > r.right ||
    e.clientY < r.top ||
    e.clientY > r.bottom
  )
    cvDialog.close();
});
cvDialog?.addEventListener("close", () => {
  if (!document.querySelector("dialog[open]"))
    document.body.classList.remove("modal-open");
  cvTrigger.focus({ preventScroll: true });
});

// Menú móvil: apertura lateral, fondo modal y retorno del foco.
const mobileMenu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".mobile-menu-links");
const mobileViewport = window.matchMedia("(max-width: 1050px)");
let menuCloseTimer;

function openMobileMenu() {
  if (mobileMenu.open || !mobileViewport.matches) return;
  clearTimeout(menuCloseTimer);
  // Copia los enlaces ya traducidos y con el idioma conservado en sus URLs.
  menuLinks.innerHTML = document.querySelector("header nav").innerHTML;
  menuLinks.setAttribute("aria-label", translations[lang].menuTitle);
  mobileMenu.showModal();
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  requestAnimationFrame(() => {
    if (mobileMenu.open) mobileMenu.classList.add("is-visible");
  });
}

function closeMobileMenu(immediate = false) {
  if (!mobileMenu.open) return;
  clearTimeout(menuCloseTimer);
  mobileMenu.classList.remove("is-visible");
  menuToggle.setAttribute("aria-expanded", "false");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (immediate || reducedMotion) mobileMenu.close();
  else menuCloseTimer = setTimeout(() => mobileMenu.close(), 220);
}

menuToggle.addEventListener("click", openMobileMenu);
mobileMenu.querySelector(".menu-close").addEventListener("click", () => closeMobileMenu());
menuLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileMenu(true);
});
mobileMenu.addEventListener("click", (event) => {
  if (event.target !== mobileMenu) return;
  const bounds = mobileMenu.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    closeMobileMenu();
  }
});
mobileMenu.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMobileMenu();
});
mobileMenu.addEventListener("close", () => {
  clearTimeout(menuCloseTimer);
  mobileMenu.classList.remove("is-visible");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (mobileViewport.matches) menuToggle.focus({preventScroll: true});
});
mobileViewport.addEventListener("change", (event) => {
  if (!event.matches) closeMobileMenu(true);
});
