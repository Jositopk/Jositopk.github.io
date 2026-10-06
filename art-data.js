// Títulos, rutas y dimensiones de las obras de la galería.
const artworks = [
  {
    "group": "bandbang",
    "title": {
      "es": "Drummer · Variantes",
      "en": "Drummer · Variants"
    },
    "image": "assets/art/bandbang-drummer.webp",
    "thumb": "assets/art/bandbang-drummer-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Fiddler · Variantes",
      "en": "Fiddler · Variants"
    },
    "image": "assets/art/bandbang-fiddler.webp",
    "thumb": "assets/art/bandbang-fiddler-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Guitarrist · Variantes",
      "en": "Guitarrist · Variants"
    },
    "image": "assets/art/bandbang-guitarrist.webp",
    "thumb": "assets/art/bandbang-guitarrist-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Mexalline · Variantes",
      "en": "Mexalline · Variants"
    },
    "image": "assets/art/bandbang-mexalline.webp",
    "thumb": "assets/art/bandbang-mexalline-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Saxophonist · Variantes",
      "en": "Saxophonist · Variants"
    },
    "image": "assets/art/bandbang-saxophonist.webp",
    "thumb": "assets/art/bandbang-saxophonist-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Shehnaist · Variantes",
      "en": "Shehnaist · Variants"
    },
    "image": "assets/art/bandbang-shehnaist.webp",
    "thumb": "assets/art/bandbang-shehnaist-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Sitarist · Variantes",
      "en": "Sitarist · Variants"
    },
    "image": "assets/art/bandbang-sitarist.webp",
    "thumb": "assets/art/bandbang-sitarist-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "YoungSitarist · Variantes",
      "en": "YoungSitarist · Variants"
    },
    "image": "assets/art/bandbang-youngsitarist.webp",
    "thumb": "assets/art/bandbang-youngsitarist-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Teacher",
      "en": "Teacher"
    },
    "image": "assets/art/bandbang-teacher.webp",
    "thumb": "assets/art/bandbang-teacher-preview.webp",
    "pixel": false,
    "width": 786,
    "height": 2400,
    "count": 1
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Niños · Variantes",
      "en": "Children · Variants"
    },
    "image": "assets/art/bandbang-kids.webp",
    "thumb": "assets/art/bandbang-kids-preview.webp",
    "pixel": false,
    "width": 4000,
    "height": 800,
    "count": 4
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Instrumentos",
      "en": "Instruments"
    },
    "image": "assets/art/bandbang-instruments.webp",
    "thumb": "assets/art/bandbang-instruments-preview.webp",
    "pixel": false,
    "width": 3000,
    "height": 1600,
    "count": 5
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Símbolos",
      "en": "Symbols"
    },
    "image": "assets/art/bandbang-signs.webp",
    "thumb": "assets/art/bandbang-signs-preview.webp",
    "pixel": false,
    "width": 4000,
    "height": 1600,
    "count": 7
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Atlas de escenarios",
      "en": "Environment atlas"
    },
    "image": "assets/art/bandbang-environments.webp",
    "thumb": "assets/art/bandbang-environments-preview.webp",
    "pixel": false,
    "width": 6000,
    "height": 4800,
    "count": 36
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Cartel de Jorge",
      "en": "Jorge poster"
    },
    "image": "assets/art/bandbang-poster.webp",
    "thumb": "assets/art/bandbang-poster-preview.webp",
    "pixel": false,
    "width": 1671,
    "height": 2400,
    "count": 1
  },
  {
    "group": "bandbang",
    "title": {
      "es": "Portada",
      "en": "Cover"
    },
    "image": "assets/art/bandbang-cover.webp",
    "thumb": "assets/art/bandbang-cover-preview.webp",
    "pixel": false,
    "width": 650,
    "height": 500,
    "count": 1
  },
  {
    "group": "jailbreak",
    "title": {
      "es": "Tiles del escenario",
      "en": "Environment tiles"
    },
    "image": "assets/art/jailbreak-tiles.png",
    "thumb": "assets/art/jailbreak-tiles-preview.webp",
    "pixel": true,
    "width": 448,
    "height": 256,
    "count": 26
  },
  {
    "group": "jailbreak",
    "title": {
      "es": "Personaje y objetos",
      "en": "Character and objects"
    },
    "image": "assets/art/jailbreak-objects.png",
    "thumb": "assets/art/jailbreak-objects-preview.webp",
    "pixel": true,
    "width": 256,
    "height": 64,
    "count": 4
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Cebolla · Animaciones",
      "en": "Cebolla · Animations"
    },
    "image": "assets/art/kitcheneer-cebolla.png",
    "thumb": "assets/art/kitcheneer-cebolla-preview.webp",
    "pixel": true,
    "width": 256,
    "height": 192,
    "count": 10
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Champi azul · Animaciones",
      "en": "Champi azul · Animations"
    },
    "image": "assets/art/kitcheneer-champi_azul.png",
    "thumb": "assets/art/kitcheneer-champi_azul-preview.webp",
    "pixel": true,
    "width": 320,
    "height": 192,
    "count": 11
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Champi rojo · Animaciones",
      "en": "Champi rojo · Animations"
    },
    "image": "assets/art/kitcheneer-champi_rojo.png",
    "thumb": "assets/art/kitcheneer-champi_rojo-preview.webp",
    "pixel": true,
    "width": 320,
    "height": 192,
    "count": 11
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Chilly · Animaciones",
      "en": "Chilly · Animations"
    },
    "image": "assets/art/kitcheneer-chilly.png",
    "thumb": "assets/art/kitcheneer-chilly-preview.webp",
    "pixel": true,
    "width": 576,
    "height": 192,
    "count": 13
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Jelly · Animaciones",
      "en": "Jelly · Animations"
    },
    "image": "assets/art/kitcheneer-jelly.png",
    "thumb": "assets/art/kitcheneer-jelly-preview.webp",
    "pixel": true,
    "width": 192,
    "height": 192,
    "count": 8
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Pipa · Animaciones",
      "en": "Pipa · Animations"
    },
    "image": "assets/art/kitcheneer-pipa.png",
    "thumb": "assets/art/kitcheneer-pipa-preview.webp",
    "pixel": true,
    "width": 256,
    "height": 192,
    "count": 8
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Siluro · Animaciones",
      "en": "Siluro · Animations"
    },
    "image": "assets/art/kitcheneer-siluro.png",
    "thumb": "assets/art/kitcheneer-siluro-preview.webp",
    "pixel": true,
    "width": 256,
    "height": 128,
    "count": 6
  },
  {
    "group": "kitcheneer",
    "title": {
      "es": "Tomate · Animaciones",
      "en": "Tomate · Animations"
    },
    "image": "assets/art/kitcheneer-tomate.png",
    "thumb": "assets/art/kitcheneer-tomate-preview.webp",
    "pixel": true,
    "width": 256,
    "height": 192,
    "count": 11
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Reposo",
      "en": "Idle"
    },
    "image": "assets/art/subconcious-idle.png",
    "thumb": "assets/art/subconcious-idle-preview.webp",
    "pixel": true,
    "width": 1024,
    "height": 128,
    "count": 8
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Carrera",
      "en": "Run"
    },
    "image": "assets/art/subconcious-run.png",
    "thumb": "assets/art/subconcious-run-preview.webp",
    "pixel": true,
    "width": 1024,
    "height": 128,
    "count": 8
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Salto",
      "en": "Jump"
    },
    "image": "assets/art/subconcious-jump.png",
    "thumb": "assets/art/subconcious-jump-preview.webp",
    "pixel": true,
    "width": 768,
    "height": 128,
    "count": 6
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Derrota",
      "en": "Death"
    },
    "image": "assets/art/subconcious-dead.png",
    "thumb": "assets/art/subconcious-dead-preview.webp",
    "pixel": true,
    "width": 384,
    "height": 128,
    "count": 3
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Tiles de plataformas",
      "en": "Platform tiles"
    },
    "image": "assets/art/subconcious-tiles.png",
    "thumb": "assets/art/subconcious-tiles-preview.webp",
    "pixel": true,
    "width": 512,
    "height": 384,
    "count": 12
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Fondo panorámico",
      "en": "Panoramic background"
    },
    "image": "assets/art/subconcious-fondo.webp",
    "thumb": "assets/art/subconcious-fondo-preview.webp",
    "pixel": false,
    "width": 2400,
    "height": 556,
    "count": 1
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Portada",
      "en": "Cover"
    },
    "image": "assets/art/subconcious-portada.webp",
    "thumb": "assets/art/subconcious-portada-preview.webp",
    "pixel": false,
    "width": 1640,
    "height": 2360,
    "count": 1
  },
  {
    "group": "subconcious",
    "title": {
      "es": "Estudio del personaje",
      "en": "Character turnaround"
    },
    "image": "assets/art/subconcious-turnaround.webp",
    "thumb": "assets/art/subconcious-turnaround-preview.webp",
    "pixel": false,
    "width": 2360,
    "height": 1640,
    "count": 1
  },
  {
    "group": "lambda",
    "title": {
      "es": "Exploración de color",
      "en": "Colour exploration"
    },
    "image": "assets/art/lambda-variants.webp",
    "thumb": "assets/art/lambda-variants-preview.webp",
    "pixel": false,
    "width": 3000,
    "height": 1600,
    "count": 5
  },
  {
    "group": "lambda",
    "title": {
      "es": "Diseño de objetos",
      "en": "Prop design"
    },
    "image": "assets/art/lambda-callouts.webp",
    "thumb": "assets/art/lambda-callouts-preview.webp",
    "pixel": false,
    "width": 3000,
    "height": 800,
    "count": 3
  },
  {
    "group": "lambda",
    "title": {
      "es": "Estudios de escenario",
      "en": "Environment studies"
    },
    "image": "assets/art/lambda-studies.webp",
    "thumb": "assets/art/lambda-studies-preview.webp",
    "pixel": false,
    "width": 2000,
    "height": 800,
    "count": 2
  },
  {
    "group": "lambda",
    "title": {
      "es": "Escenario final",
      "en": "Final environment"
    },
    "image": "assets/art/lambda-escenario.webp",
    "thumb": "assets/art/lambda-escenario-preview.webp",
    "pixel": false,
    "width": 2400,
    "height": 1690,
    "count": 1
  },
  {
    "group": "lambda",
    "title": {
      "es": "Estudio de poses",
      "en": "Pose studies"
    },
    "image": "assets/art/lambda-poseslambda.webp",
    "thumb": "assets/art/lambda-poseslambda-preview.webp",
    "pixel": false,
    "width": 2400,
    "height": 2400,
    "count": 1
  },
  {
    "group": "lambda",
    "title": {
      "es": "Vistas del personaje",
      "en": "Character turnaround"
    },
    "image": "assets/art/lambda-turnaroundlambda.webp",
    "thumb": "assets/art/lambda-turnaroundlambda-preview.webp",
    "pixel": false,
    "width": 2400,
    "height": 1800,
    "count": 1
  },
  {
    "group": "nordico",
    "title": {
      "es": "Diseño final",
      "en": "Final design"
    },
    "image": "assets/art/nordico-final.webp",
    "thumb": "assets/art/nordico-final-preview.webp",
    "pixel": false,
    "width": 1520,
    "height": 1640,
    "count": 1
  },
  {
    "group": "nordico",
    "title": {
      "es": "Vistas del personaje",
      "en": "Character turnaround"
    },
    "image": "assets/art/nordico-turnaround.webp",
    "thumb": "assets/art/nordico-turnaround-preview.webp",
    "pixel": false,
    "width": 2360,
    "height": 1640,
    "count": 1
  },
  {
    "group": "personal",
    "title": {
      "es": "Sludge Life · Fanart",
      "en": "Sludge Life · Fan art"
    },
    "image": "assets/art/sludgelife-fanart.png",
    "thumb": "assets/art/sludgelife-fanart.png",
    "pixel": false,
    "width": 2048,
    "height": 1423,
    "count": 1
  },
  {
    "group": "legado",
    "title": {
      "es": "Legado de Sangre · Logo",
      "en": "Legado de Sangre · Logo"
    },
    "image": "assets/art/legado-logo.png",
    "thumb": "assets/art/legado-logo.png",
    "pixel": false,
    "width": 2000,
    "height": 2000,
    "count": 1
  }
];
