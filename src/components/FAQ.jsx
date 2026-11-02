import { Plus } from 'lucide-react'
import { SectionHeader } from './ui'

const faqs = [
  {
    q: '¿Cómo es la primera consulta?',
    a: 'Dura aproximadamente una hora. Conversamos sobre tu historia, tus hábitos, tu relación con la comida y tus objetivos. Realizamos una evaluación nutricional y definimos juntas/os los primeros pasos.',
  },
  {
    q: '¿Atendés de forma online?',
    a: 'Sí. Las consultas online se realizan por videollamada y tienen la misma calidad de acompañamiento que las presenciales. Podés atenderte desde cualquier lugar del país o del exterior.',
  },
  {
    q: '¿Qué es la Bioneuroemoción y cómo se integra a la nutrición?',
    a: 'Es un enfoque que busca comprender la relación entre emociones, creencias y conductas. Aplicado a la nutrición, nos ayuda a entender qué hay detrás de ciertos hábitos alimentarios para poder transformarlos de raíz. Es un complemento del tratamiento nutricional y no reemplaza la atención médica ni psicológica.',
  },
  {
    q: '¿Voy a tener que hacer una dieta estricta?',
    a: 'No. Trabajo con planes flexibles y adaptados a tu vida, sin prohibiciones extremas. El objetivo es que puedas sostener los cambios a largo plazo.',
  },
  {
    q: '¿Cada cuánto son los controles?',
    a: 'Depende de cada caso, pero en general al inicio recomendamos encuentros cada 2 o 3 semanas, y luego se van espaciando según tu evolución.',
  },
  {
    q: '¿Cómo funciona el grupo de soporte?',
    a: 'Es un espacio para pacientes en tratamiento donde se comparten experiencias, recursos y se acompaña el proceso de forma colectiva. Te cuento los detalles en la consulta.',
  },
  {
    q: '¿Trabajás con obras sociales o prepagas?',
    a: 'Escribime por WhatsApp y te informo las opciones de pago y la posibilidad de emitir factura para reintegro según tu cobertura.',
  },
]

export default function FAQ() {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title={<>Todo lo que <span className="italic text-olive-600">necesitás saber</span></>}
          intro="Si te queda alguna duda, escribime y la conversamos."
        />
        <div className="divide-y divide-sand-200 border-y border-sand-200">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <span className="font-serif text-xl font-medium text-ink sm:text-2xl">{q}</span>
                <Plus className="mt-1.5 h-5 w-5 shrink-0 text-olive-600 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 pr-10 text-base leading-relaxed text-stone">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
