"use client";

interface UseCasesProps {
  onOpenCalendly: () => void;
}

const cases = [
  {
    sector: "Concesionarios",
    badge: "Coches & Motos",
    color: "from-blue-600/20 to-indigo-700/10",
    icon: "🚗",
    problem:
      "El equipo de ventas pierde el hilo de cada lead: quién lo contactó, qué oferta recibió, cuándo hay que volver a llamar.",
    system:
      "CRM con pipeline visual + Sales Agent de WhatsApp que responde consultas, califica y agenda test-drives automáticamente.",
    result:
      "Todos los leads atendidos en <5 min. El equipo solo gestiona los ya cualificados.",
  },
  {
    sector: "Inmobiliarias",
    badge: "Residencial & Obra nueva",
    color: "from-violet-600/20 to-purple-700/10",
    icon: "🏠",
    problem:
      "Agentes saturados respondiendo las mismas preguntas por WhatsApp y email. Leads cualificados esperando horas.",
    system:
      "CRM multi-agente + chat cualificador en web y WhatsApp. Asigna leads por zona, presupuesto y etapa automáticamente.",
    result:
      "12 agentes, cero leads sin respuesta. Primera respuesta en <2 min.",
  },
  {
    sector: "Clínicas",
    badge: "Estética & Dental",
    color: "from-teal-600/20 to-cyan-700/10",
    icon: "🏥",
    problem:
      "Agenda gestionada por teléfono y WhatsApp. Cancelaciones sin rellenar. Pacientes que nunca vuelven.",
    system:
      "Sistema de citas automático + follow-ups post-tratamiento + reactivación de pacientes inactivos por IA.",
    result:
      "Agenda llena sin depender de recepción. Tasa de repetición +28%.",
  },
  {
    sector: "E-commerce",
    badge: "Shopify & DTC",
    color: "from-orange-600/20 to-red-700/10",
    icon: "🛒",
    problem:
      "Soporte manual saturado. Pedidos perdidos, devoluciones sin gestionar. El equipo ops apagando fuegos.",
    system:
      "Agente de soporte IA + copilot de operaciones que sincroniza Shopify, almacén y mensajería en tiempo real.",
    result:
      "80% de tickets resueltos por IA. Equipo operativo reducido a lo estratégico.",
  },
];

export function UseCases({ onOpenCalendly }: UseCasesProps) {
  return (
    <section id="casos" className="py-20 md:py-28 bg-[var(--s1)] border-y border-[var(--bd)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-3">Casos de uso</p>
          <h2 className="section-title max-w-xl mb-4">
            Sistemas reales para sectores reales
          </h2>
          <p className="section-sub max-w-xl">
            Cada sector tiene sus propios cuellos de botella. Así los resolvemos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <div
              key={c.sector}
              className={`rounded-2xl border border-[var(--bd)] overflow-hidden
                          hover:border-[rgba(59,130,246,.28)]
                          hover:shadow-[0_0_36px_rgba(37,99,235,.08)]
                          transition-all duration-200 bg-[var(--bg)]`}
            >
              {/* Card header */}
              <div className={`px-6 pt-6 pb-5 bg-gradient-to-br ${c.color}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[var(--bl2)] mb-1">
                      {c.badge}
                    </p>
                    <h3 className="text-xl font-bold text-[var(--w)]">
                      {c.icon} {c.sector}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Problem / System / Result */}
              <div className="px-6 py-5 space-y-4">
                <div>
                  <p className="font-mono text-[9px] tracking-[.14em] text-red-400/70 mb-1.5 uppercase">
                    Problema
                  </p>
                  <p className="text-[13px] text-[var(--w55)] leading-relaxed">
                    {c.problem}
                  </p>
                </div>

                <div className="h-px bg-[var(--bd)]" />

                <div>
                  <p className="font-mono text-[9px] tracking-[.14em] text-[var(--bl2)]/70 mb-1.5 uppercase">
                    Sistema
                  </p>
                  <p className="text-[13px] text-[var(--w55)] leading-relaxed">
                    {c.system}
                  </p>
                </div>

                <div className="h-px bg-[var(--bd)]" />

                <div>
                  <p className="font-mono text-[9px] tracking-[.14em] text-green-400/70 mb-1.5 uppercase">
                    Resultado
                  </p>
                  <p className="text-[13px] text-[var(--w)] font-medium leading-relaxed">
                    {c.result}
                  </p>
                </div>

                <button
                  onClick={onOpenCalendly}
                  className="mt-2 text-[12.5px] font-semibold text-[var(--bl2)]
                             hover:text-white transition-colors duration-150
                             flex items-center gap-1 group cursor-pointer"
                >
                  Quiero una demo
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
