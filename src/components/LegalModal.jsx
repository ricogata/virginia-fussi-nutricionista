import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { site } from '../config/site'

/**
 * Textos legales requeridos para pautas de salud en Google Ads.
 * ⚠️ Son modelos orientativos: revisalos con un/a asesor/a legal antes de publicar campañas.
 */
const content = {
  privacidad: {
    title: 'Política de Privacidad',
    body: (
      <>
        <p>
          En cumplimiento de la Ley N.º 25.326 de Protección de Datos Personales de la República Argentina,
          {` ${site.name}`} informa cómo se recopilan y utilizan los datos personales en este sitio web.
        </p>
        <h4>Datos que recopilamos</h4>
        <p>
          Nombre, teléfono, correo electrónico y la información que decidas compartir voluntariamente a
          través del formulario de contacto o de WhatsApp.
        </p>
        <h4>Finalidad</h4>
        <p>
          Los datos se utilizan exclusivamente para responder tus consultas y coordinar turnos. No se venden
          ni se ceden a terceros con fines comerciales.
        </p>
        <h4>Cookies y medición</h4>
        <p>
          Este sitio utiliza Google Tag Manager, Google Analytics y Google Ads, que emplean cookies para medir
          visitas y la efectividad de los anuncios. Estos datos son estadísticos y no te identifican
          personalmente. Podés desactivar las cookies desde la configuración de tu navegador o en
          adssettings.google.com.
        </p>
        <h4>Tus derechos</h4>
        <p>
          Podés solicitar el acceso, rectificación o supresión de tus datos escribiendo a {site.email}. La
          Agencia de Acceso a la Información Pública, órgano de control de la Ley 25.326, atiende las
          denuncias y reclamos relacionados con el incumplimiento de la normativa de protección de datos.
        </p>
      </>
    ),
  },
  terminos: {
    title: 'Términos y Condiciones',
    body: (
      <>
        <p>Al utilizar este sitio aceptás los siguientes términos.</p>
        <h4>Uso del sitio</h4>
        <p>
          El contenido es de carácter informativo y divulgativo. Queda prohibida su reproducción total o
          parcial sin autorización.
        </p>
        <h4>Turnos y consultas</h4>
        <p>
          Los turnos se coordinan por WhatsApp, teléfono o formulario. Te pedimos avisar con al menos 24 horas
          de anticipación en caso de no poder asistir. Los honorarios y medios de pago se informan al momento
          de agendar.
        </p>
        <h4>Resultados</h4>
        <p>
          Cada persona es diferente; los resultados del tratamiento nutricional varían según factores
          individuales y no pueden garantizarse.
        </p>
        <h4>Enlaces externos</h4>
        <p>Este sitio puede contener enlaces a sitios de terceros sobre los que no tenemos control.</p>
        <h4>Jurisdicción</h4>
        <p>Estos términos se rigen por las leyes de la República Argentina.</p>
      </>
    ),
  },
  disclaimer: {
    title: 'Disclaimer Médico',
    body: (
      <>
        <p>
          La información publicada en este sitio tiene fines exclusivamente informativos y educativos y{' '}
          <strong>no reemplaza el diagnóstico, tratamiento ni consejo médico profesional</strong>.
        </p>
        <p>
          La Bioneuroemoción se ofrece como un enfoque complementario al tratamiento nutricional y no
          sustituye la atención médica, psicológica ni psiquiátrica. Ante síntomas, enfermedades o
          condiciones de salud, consultá siempre con tu médica/o.
        </p>
        <p>
          No suspendas ni modifiques tratamientos indicados por otros profesionales de la salud sin su
          supervisión. En caso de emergencia, comunicate con el servicio de emergencias de tu localidad
          (107 / 911).
        </p>
        <p>
          Los resultados de los tratamientos son individuales y pueden variar de una persona a otra.
        </p>
        <p className="text-xs">Profesional responsable: {site.name} · {site.license}</p>
      </>
    ),
  },
}

export default function LegalModal({ type, onClose }) {
  const dialogRef = useRef(null)
  const data = type ? content[type] : null

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (data && !dlg.open) dlg.showModal()
    if (!data && dlg.open) dlg.close()
  }, [data])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-3xl bg-sand-50 p-0 text-ink shadow-2xl backdrop:bg-olive-900/50 backdrop:backdrop-blur-sm"
    >
      {data && (
        <div className="max-h-[85vh] overflow-y-auto p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <h3 className="font-serif text-3xl font-medium sm:text-4xl">{data.title}</h3>
            <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-2 text-stone hover:bg-sand-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone [&_h4]:pt-2 [&_h4]:font-medium [&_h4]:text-ink">
            {data.body}
          </div>
          <p className="mt-8 text-xs text-stone/70">Última actualización: {new Date().getFullYear()}</p>
        </div>
      )}
    </dialog>
  )
}
