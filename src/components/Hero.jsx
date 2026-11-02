import { ArrowRight, Video, MapPin } from 'lucide-react'
import images from '../config/images'
import { site } from '../config/site'
import { WhatsAppLink, SmartImage } from './ui'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-40 h-[38rem] w-[38rem] rounded-full bg-olive-100/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-sand-200/70 blur-3xl" />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">{site.title}</p>
          <h1 className="heading mt-6 text-5xl sm:text-6xl lg:text-7xl">
            Nutrición que empieza
            <span className="block italic text-olive-600">por comprenderte.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone">
            Un abordaje integral que va más allá del plan alimentario: exploramos la raíz emocional y
            social de tus hábitos para que el cambio sea real y sostenible.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink location="hero" className="btn-primary px-8 py-4 text-base" />
            <a href="#sobre-mi" className="btn-outline px-8 py-4 text-base">
              Conocé mi enfoque <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-olive-500" /> Consultas presenciales
            </li>
            <li className="flex items-center gap-2">
              <Video className="h-4 w-4 text-olive-500" /> Consultas online
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 -z-10 translate-x-6 translate-y-6 rounded-[2rem] border border-olive-300/60" aria-hidden="true" />
          <SmartImage
            src={images.hero}
            alt="Lic. Virginia Fussi, nutricionista"
            label="Virginia Fussi"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-xl shadow-olive-900/10"
          />
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white/95 px-5 py-4 shadow-lg shadow-olive-900/10 backdrop-blur sm:-left-8">
            <p className="font-serif text-lg italic leading-tight text-ink">“Cada hábito tiene una historia.”</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-stone">{site.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
