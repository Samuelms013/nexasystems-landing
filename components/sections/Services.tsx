// Services (Qué hacemos) — 4 cards

function IconAutomation() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconCRM() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 17c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 11.5c2.21 0 4 1.79 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="10" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="13" cy="10.5" r="1.2" fill="currentColor" />
      <path d="M6 5V3.5a4 4 0 018 0V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconIntegration() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M4 10h4M12 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="7" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="7" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="5" width="4" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const services = [
  {
    icon: <IconAutomation />,
    title: "Automatización operativa",
    desc: "Eliminamos tareas repetitivas que consumen el tiempo de tu equipo. Flujos de trabajo, notificaciones y procesos que funcionan solos.",
    example: "Ejemplo: concesionario que gestiona 80 leads/semana sin intervención manual.",
  },
  {
    icon: <IconCRM />,
    title: "CRM comercial",
    desc: "Pipeline visual, seguimiento de clientes y alertas automáticas. Tu equipo de ventas siempre sabe qué hacer y cuándo.",
    example: "Ejemplo: inmobiliaria con 12 agentes y cero leads perdidos por falta de seguimiento.",
  },
  {
    icon: <IconAI />,
    title: "Agentes de IA",
    desc: "Agentes que responden leads, califican prospectos y agendan reuniones en WhatsApp, web y email. 24/7, sin salario.",
    example: "Ejemplo: clínica que llena su agenda de marzo en 48h con un agente de WhatsApp.",
  },
  {
    icon: <IconIntegration />,
    title: "Integraciones",
    desc: "Conectamos tus herramientas existentes: Shopify, Gmail, WhatsApp, Calendly, ERPs, y más. Sin silos de información.",
    example: "Ejemplo: e-commerce que sincroniza pedidos, soporte y stock en tiempo real.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-3">Qué hacemos</p>
          <h2 className="section-title max-w-xl mb-4">
            Sistemas que sustituyen trabajo manual
          </h2>
          <p className="section-sub max-w-xl">
            No vendemos software. Diseñamos e implementamos sistemas operativos
            completos adaptados a tu sector y tamaño.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-hover p-6 space-y-4 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center
                            bg-[rgba(37,99,235,.12)] text-[var(--bl2)]
                            group-hover:bg-[rgba(37,99,235,.18)] transition-colors"
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[var(--w)] leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[var(--w55)] leading-relaxed font-light">
                {s.desc}
              </p>

              {/* Example */}
              <div className="pt-2 border-t border-[var(--bd)]">
                <p className="text-[11.5px] text-[var(--w30)] italic leading-relaxed">
                  {s.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
