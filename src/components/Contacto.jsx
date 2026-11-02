import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { site, whatsappUrl } from '../config/site'
import { trackFormSubmit } from '../lib/tracking'
import { SectionHeader, WhatsAppLink, WhatsAppIcon, PhoneLink } from './ui'

const initial = { nombre: '', telefono: '', email: '', modalidad: 'Presencial', mensaje: '', acepto: false }

export default function Contacto({ onOpenLegal }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    trackFormSubmit({ modalidad: form.modalidad })

    const text =
      `Hola Virginia, soy ${form.nombre}.\n` +
      `Me interesa una consulta ${form.modalidad.toLowerCase()}.\n` +
      (form.mensaje ? `${form.mensaje}\n` : '') +
      `Tel: ${form.telefono}` + (form.email ? ` · Email: ${form.email}` : '')

    try {
      if (site.formEndpoint) {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Error de envío')
      } else {
        // Sin servidor: abre WhatsApp con el mensaje armado.
        window.open(whatsappUrl(text), '_blank', 'noopener')
      }
      setStatus('sent')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-xl border border-sand-300 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none transition focus:border-olive-500 focus:ring-4 focus:ring-olive-100'

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Contacto"
            title={<>Agendá tu <span className="italic text-olive-600">consulta</span></>}
            intro="Dar el primer paso es lo más importante. Escribime y coordinamos un horario presencial u online."
          />

          <div className="mt-10 rounded-3xl bg-olive-600 p-8 text-white">
            <p className="font-serif text-2xl">La forma más rápida</p>
            <p className="mt-2 text-sm text-olive-100">Respondo personalmente los mensajes de WhatsApp.</p>
            <WhatsAppLink location="contacto" className="btn-primary mt-6 bg-white text-olive-800 hover:bg-sand-100">
              <WhatsAppIcon className="h-4.5 w-4.5" /> Escribime por WhatsApp
            </WhatsAppLink>
          </div>

          <ul className="mt-10 space-y-5 text-sm text-stone">
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-olive-600" strokeWidth={1.6} />
              <PhoneLink location="contacto" className="hover:text-olive-700" />
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-olive-600" strokeWidth={1.6} />
              <a href={`mailto:${site.email}`} className="hover:text-olive-700">{site.email}</a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-olive-600" strokeWidth={1.6} /> {site.address} · y online
            </li>
            <li className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-olive-600" strokeWidth={1.6} /> {site.hours}
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-sand-200 bg-sand-100/60 p-6 sm:p-10">
          {status === 'sent' ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-olive-600" strokeWidth={1.4} />
              <p className="mt-5 font-serif text-3xl text-ink">¡Gracias por escribir!</p>
              <p className="mt-2 max-w-sm text-stone">
                Recibí tu mensaje y te respondo a la brevedad para coordinar tu consulta.
              </p>
              <button className="btn-outline mt-8" onClick={() => setStatus('idle')}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
              <p className="font-serif text-2xl text-ink">Dejame tus datos</p>
              <div>
                <label htmlFor="nombre" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">Nombre y apellido</label>
                <input id="nombre" name="nombre" required autoComplete="name" value={form.nombre} onChange={update} className={field} placeholder="¿Cómo te llamás?" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" required autoComplete="tel" value={form.telefono} onChange={update} className={field} placeholder="11 1234 5678" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">Email <span className="normal-case tracking-normal">(opcional)</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} className={field} placeholder="tu@email.com" />
                </div>
              </div>
              <fieldset>
                <legend className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">Modalidad</legend>
                <div className="grid grid-cols-2 gap-3">
                  {['Presencial', 'Online'].map((m) => (
                    <label key={m} className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition ${form.modalidad === m ? 'border-olive-600 bg-olive-600 text-white' : 'border-sand-300 bg-white text-ink hover:border-olive-400'}`}>
                      <input type="radio" name="modalidad" value={m} checked={form.modalidad === m} onChange={update} className="sr-only" />
                      {m}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="mensaje" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">Contame brevemente qué buscás</label>
                <textarea id="mensaje" name="mensaje" rows={4} value={form.mensaje} onChange={update} className={`${field} resize-none`} placeholder="Ej.: quiero mejorar mi relación con la comida…" />
              </div>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-stone">
                <input type="checkbox" name="acepto" required checked={form.acepto} onChange={update} className="mt-0.5 h-4 w-4 accent-olive-600" />
                <span>
                  Acepto la{' '}
                  <button type="button" onClick={() => onOpenLegal('privacidad')} className="underline hover:text-olive-700">Política de Privacidad</button>{' '}
                  y el tratamiento de mis datos para ser contactada/o.
                </span>
              </label>
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full py-4 disabled:opacity-60">
                <Send className="h-4 w-4" /> {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-700">No pudimos enviar el formulario. Probá de nuevo o escribime por WhatsApp.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
