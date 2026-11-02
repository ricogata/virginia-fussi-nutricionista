/**
 * Helpers de tracking para Google Tag Manager / GA4 / Google Ads.
 *
 * Cada interacción clave envía un evento al dataLayer. En GTM creá:
 *   1. Un activador "Evento personalizado" con el nombre del evento
 *      (whatsapp_click, phone_click, form_submit).
 *   2. Una etiqueta "Seguimiento de conversiones de Google Ads" y/o
 *      "Evento de GA4" que use ese activador.
 *   La variable de capa de datos `event_location` indica desde qué botón se hizo clic.
 */

export function pushEvent(event, params = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export const trackWhatsApp = (location) =>
  pushEvent('whatsapp_click', { event_category: 'conversion', event_location: location })

export const trackPhone = (location) =>
  pushEvent('phone_click', { event_category: 'conversion', event_location: location })

export const trackFormSubmit = (params = {}) =>
  pushEvent('form_submit', { event_category: 'conversion', form_name: 'contacto', ...params })
