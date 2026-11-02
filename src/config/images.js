/**
 * ============================================================================
 *  📸 GESTIÓN CENTRALIZADA DE IMÁGENES
 * ============================================================================
 *
 *  Todas las imágenes del sitio viven en:   public/assets/images/
 *
 *  ¿Cómo cambiar una foto?  (no hace falta tocar código)
 *    1. Prepará tu foto nueva (JPG recomendado, ~1600px de ancho, < 400 KB).
 *    2. Renombrala EXACTAMENTE igual que el archivo que querés reemplazar
 *       (por ejemplo: perfil-virginia.jpg).
 *    3. Arrastrala a la carpeta public/assets/images/ y aceptá "Reemplazar".
 *    4. Publicá los cambios:  npm run deploy
 *
 *  ¿Querés usar otro nombre o formato (.png, .webp)?
 *    Cambiá solamente el nombre del archivo en este objeto de abajo.
 *
 *  Nota técnica: BASE_URL agrega automáticamente el prefijo
 *  "/virginia-fussi-nutricionista/" que necesita GitHub Pages.
 * ============================================================================
 */

const base = `${import.meta.env.BASE_URL}assets/images/`

export const images = {
  // Logo del encabezado y del pie de página (SVG recomendado; también acepta PNG)
  logo: `${base}logo.svg`,

  // Foto principal de la portada (Hero). Formato vertical 4:5 ideal.
  hero: `${base}perfil-virginia.jpg`,

  // Foto de la sección "Sobre mí". Formato vertical 4:5 ideal.
  sobreMi: `${base}sobre-mi.jpg`,

  // Fotos del consultorio (sección Metodología). Formato horizontal 4:3 ideal.
  consultorio1: `${base}consultorio-1.jpg`,
  consultorio2: `${base}consultorio-2.jpg`,
}

export default images
