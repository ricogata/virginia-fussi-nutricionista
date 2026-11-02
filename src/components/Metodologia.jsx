import images from '../config/images'
import { SectionHeader, SmartImage, WhatsAppLink } from './ui'

const steps = [
  {
    n: '01',
    title: 'Primera consulta',
    text: 'Nos conocemos. Escucho tu historia, tus objetivos y hacemos una evaluación nutricional completa.',
  },
  {
    n: '02',
    title: 'Comprender la raíz',
    text: 'Exploramos qué emociones, creencias y contextos sostienen tus hábitos actuales.',
  },
  {
    n: '03',
    title: 'Plan a tu medida',
    text: 'Diseñamos juntas/os una estrategia alimentaria y de bienestar realista y flexible.',
  },
  {
    n: '04',
    title: 'Acompañamiento',
    text: 'Seguimiento cercano, ajustes y el apoyo del grupo de pacientes para sostener el cambio.',
  },
]

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-olive-800 py-20 text-sand-50 sm:py-28">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="[&_.eyebrow]:text-olive-200 [&_h2]:text-sand-50 [&_p]:text-olive-100/80">
              <SectionHeader
                eyebrow="Metodología"
                title={<>Un proceso en <span className="italic text-olive-300">cuatro etapas</span></>}
                intro="No se trata de seguir reglas, sino de construir una nueva relación con la comida, paso a paso y a tu ritmo."
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <SmartImage src={images.consultorio1} alt="Consultorio de Virginia Fussi" label="Consultorio" className="aspect-[4/5] w-full rounded-2xl" />
              <SmartImage src={images.consultorio2} alt="Espacio de atención" label="Consultorio" className="mt-10 aspect-[4/5] w-full rounded-2xl" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[4rem_1fr] gap-4 py-8">
                  <span className="font-serif text-4xl text-olive-300">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-sand-50">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-olive-100/80">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <WhatsAppLink location="metodologia" className="btn-primary bg-sand-50 text-olive-800 hover:bg-white">
                Empezá hoy tu cambio
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
