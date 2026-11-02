import { Brain, HeartHandshake, Leaf, GraduationCap } from 'lucide-react'
import images from '../config/images'
import { site } from '../config/site'
import { SmartImage, LinkedInIcon } from './ui'

const pillars = [
  { icon: GraduationCap, title: 'Nutrición clínica', text: 'Licenciada en Nutrición, con base científica y actualización constante.' },
  { icon: Brain, title: 'Neurociencia del comportamiento', text: 'Formación en psicobiología social para entender por qué hacemos lo que hacemos.' },
  { icon: HeartHandshake, title: 'Bioneuroemoción', text: 'Una mirada que integra emociones, vínculos e historia personal.' },
  { icon: Leaf, title: 'Bienestar integral', text: 'Cambios que se sostienen porque tienen sentido para vos.' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-white py-20 sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <SmartImage
            src={images.sobreMi}
            alt="Virginia Fussi en su consultorio"
            label="Sobre mí"
            className="aspect-[4/5] w-full rounded-[2rem]"
          />
          <div className="absolute -right-3 -bottom-5 rounded-2xl bg-olive-600 px-6 py-5 text-white shadow-lg sm:-right-6">
            <p className="font-serif text-4xl leading-none">360°</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-olive-100">Abordaje integral</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">
            Hola, soy Virginia. <span className="italic text-olive-600">Te acompaño a sanar tu vínculo con la comida.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
            <p>
              Soy nutricionista y especialista en Bioneuroemoción, formada en psicobiología social y
              neurociencia del comportamiento.
            </p>
            <p>
              Creo que comer no es solo una cuestión de nutrientes: detrás de cada hábito hay emociones,
              vínculos e historias. Por eso mi trabajo busca comprender esa raíz para que los cambios no
              dependan de la fuerza de voluntad, sino de una nueva forma de relacionarte con vos y con la
              comida.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-50 text-olive-600">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <dt className="font-medium text-ink">{title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone">{text}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone">
            <span>{site.license}</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-olive-700 hover:text-olive-900"
            >
              <LinkedInIcon className="h-4 w-4" /> Ver perfil en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
