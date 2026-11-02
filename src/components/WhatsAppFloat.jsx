import { WhatsAppLink, WhatsAppIcon } from './ui'

/** Botón flotante de WhatsApp, siempre visible (clave para conversiones en mobile). */
export default function WhatsAppFloat() {
  return (
    <WhatsAppLink
      location="floating_button"
      className="fixed right-5 bottom-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Escribime por WhatsApp</span>
    </WhatsAppLink>
  )
}
