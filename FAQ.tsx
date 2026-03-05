"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar listo el sistema?",
    a: "Depende del alcance. Un sistema básico (CRM + automatizaciones) tarda entre 2 y 4 semanas desde el diagnóstico. Un sistema completo con agentes de IA puede tardar 4–8 semanas. Siempre damos una hoja de ruta con fechas antes de empezar.",
  },
  {
    q: "¿Qué herramientas utilizáis?",
    a: "Trabajamos con n8n y Make para automatizaciones, APIs de LLM (OpenAI, Anthropic) para los agentes, y construimos CRMs a medida sobre PostgreSQL con frontend en Next.js. Podemos integrarnos con las herramientas que ya usas: Shopify, HubSpot, Notion, Google Workspace, WhatsApp Business, y más.",
  },
  {
    q: "¿Se integra con mi CRM o sistema actual?",
    a: "En la mayoría de casos, sí. Si tu herramienta actual tiene API (la mayoría tienen), la integramos. Si no tiene API, evaluamos alternativas. En el diagnóstico detectamos qué es posible y qué requiere migración.",
  },
  {
    q: "¿Qué mantenimiento requiere el sistema?",
    a: "Una vez en producción, los sistemas son muy estables. Ofrecemos soporte mensual opcional para ajustes, actualizaciones y mejoras. No necesitas un equipo técnico propio para mantenerlo.",
  },
  {
    q: "¿Cómo gestionáis los datos y la seguridad?",
    a: "Cumplimos con el RGPD y la normativa española. Los datos de tus clientes se almacenan en servidores dentro de la UE. Nunca compartimos datos con terceros. Podemos firmar DPA (Data Processing Agreement) si lo requieres.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "No publicamos tarifas fijas porque cada sistema es diferente. Tras el diagnóstico gratuito, enviamos una propuesta detallada con coste cerrado. Sin sorpresas, sin horas ilimitadas. El diagnóstico no tiene ningún coste ni compromiso.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos?",
    a: "No. Nos encargamos de todo: diseño, construcción, configuración e implantación. Hacemos onboarding de tu equipo para que sepa usar el sistema sin depender de nosotros para el día a día.",
  },
  {
    q: "¿Funciona para empresas pequeñas?",
    a: "Especialmente. La mayoría de nuestros clientes son PYMEs de 5 a 50 personas. El ROI es más alto cuando el equipo es pequeño y cada hora ahorrada importa. Si eres una empresa más grande, también podemos ayudarte.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--bd)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={`text-[14px] font-medium transition-colors ${
            open ? "text-[var(--w)]" : "text-[var(--w55)] group-hover:text-[var(--w)]"
          }`}
        >
          {q}
        </span>
        <span
          className={`ml-4 w-5 h-5 rounded flex items-center justify-center shrink-0
                       border border-[var(--bd)] text-[var(--w30)]
                       transition-all duration-200 ${open ? "bg-[var(--bl)] border-[var(--bl)] text-white rotate-45" : ""}`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="pb-4 -mt-1">
          <p className="text-[13.5px] text-[var(--w55)] leading-relaxed font-light">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-title mb-4">Preguntas frecuentes</h2>
            <p className="section-sub">
              Si no encuentras lo que buscas, escríbenos a{" "}
              <a
                href="mailto:hola@nexasystems.io"
                className="text-[var(--bl2)] hover:underline"
              >
                hola@nexasystems.io
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div className="rounded-2xl border border-[var(--bd)] bg-[var(--s1)] px-6 py-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
