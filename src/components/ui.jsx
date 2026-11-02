import { useState } from 'react'
import { site, whatsappUrl } from '../config/site'
import { trackWhatsApp, trackPhone } from '../lib/tracking'

/** Ícono de WhatsApp (los íconos de marca no forman parte de Lucide). */
export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

/** Botón/enlace a WhatsApp con evento de conversión incluido. */
export function WhatsAppLink({ location, message, className = 'btn-primary', children }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(location)}
      className={className}
    >
      {children ?? (
        <>
          <WhatsAppIcon className="h-4.5 w-4.5" /> Agendá tu consulta
        </>
      )}
    </a>
  )
}

/** Enlace telefónico con evento de conversión incluido. */
export function PhoneLink({ location, className = '', children }) {
  return (
    <a href={`tel:${site.phoneHref}`} onClick={() => trackPhone(location)} className={className}>
      {children ?? site.phoneDisplay}
    </a>
  )
}

/**
 * Imagen con respaldo: si el archivo todavía no existe en
 * public/assets/images/, muestra un placeholder elegante con el nombre
 * del archivo que hay que subir.
 */
export function SmartImage({ src, alt, className = '', label }) {
  const [failed, setFailed] = useState(false)
  const fileName = src.split('/').pop()

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand-200 via-sand-100 to-olive-100 p-6 text-center ${className}`}
      >
        <span className="font-serif text-2xl italic text-olive-700/70">{label ?? 'Foto'}</span>
        <span className="text-[11px] uppercase tracking-widest text-stone/70">
          public/assets/images/{fileName}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

export function SectionHeader({ eyebrow, title, intro, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading mt-4 text-4xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">{intro}</p>}
    </div>
  )
}
