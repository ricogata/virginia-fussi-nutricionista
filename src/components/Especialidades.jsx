import { Apple, Sparkles, Users, Video, Scale, Salad } from 'lucide-react'
import { SectionHeader, WhatsAppLink } from './ui'

const items = [
  {
    icon: Apple,
    title: 'Consulta nutricional personalizada',
    text: 'Evaluación completa y un plan pensado para tu cuerpo, tu rutina y tus gustos. Sin dietas genéricas.',
  },
  {
    icon: Sparkles,
    title: 'Alimentación emocional',
    text: 'Trabajamos sobre los atracones, la ansiedad por comer y la culpa, entendiendo qué los dispara.',
  },
  {
    icon: Scale,
    title: 'Cambio de hábitos sostenible',
    text: 'Pequeños pasos con sentido, para que los resultados se mantengan en el tiempo.',
  },
  {
    icon: Video,
    title: 'Consultas online',
    text: 'El mismo acompañamiento, estés donde estés. Videollamada y seguimiento a distancia.',
  },
  {
    icon: Salad,
    title: 'Estrategias de bienestar integral',
    text: 'Descanso, movimiento, estrés y vínculos: todo lo que influye en cómo comés y cómo te sentís.',
  },
  {
    icon: Users,
    title: 'Grupo de soporte',
    text: 'Un espacio de encuentro con otros pacientes para compartir el proceso y sostener la motivación.',
  },
]

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-20 sm:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Especialidades"
            title={<>Cómo puedo <span className="italic text-olive-600">ayudarte</span></>}
            intro="Cada proceso es único. Estas son las áreas en las que te puedo acompañar, siempre desde una mirada empática y profesional."
          />
          <WhatsAppLink location="especialidades" className="btn-outline shrink-0">
            Consultá disponibilidad
          </WhatsAppLink>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group bg-sand-50 p-8 transition-colors duration-300 hover:bg-white sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-100 text-olive-700 transition-colors group-hover:bg-olive-600 group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
