# Virginia Fussi — Nutricionista

Sitio institucional y landing page (React + Vite + Tailwind CSS + Lucide), publicado en GitHub Pages.

## Comandos
```bash
npm install        # instalar dependencias
npm run dev        # desarrollo local
npm run deploy     # compilar y publicar en GitHub Pages
```

## Qué editar
| Qué | Dónde |
|---|---|
| Fotos y logo | `public/assets/images/` (mismo nombre de archivo) — ver `LEEME.md` ahí |
| Rutas de imágenes | `src/config/images.js` |
| WhatsApp, teléfono, email, matrícula, formulario | `src/config/site.js` |
| ID de Google Tag Manager | `index.html` → reemplazar `GTM-XXXXXXX` (2 lugares) |
| Textos legales | `src/components/LegalModal.jsx` |

## Eventos de conversión (dataLayer)
| Evento | Cuándo |
|---|---|
| `whatsapp_click` | Clic en cualquier botón de WhatsApp (`event_location` indica cuál) |
| `phone_click` | Clic en el teléfono |
| `form_submit` | Envío del formulario de contacto |

En GTM: crear un activador *Evento personalizado* por cada evento y asociarlo a la etiqueta de conversión de Google Ads / evento GA4.
