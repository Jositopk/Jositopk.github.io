// CONTENIDO DEL PORTFOLIO
// Edita aquí los textos y proyectos. Mantén las claves de traducción existentes.
// Los campos "es" y "en" corresponden a español e inglés.

// 1. Textos de las páginas y de los botones.
const translations = {
  "es": {
    "skip": "Saltar al contenido",
    "work": "Proyectos",
    "art": "Arte",
    "sound": "Música",
    "about": "Sobre mí",
    "language": "Idioma",
    "portfolio": "DESARROLLO DE VIDEOJUEGOS · ARTE · MÚSICA",
    "intro": "Programo. Dibujo.<br>Compongo.",
    "heroNote":
      "Creo videojuegos desde tres frentes:<br>su lógica, su identidad visual y " +
      "su música.",
    "explore": "Descubre mi trabajo",
    "disc": "VIDEOJUEGOS / PROGRAMACIÓN / ARTE 2D & 3D / MÚSICA",
    "selected": "01 / SELECCIÓN DE TRABAJOS",
    "workNote": "Qué hicimos, cómo funciona<br>y qué aporté yo.",
    "visual": "02 / EXPLORACIÓN VISUAL",
    "artTitle": "Dar forma<br>a una idea.",
    "artNote": "Del dibujo al volumen: una mirada<br>a mi trabajo en arte 2D y 3D.",
    "illustration": "Ilustración & arte digital",
    "modeling": "Modelado & escenas",
    "artPending": "Selección de obras próximamente.",
    "audio": "03 / UNIVERSO SONORO",
    "soundTitle": "Ponerle<br>sonido.",
    "soundNote": "Composiciones para dar ritmo al juego<br>y acompañar lo que ocurre en pantalla.",
    "soundtrack": "Composición para videojuego · Survival horror",
    "jam": "Composición para game jam · GameJam 8 de Game Scholars",
    "audioPending": "Audio próximamente",
    "person": "04 / DETRÁS DEL TRABAJO",
    "aboutTitle": "Una idea.<br>Varias formas<br>de darle vida.",
    "bio":
      "Soy Jose Manuel Pastor González. Estudio el doble grado en Diseño y " +
      "Desarrollo de Videojuegos e Ingeniería de Computadores en la Universidad " +
      "Rey Juan Carlos.",
    "bio2":
      "En mis proyectos he pasado del comportamiento de los enemigos a la " +
      "ilustración y la banda sonora. Trabajar en esas tres áreas me ayuda a " +
      "conectar las decisiones técnicas con lo que el jugador ve, escucha y " +
      "hace. Me gusta construir en equipo y entender cómo encaja mi aportación " +
      "en el conjunto.",
    "degree": "Videojuegos + Ingeniería de Computadores",
    "footer": "Programar, crear y seguir aprendiendo.",
    "top": "Volver arriba",
    "view": "Ver proyecto +",
    "role": "Mi aportación",
    "tools": "Herramientas",
    "close": "Cerrar",
    "meta":
      "Jose Manuel Pastor González: videojuegos, arte 2D y 3D y composición " +
      "musical. Proyectos, game jams y la aportación detrás de cada trabajo.",
    "jams": "Game jams",
    "jamFeatureLabel": "PROTOTIPOS / COLABORACIÓN / GAME JAMS",
    "jamFeatureTitle": "Un equipo.<br>Un plazo.<br>Un juego.",
    "seeJams": "Descubre mis game jams",
    "portraitAlt": "Retrato de José Manuel",
    "itchProfile": "Mi perfil en itch.io",
    "backPortfolio": "Volver al portfolio",
    "jamArchive": "ARCHIVO / COLABORACIONES",
    "jamsIntro":
      "Del primer boceto a la entrega.<br>Así he aportado arte, sonido y código " +
      "al equipo.",
    "collectionNote": "Los juegos, los equipos y sus páginas originales.",
    "collectionLink": "Explorar mi colección en itch.io",
    "gameLink": "Ver juego en itch.io",
    "jamLink": "Ver participación en la jam",
    "jamMeta":
      "Game jams de Jose Manuel Pastor González. Descubre BandBang y Time " +
      "Bender y mi trabajo en arte, música, sonido y programación.",
    "duration": "DESARROLLO / 1 SEMANA",
    "coverAlt": "Portada de",
    "skillArt2D": "Arte 2D",
    "skillArt3D": "Arte 3D",
    "skillMusic": "Composición musical",
    "skillSound": "Diseño de sonido",
    "skillVR": "Realidad virtual",
    "skillsDev": "Desarrollo & tecnología",
    "skillsCreative": "Arte & sonido",
    "skillsTeam": "Colaboración & metodología",
    "skillAI": "Inteligencia artificial",
    "skillOptimization": "Optimización del rendimiento",
    "skillAR": "Realidad aumentada",
    "skillTeamwork": "Trabajo en equipo",
    "skillProblemSolving": "Resolución de problemas",
    "projectItch": "Ver juego en itch.io",
    "projectCode": "Ver código en GitHub",
    "projectDemo": "Ver vídeo de demostración",
    "viewCV": "Ver CV",
    "downloadCV": "Descargar CV",
    "cvTitle": "CV · Jose Manuel Pastor González",
    "cvFrameTitle": "CV de Jose Manuel Pastor González",
    "cvHelp": "Si tu navegador no muestra el PDF, puedes usar «Descargar CV» en Sobre mí."
  },
  "en": {
    "skip": "Skip to content",
    "work": "Projects",
    "art": "Art",
    "sound": "Music",
    "about": "About",
    "language": "Language",
    "portfolio": "GAME DEVELOPMENT · ART · MUSIC",
    "intro": "I code. I draw.<br>I compose.",
    "heroNote": "I build games through three disciplines:<br>code, visual art and music.",
    "explore": "Explore my work",
    "disc": "GAMES / PROGRAMMING / 2D & 3D ART / MUSIC",
    "selected": "01 / SELECTED WORK",
    "workNote": "What we made, how it works<br>and where I contributed.",
    "visual": "02 / VISUAL EXPLORATION",
    "artTitle": "Giving ideas<br>a shape.",
    "artNote": "From drawings to 3D forms:<br>a look at my visual work.",
    "illustration": "Illustration & digital art",
    "modeling": "Modeling & scenes",
    "artPending": "Selected artwork coming soon.",
    "audio": "03 / SOUND WORLDS",
    "soundTitle": "Giving games<br>a sound.",
    "soundNote": "Music for the pace of play<br>and the atmosphere of each screen.",
    "soundtrack": "Original game music · Survival horror",
    "jam": "Game jam composition · GameJam 8 de Game Scholars",
    "audioPending": "Audio coming soon",
    "person": "04 / BEHIND THE WORK",
    "aboutTitle": "One idea.<br>Different ways<br>to bring it to life.",
    "bio":
      "I’m Jose Manuel Pastor González, studying a double degree in Video Game " +
      "Design and Development and Computer Engineering at Rey Juan Carlos " +
      "University.",
    "bio2":
      "My projects have taken me from enemy behaviour to illustration and " +
      "original soundtracks. Working across these areas helps me connect " +
      "technical decisions with what players see, hear and do. I enjoy building " +
      "with a team and understanding how my contribution fits into the whole " +
      "game.",
    "degree": "Video Games + Computer Engineering",
    "footer": "Building, creating and always learning.",
    "top": "Back to top",
    "view": "View project +",
    "role": "My contribution",
    "tools": "Tools",
    "close": "Close",
    "meta":
      "Jose Manuel Pastor González: game development, 2D and 3D art, and music " +
      "composition. Explore projects, game jams and my contribution to each.",
    "jams": "Game jams",
    "jamFeatureLabel": "PROTOTYPES / COLLABORATION / GAME JAMS",
    "jamFeatureTitle": "One team.<br>One deadline.<br>One game.",
    "seeJams": "Explore my game jams",
    "portraitAlt": "Portrait of José Manuel",
    "itchProfile": "My itch.io profile",
    "backPortfolio": "Back to portfolio",
    "jamArchive": "ARCHIVE / COLLABORATIONS",
    "jamsIntro":
      "From the first sketch to the deadline.<br>My contributions to team " +
      "projects in art, sound and code.",
    "collectionNote": "The games, the teams and their original project pages.",
    "collectionLink": "Explore my itch.io collection",
    "gameLink": "View game on itch.io",
    "jamLink": "View jam submission",
    "jamMeta":
      "Game jams by Jose Manuel Pastor González. Discover BandBang, Time Bender " +
      "and my contributions in art, music, sound and programming.",
    "duration": "DEVELOPMENT / 1 WEEK",
    "coverAlt": "Cover art for",
    "skillArt2D": "2D art",
    "skillArt3D": "3D art",
    "skillMusic": "Music composition",
    "skillSound": "Sound design",
    "skillVR": "Virtual reality",
    "skillsDev": "Development & technology",
    "skillsCreative": "Art & sound",
    "skillsTeam": "Collaboration & methods",
    "skillAI": "Artificial intelligence",
    "skillOptimization": "Performance optimization",
    "skillAR": "Augmented reality",
    "skillTeamwork": "Teamwork",
    "skillProblemSolving": "Problem solving",
    "projectItch": "View game on itch.io",
    "projectCode": "View code on GitHub",
    "projectDemo": "Watch demo video",
    "viewCV": "View CV",
    "downloadCV": "Download CV",
    "cvTitle": "CV · Jose Manuel Pastor González",
    "cvFrameTitle": "CV of Jose Manuel Pastor González",
    "cvHelp": "If your browser does not display the PDF, use “Download CV” in About."
  }
};

// 2. Proyectos destacados. url y linkKey son opcionales.
const projects = [
  {
    "title": "Legado de Sangre",
    "url": "https://bollychaos22.itch.io/legado-de-sangre",
    "linkKey": "projectItch",
    "label": {
      "es": "VIDEOJUEGO / SURVIVAL HORROR",
      "en": "GAME / SURVIVAL HORROR"
    },
    "short": {
      "es": "Arte, música & programación",
      "en": "Art, music & programming"
    },
    "desc": {
      "es":
        "Una mansión maldita. Un heredero. Recursos que hay que medir. Survival " +
        "horror en tercera persona donde la exploración, el sigilo y el azar " +
        "forman parte de la supervivencia.",
      "en":
        "A cursed mansion. An heir. Resources that must last. A third-person " +
        "survival horror game built around exploration, stealth and chance."
    },
    "role": {
      "es":
        "Dentro de BollyChaos, trabajé en arte 2D, compuse música y programé la " +
        "inteligencia artificial de los enemigos: tres aportaciones a la misma " +
        "experiencia de terror.",
      "en":
        "As part of BollyChaos, I created 2D art, composed music and programmed " +
        "enemy AI—three contributions to the same horror experience."
    },
    "tools": "Unity"
  },
  {
    "title": "Galaga",
    "url": "https://github.com/Jositopk/Galaga-inspired-OpenGL",
    "linkKey": "projectCode",
    "label": {
      "es": "PROGRAMACIÓN / ARCADE",
      "en": "PROGRAMMING / ARCADE"
    },
    "short": {
      "es": "C++ & OpenGL",
      "en": "C++ & OpenGL"
    },
    "desc": {
      "es":
        "Recrear un arcade es entender qué ocurre detrás de cada disparo. Este " +
        "proyecto inspirado en Galaga combina enemigos, patrones de ataque y " +
        "colisiones con C++, OpenGL y GLUT.",
      "en":
        "Recreating an arcade game means understanding what happens behind every " +
        "shot. This Galaga-inspired project brings together enemies, attack " +
        "patterns and collisions using C++, OpenGL and GLUT."
    },
    "role": {
      "es":
        "Desarrollé el proyecto junto a Adrián Gómez-Lobo Núñez. Una práctica de " +
        "programación gráfica para llevar las reglas del juego al código.",
      "en":
        "Developed with Adrián Gómez-Lobo Núñez as a hands-on graphics " +
        "programming project, translating game rules into code."
    },
    "tools": "C++ / OpenGL / GLUT"
  },
  {
    "title": "Realidad virtual",
    "url": "https://youtu.be/Epu25Ivr7ag?si=hurL4-Mg-glOyfwT",
    "linkKey": "projectDemo",
    "titleEn": "Virtual reality",
    "label": {
      "es": "INTERACCIÓN / VR",
      "en": "INTERACTION / VR"
    },
    "short": {
      "es": "Unity & experiencias inmersivas",
      "en": "Unity & immersive experiences"
    },
    "desc": {
      "es":
        "Caminar, apuntar y lanzar hechizos con las manos. Una experiencia en " +
        "Unity que combina locomoción KAT Walk, espada, arco, pociones y " +
        "seguimiento de manos para explorar otras formas de interactuar.",
      "en":
        "Walk, aim and cast spells with your hands. A Unity experience combining " +
        "KAT Walk locomotion, a sword, a bow, potions and hand tracking to " +
        "explore new ways to interact."
    },
    "role": {
      "es":
        "Participé en el desarrollo de esta experiencia universitaria de realidad " +
        "virtual en Unity. El vídeo de demostración muestra sus interacciones en " +
        "acción.",
      "en":
        "I contributed to this university VR project in Unity. The demo video " +
        "shows its interactions in action."
    },
    "tools": "Unity / VR / Hand tracking"
  },
  {
    "title": "Kinesiometry",
    "label": {
      "es": "EN DESARROLLO / TFG",
      "en": "IN DEVELOPMENT / FINAL PROJECT"
    },
    "short": {
      "es": "Visión artificial & videojuegos",
      "en": "Computer vision & games"
    },
    "desc": {
      "es":
        "¿Y si el mando fuera tu propio cuerpo? Kinesiometry es mi proyecto en " +
        "desarrollo para convertir movimientos y gestos captados por una webcam " +
        "en interacciones de juego.",
      "en":
        "What if your body were the controller? Kinesiometry is my " +
        "work-in-progress project exploring how webcam-captured movement and " +
        "gestures can become game interactions."
    },
    "role": {
      "es":
        "Trabajo en el software de detección de movimiento y en un videojuego que " +
        "lo utilice. Dos TFG conectados por un objetivo: explorar cómo jugar a " +
        "través del movimiento.",
      "en":
        "I’m developing motion detection software and a game that uses it. Two " +
        "connected final degree projects exploring how movement can become a way " +
        "to play."
    },
    "tools": "Python / OpenCV / Unity"
  }
];

// 3. Game jams: portada, descripción, aportación y enlaces.
const jams = [
  {
    "title": "BandBang",
    "event": "International COTEDI GameJam 2026",
    "genre": "Visual novel",
    "image": "assets/bandbang.png",
    "url": "https://jositopk.itch.io/bandbang",
    "jamUrl": "https://itch.io/jam/international-cotedi-gamejam-2026/rate/4270440",
    "description": {
      "es":
        "Mexalline reúne una banda internacional aprendiendo a comunicarse con " +
        "músicos de distintas culturas. Una novela visual sobre idiomas y música.",
      "en":
        "Mexalline brings an international band together by learning to " +
        "communicate with musicians from different cultures. A visual novel about " +
        "languages and music."
    },
    "role": {
      "es":
        "Me encargué del arte y la dirección artística 2D, y compuse la banda " +
        "sonora original: la imagen y la música con las que el equipo dio forma a " +
        "BandBang.",
      "en":
        "I handled 2D art and art direction, and composed the original " +
        "soundtrack, shaping BandBang’s visuals and music alongside the team."
    }
  },
  {
    "title": "Time Bender",
    "event": "GameGen Game Jam · 5ª Edición",
    "eventEn": "GameGen Game Jam · 5th Edition",
    "genre": "Puzzle / Windows",
    "image": "assets/time-bender.png",
    "url": "https://alba1212.itch.io/time-bender",
    "jamUrl": "https://itch.io/jam/gamegen-game-jam-5/rate/3296847",
    "description": {
      "es":
        "Un juego de puzles en primera persona que permite congelar y rebobinar " +
        "objetos para abrirse paso por un laboratorio.",
      "en":
        "A first-person puzzle game about freezing and rewinding objects to find " +
        "a way through a laboratory."
    },
    "role": {
      "es":
        "Aporté arte 2D y 3D, compuse la banda sonora, creé efectos de sonido y " +
        "apoyé la programación de los menús, especialmente el principal.",
      "en":
        "I contributed 2D and 3D art, composed the soundtrack, created sound " +
        "effects and helped program the menus, especially the main menu."
    }
  }
];

// Textos de la galería de arte.
Object.assign(translations.es, {
  "galleryTitle": "Del boceto<br>al juego.",
  "galleryIntro": "Personajes, escenarios y animación. Mi arte 2D, proyecto a proyecto.",
  "galleryLink": "Explorar mi arte 2D ↗",
  "gallerySummary": "Seis proyectos. Del primer trazo al último fotograma.",
  "galleryMeta": "Arte 2D de Jose Manuel Pastor González: BandBang y proyectos universitarios.",
  "galleryArchive": "ARCHIVO / ARTE 2D",
  "galleryHint": "Pulsa una obra para ampliarla.",
  "galleryAll": "Todos",
  "galleryClose": "Cerrar visor",
  "galleryFull": "Abrir imagen completa ↗",
  "galleryPrev": "Anterior",
  "galleryNext": "Siguiente",
  "gallery2D": "Arte 2D"
});
Object.assign(translations.en, {
  "galleryTitle": "From sketch<br>to game.",
  "galleryIntro": "Characters, environments and animation. My 2D art, one project at a time.",
  "galleryLink": "Explore my 2D art ↗",
  "gallerySummary": "Six projects. From the first sketch to the final frame.",
  "galleryMeta": "2D art by Jose Manuel Pastor González: BandBang and university projects.",
  "galleryArchive": "ARCHIVE / 2D ART",
  "galleryHint": "Select an artwork to enlarge it.",
  "galleryAll": "All",
  "galleryClose": "Close viewer",
  "galleryFull": "Open full image ↗",
  "galleryPrev": "Previous",
  "galleryNext": "Next",
  "gallery2D": "2D art"
});

translations.es.galleryPreviewAlt = "Variantes de color de Proyecto Lambda";
translations.en.galleryPreviewAlt = "Proyecto Lambda colour variations";

// Presentación de arte en la página principal.
Object.assign(translations.es, {
  gallerySummary: "Personajes, mundos e ideas propias. Del primer trazo al último fotograma.",
  personalArt: "Arte personal",
  art3DSummary: "Otra dimensión para mis ideas. Selección de obras próximamente.",
  art3DPending: "Galería 3D · Próximamente",
});
Object.assign(translations.en, {
  gallerySummary: "Characters, worlds and personal ideas. From the first sketch to the final frame.",
  personalArt: "Personal art",
  art3DSummary: "Another dimension for my ideas. Selected work coming soon.",
  art3DPending: "3D gallery · Coming soon",
});

// Aviso de derechos: obras propias y aportaciones a proyectos compartidos.
translations.es.rightsNotice =
  "© 2026 Jose Manuel Pastor González. Derechos reservados sobre mis obras " +
  "y aportaciones. No se autoriza su reutilización sin permiso, salvo los " +
  "usos permitidos por la ley. Los elementos de terceros pertenecen a sus titulares.";
translations.en.rightsNotice =
  "© 2026 Jose Manuel Pastor González. All rights reserved in my original work " +
  "and contributions. Reuse requires permission, except where permitted by law. " +
  "Third-party elements belong to their respective rights holders.";
