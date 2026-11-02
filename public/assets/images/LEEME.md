# 📸 Carpeta de imágenes del sitio

Para cambiar una foto, **arrastrá tu archivo nuevo a esta carpeta con el mismo nombre** y reemplazá el existente.
Después publicá con `npm run deploy`.

| Archivo               | Dónde aparece                 | Formato ideal              |
|-----------------------|-------------------------------|----------------------------|
| `perfil-virginia.jpg` | Portada (Hero)                | Vertical 4:5 · 1200×1500px |
| `sobre-mi.jpg`        | Sección "Sobre mí"            | Vertical 4:5 · 1200×1500px |
| `consultorio-1.jpg`   | Sección "Metodología"         | Vertical 4:5 · 1000×1250px |
| `consultorio-2.jpg`   | Sección "Metodología"         | Vertical 4:5 · 1000×1250px |
| `logo.svg`            | Encabezado y pie de página    | SVG (o PNG cuadrado)       |
| `favicon.svg`         | Ícono de la pestaña           | SVG cuadrado               |

- Peso recomendado: menos de 400 KB por foto (podés comprimir en https://squoosh.app).
- Si querés usar otro nombre o formato (`.png`, `.webp`), cambialo en `src/config/images.js`.
