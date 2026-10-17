# Portfolio de Jose Manuel Pastor González

Portfolio personal de videojuegos, arte y música. Web estática en español e inglés,
preparada para GitHub Pages y para abrirse directamente en el navegador.

## Ver la web

Descomprime el ZIP y abre `index.html`. Mantén los archivos y la carpeta `assets`
juntos. No necesitas instalar dependencias para usar la web.

## Dónde editar cada cosa

| Archivo | Contenido |
| --- | --- |
| `index.html` | Portada, proyectos, arte, música, Sobre mí y ventanas de detalle. |
| `jams.html` | Página de participaciones en game jams. |
| `content.js` | Todos los textos en español e inglés y los datos de proyectos y jams. |
| `script.js` | Cambio de idioma, generación de tarjetas y apertura y cierre de ventanas. |
| `styles.css` | Colores, tipografía, distribución y adaptación a pantallas pequeñas. |
| `assets/` | Imágenes, favicon y PDF del CV. |
| `.prettierrc.json` | Reglas para mantener un formato de código uniforme. |

### Cambiar textos

Busca la clave correspondiente dentro de `translations` en `content.js`. Cada idioma
tiene su propio bloque: `es` y `en`. Mantén los nombres de las claves y edita sus valores.
Los textos iniciales de los HTML deben reflejar también los cambios en español.

### Añadir un proyecto

En `content.js`, añade un objeto al array `projects` siguiendo los existentes:

- `title`: título en español o nombre propio del proyecto.
- `titleEn`: título en inglés, solo si cambia.
- `label`, `short`, `desc` y `role`: textos con versiones `es` y `en`.
- `tools`: herramientas separadas por ` / `.
- `url` y `linkKey`: enlace externo y clave de traducción de su botón; son opcionales.

Las tarjetas se generan a partir de esos datos. Las atribuciones deben describir tu
aportación personal y reconocer el trabajo en equipo.

### Añadir una game jam

Añade un objeto al array `jams` de `content.js`. Incluye nombre, evento, portada,
descripción, aportación, enlace al juego y enlace a su participación. Guarda la portada
en `assets/` y utiliza una ruta relativa, como `assets/mi-juego.png`.

### Cambiar el CV

Sustituye `assets/JoseManuelPastor_CV_Sept2026.pdf`. Si cambias el nombre, actualiza tanto
el enlace de descarga como `data-src` del visor en `index.html`.

«Ver CV» abre una ventana con un PDF incrustado y una X para cerrarla. El PDF utiliza el
lector integrado del navegador; su visualización puede variar en móviles. «Descargar
CV» permite guardar el archivo original. El documento no se ha modificado ni traducido.

### Mantener el código legible

El código usa dos espacios de sangría, bloques separados y comentarios de sección.
La configuración de Prettier incluida define un ancho de referencia de 90 caracteres.
Algunas cadenas de texto y URLs pueden superar ese ancho para conservar su contenido.

El orden de carga es importante: `content.js` debe aparecer antes de `script.js`, ambos
con `defer`. La web no necesita un proceso de compilación ni paquetes de producción.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado `Jositopk.github.io`.
2. Sube el contenido de `portfolio` a la raíz del repositorio: `index.html` debe quedar
   directamente en la raíz.
3. En **Settings > Pages**, selecciona **Deploy from a branch**, la rama `main` y
   la carpeta `/ (root)`.
4. Guarda y espera a que GitHub termine de publicar.

La dirección será `https://jositopk.github.io`. Este ZIP todavía no se ha publicado.

## Contenido pendiente

- Imágenes de los proyectos y selección de obras 2D y 3D.
- Audios originales para la sección Música.
- Correo de contacto, si quieres mostrarlo.
- Otras participaciones en jams que quieras incorporar.

Kinesiometry figura como proyecto en desarrollo. Las galerías y audios pendientes se
indican como tales. No se incluyen métricas, premios ni testimonios inventados.

## Fuentes y materiales

Los retratos, logos, banner y CV fueron facilitados por Jose Manuel. Las aptitudes
adicionales proceden de las capturas de su perfil de LinkedIn.

La colección y las páginas de los juegos documentan las participaciones y sus créditos:

- https://itch.io/c/7779633/gamejams
- https://jositopk.itch.io/bandbang
- https://alba1212.itch.io/time-bender

Las portadas de las jams corresponden a las imágenes públicas de esas páginas.
Los enlaces profesionales y de los proyectos fueron facilitados por Jose Manuel.

## Galería de arte 2D

`art.html` contiene la galería; `gallery.js` controla los filtros y el visor.
Los títulos ES/EN y las rutas se editan en `art-data.js`.

Se han reunido los 234 PNG de los dos ZIP en 41 láminas, organizadas en
BandBang, Kitcheneer, Subconcious, Jailbreak, Proyecto Lambda y Nórdico.
Cada lámina tiene una miniatura ligera para la galería. La imagen completa
se carga al abrir el visor, que se cierra con el botón de cierre o Escape.
Las flechas permiten recorrer las obras; el enlace inferior abre la imagen
completa para ampliarla con las funciones del navegador, también en móvil.

- Pixel art: PNG sin pérdida, sin cambiar los píxeles originales. En Kitcheneer,
  las filas son reposo, caminar y derrota (cuando existe esa animación).
- Tiles: un atlas por proyecto. En BandBang, todos los elementos de los
  escenarios se reúnen en una lámina; es un catálogo, no un nivel jugable.
- Ilustraciones: WebP sin pérdida tras adaptar el tamaño para la web y recortar
  márgenes transparentes. Las variantes relacionadas aparecen juntas.
- `assets/art/manifest.json` registra qué imagen original ocupa cada posición
  de cada lámina. Permite comprobar que ninguna imagen se ha omitido.

Los ZIP originales no se incluyen de nuevo en la web. Conserva tus archivos
fuente para edición o exportación a resolución original.

## Actualización de la portada de arte

Los bloques 2D y 3D se muestran lado a lado en escritorio. Cada uno contiene
láminas superpuestas de igual anchura. En móvil los bloques se apilan;
las láminas conservan la superposición. El bloque 3D reserva
espacio para obras futuras y no contiene enlaces vacíos.

La galería incluye ahora también Legado de Sangre (logo) y Arte personal
(fanart de Sludge Life): 236 imágenes fuente representadas en 43 entradas.
Los dos nuevos dibujos también incluyen la marca de agua. Las imágenes de la
portada se cambian en la sección art de index.html; sus enlaces abren el
filtro correspondiente de la galería.

## Marcas de agua y derechos

Las imágenes de la galería de arte y sus miniaturas contienen
la marca @JDashe integrada conservando la opacidad del PNG original.
La marca cubre el lienzo completo y se repite en las láminas alargadas. Las imágenes se conservan
en sus dimensiones actuales. Las portadas de las game jams se publican sin marca de agua.
El retrato, el CV y los elementos de identidad de la web no se han marcado.
Consulta RIGHTS.md para el aviso de derechos de las obras y aportaciones.
La marca identifica la autoría; no impide capturas ni garantiza evitar copias.

## Tipografía y navegación

Space Mono se incluye localmente en pesos 400 y 700, junto con su licencia
SIL Open Font License en assets/fonts/OFL-SpaceMono.txt. No requiere conexión
a Google Fonts. Fuente: https://fonts.google.com/specimen/Space+Mono

La cabecera presenta botones destacados en escritorio. Hasta 1050 px utiliza
un menú modal lateral con fondo oscurecido. Se cierra al pulsar un enlace,
la X, el exterior o Escape. Respeta la preferencia de movimiento reducido,
impide desplazar el fondo y devuelve el foco al botón de apertura.

Los botones Arte y Game jams de la cabecera abren art.html y jams.html,
respectivamente, tanto en escritorio como en el menú móvil.

## Música y mezclador de BandBang

La sección Música incluye los 21 audios de MusicaPorfolio.zip. Los originales
se han exportado a MP3 estéreo a 128 kb/s para la web; los originales del ZIP
no se modifican ni se incluyen de nuevo. No hay reproducción automática.

- music-data.js: catálogo, archivos y duraciones.
- music.js: controles personalizados, traducciones y mezcla sincronizada.
- assets/audio/: versiones para publicación.

OST ALL y Ambience aparecen como pistas principales de BandBang. El desplegable
contiene un mezclador con seis instrumentos y todas las mezclas exportadas.
G = guitarra española, F = violín, H = shehnai, S = sitar, D = batería,
X = saxofón. Los botones Solo seleccionan únicamente ese instrumento; Todos
y Ninguno permiten cambiar el conjunto. El botón de reproducción del mezclador
controla todas las pistas seleccionadas en un reloj común de Web Audio.
Las pistas individuales duran unos 77 segundos y las mezclas unos 19 segundos:
se conservan las duraciones originales sin estirar ni recortar los temas.

Una canción pausa cualquier otra canción o mezcla. Las seis pistas del
mezclador se descargan y decodifican solo al pulsar su botón de reproducción.
El volumen superior afecta a todos los reproductores. El idioma puede cambiarse
sin reiniciar el audio ni perder la selección de músicos.

Para probar el mezclador, abre la web desde GitHub Pages o ejecuta en esta carpeta:

    python3 -m http.server 8000

Después visita http://localhost:8000. Al abrir index.html directamente como
archivo local, las pistas normales funcionan, pero el navegador puede impedir
que el mezclador cargue sus seis archivos. La interfaz indica esta limitación.

Se mantienen los nombres de proyecto de las carpetas recibidas: BandBang,
Lazos de Sangre y Time Bender. Dar la nota conserva el aviso de próxima entrega.

## Visor de arte 3D

Abre `arte3d.html` desde GitHub Pages o un servidor HTTP local (por ejemplo,
`python3 -m http.server 8000`). Los módulos ES y las cargas de modelos no funcionan
al abrir el HTML directamente con doble clic (`file://`).

- `viewer3d.js`: carga, cámara, rotación, materiales y modos de visualización.
- `viewer3d.css`: diseño adaptable del visor y de las miniaturas.
- `models-data.js`: catálogo, nombres bilingües y asignaciones explícitas de mapas.
- `assets/models/`: un GLB optimizado, portada y mapas por modelo.
- `assets/vendor/three/`: Three.js 0.180.0 y módulos necesarios, con su licencia MIT.
  No depende de un CDN ni necesita compilarse para publicarlo en GitHub Pages.

La galería contiene 17 modelos. Robot usa `robot_final` y `robot/pixeladas2`;
la rata normal se presenta sin texturas y la humanizada usa el FBX y los mapas
del paquete Rata(1).zip; mano usa `Mano_final`. Se excluyen los FBX alternativos descartados y los
proyectos MAX del paquete web. Cronometrita utiliza sus mapas originales porque
la carpeta pixelizada está vacía. Chip y valla usan el segundo ZIP suministrado.

Cada pieza se carga al seleccionarla y libera los recursos del modelo anterior.
Los botones permiten girar y acercar sin depender exclusivamente de gestos. El
giro se detiene al interactuar y se reanuda a los cinco segundos, salvo que el
visitante lo desactive. La preferencia de movimiento reducido lo desactiva de inicio.
Wireframe muestra la triangulación del modelo exportado, no los polígonos originales
de 3ds Max. Los tres modos comparten geometría y cambian sin recargar el modelo.

Los mapas de color y emisión usan sRGB; AO, metal y rugosidad usan datos lineales.
Se aplica el normal OpenGL cuando está identificado explícitamente. Los mapas de
normales pixelizados no declaran su convención y por ahora no se aplican; tampoco
se aplica desplazamiento por height para no alterar la silueta de la obra. En las
texturas pixelizadas se conserva el filtrado de ampliación sin suavizado.

Las portadas se renderizan a partir de las mallas y sus UV, con la marca de agua
incorporada. El visor y sus imágenes de carga no llevan marca de agua; las miniaturas 3D tampoco llevan marca; el arte 2D conserva la suya. Una marca superpuesta no impide extraer un modelo servido al
navegador. Se mantienen los avisos de derechos del portfolio.

Las colecciones actuales son Time Bender (14 modelos) y Nórdico (3 modelos). La introducción abarca arte 3D de
distintos proyectos. Las miniaturas forman una única fila horizontal desplazable
en todos los tamaños, con flechas y selector de proyecto. Cada entrada de
models-data.js tiene una clave project; al añadir otro proyecto, incorpora su
opción en model-project y añade su nombre a projectNames en viewer3d.js.

Nórdico incluye el barco vikingo, el cuerpo de Garth y el casco como piezas
independientes, usando los FBX de obj y fbx.zip y las texturas Substance del
paquete original. La escena completa sigue disponible únicamente en MAX y
no se incluye en el visor. Los materiales sin uso del FBX no requieren mapas.

Actualización de la página 3D: distribución de una pantalla (100dvh), visor
integrado sin bordes y carrusel horizontal inferior. Verificado en Chromium
a 1440×900, 1366×768, 390×844, 375×667 y 844×390, sin scroll vertical.
Las referencias del visor llevan versión para evitar mezclar archivos antiguos
de caché. Sustituir todos los archivos del ZIP al publicar, incluida assets.

Versión 22: panel izquierdo del 35 % y visor derecho del 65 % en escritorio.
En móvil: controles, visor, selector y carrusel inferior. El selector se genera
desde el catálogo y contiene Time Bender y Nórdico. Los archivos viewer3d-v22
y models-data-v22 son los utilizados por arte3d.html. Ninguna portada ni
miniatura 3D lleva marca. El arte 2D se conserva sin cambios.
La esquina inferior derecha muestra 3D / 22 para identificar esta revisión.
