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
