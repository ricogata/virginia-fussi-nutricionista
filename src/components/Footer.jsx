import images from '../config/images'
import { site } from '../config/site'
import { WhatsAppLink, PhoneLink, LinkedInIcon, WhatsAppIcon } from './ui'

export default function Footer({ onOpenLegal }) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-olive-900 text-olive-100/80">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={images.logo} alt="" className="h-10 w-10 brightness-0 invert" />
            <div>
              <p className="font-serif text-2xl text-sand-50">Virginia Fussi</p>
              <p className="text-[10px] uppercase tracking-[0.2em]">Nutricionista · Bioneuroemoción</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Acompañamiento nutricional integral, presencial y online, para lograr cambios que se sostienen.
          </p>
          <p className="mt-4 text-xs text-olive-200/60">{site.name} · {site.license}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand-50">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <WhatsAppLink location="footer" className="inline-flex items-center gap-2 hover:text-white">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </WhatsAppLink>
            </li>
            <li><PhoneLink location="footer" className="hover:text-white" /></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand-50">Legales</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><button onClick={() => onOpenLegal('privacidad')} className="hover:text-white">Política de Privacidad</button></li>
            <li><button onClick={() => onOpenLegal('terminos')} className="hover:text-white">Términos y Condiciones</button></li>
            <li><button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white">Disclaimer Médico</button></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-olive-200/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p className="max-w-xl md:text-right">
            La información de este sitio es orientativa y no reemplaza la consulta profesional individual.
          </p>
        </div>
      </div>
    </footer>
  )
}
