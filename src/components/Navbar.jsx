import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import images from '../config/images'
import { site } from '../config/site'
import { WhatsAppLink, WhatsAppIcon } from './ui'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'bg-sand-50/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-18 items-center justify-between" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="" className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block font-serif text-xl font-medium text-ink">Virginia Fussi</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-stone">Nutricionista</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink/80 transition-colors hover:text-olive-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppLink location="navbar" className="btn-primary !py-2.5" />
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <WhatsAppLink location="navbar_mobile" className="btn-primary w-full">
                <WhatsAppIcon className="h-4.5 w-4.5" /> Escribime por WhatsApp
              </WhatsAppLink>
            </li>
          </ul>
          <span className="sr-only">{site.name}</span>
        </div>
      )}
    </header>
  )
}
