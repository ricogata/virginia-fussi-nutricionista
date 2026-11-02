/**
 * ============================================================================
 *  ⚙️ DATOS DE CONTACTO Y CONFIGURACIÓN GENERAL
 *  Editá estos valores y volvé a publicar con:  npm run deploy
 * ============================================================================
 */

export const site = {
  name: 'Lic. Virginia Fussi',
  title: 'Nutricionista & Especialista en Bioneuroemoción',

  // WhatsApp en formato internacional SIN "+", espacios ni guiones.
  // Ej. Argentina celular: 54 9 11 1234 5678  →  '5491112345678'
  // ⚠️ REEMPLAZAR por el número real
  whatsappNumber: '5491100000000',
  whatsappMessage: 'Hola Virginia, vi tu web y me gustaría agendar una consulta.',

  // Teléfono para llamadas (se muestra y se usa en el link tel:)
  // ⚠️ REEMPLAZAR por el número real
  phoneDisplay: '+54 9 11 0000-0000',
  phoneHref: '+5491100000000',

  // ⚠️ REEMPLAZAR por los datos reales
  email: 'contacto@virginiafussi.com',
  address: 'Consultorio en CABA, Buenos Aires',
  hours: 'Lunes a viernes · 9 a 19 h',

  instagram: '',
  linkedin: 'https://www.linkedin.com/in/virginia-fussi-39b678255/',

  // Matrícula profesional (recomendado mostrarla en pautas de salud)
  // ⚠️ REEMPLAZAR por la matrícula real
  license: 'M.N. 0000',

  /**
   * Formulario de contacto.
   * - Si dejás `formEndpoint` vacío, el formulario arma el mensaje y abre
   *   WhatsApp con los datos completados (funciona sin servidor).
   * - Si querés recibir los envíos por mail, creá un formulario gratuito en
   *   https://formspree.io y pegá acá la URL (ej. 'https://formspree.io/f/abcdwxyz').
   */
  formEndpoint: '',
}

export const whatsappUrl = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export default site
