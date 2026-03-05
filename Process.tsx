// Process section — 3-step minimal timeline

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos cómo opera tu empresa hoy: procesos, herramientas y cuellos de botella. Sin compromiso ni coste.",
    detail: "Llamada de 45 min + documento de análisis entregado en 48h.",
    duration: "1–2 días",
  },
  {
    num: "02",
    title: "Diseño del sistema",
    desc: "Diseñamos la arquitectura exacta de tu sistema: qué automatizar, qué integrar, qué agente construir y cómo medirlo.",
    detail: "Propuesta técnica detallada con hoja de ruta y coste estimado.",
    duration: "3–5 días",
  },
  {
    num: "03",
    title: "Implementación + soporte",
    desc: "Construimos, configuramos y lanzamos. No desaparecemos: hacemos seguimiento y ajustamos hasta que funcione.",
    detail: "Onboarding de tu equipo incluido. Soporte mensual opcional.",
    duration: "2–6 semanas",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-3">Proceso</p>
          <h2 className="section-title max-w-lg mb-4">
            De diagnóstico a sistema funcionando
          </h2>
          <p className="section-sub max-w-lg">
            Sin proyectos eternos. Sin burocracia innecesaria. En semanas, no meses.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-[28px] left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-[var(--bd2)] to-transparent"
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, i) => (
              <div key={step.num} className="relative group">
                {/* Step number + dot */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="relative w-12 h-12 rounded-2xl border border-[var(--bd2)]
                                flex items-center justify-center bg-[var(--s1)] shrink-0
                                group-hover:border-[rgba(59,130,246,.45)]
                                group-hover:shadow-[0_0_20px_rgba(37,99,235,.14)]
                                transition-all duration-200"
                  >
                    <span className="font-mono text-[11px] font-bold text-[var(--bl2)]">
                      {step.num}
                    </span>
                    {/* Pulse dot for active feel */}
                    <span
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--bl2)]"
                      style={{ opacity: 0.7 - i * 0.15 }}
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[9px] tracking-[.12em] text-[var(--w30)] uppercase mb-0.5">
                      {step.duration}
                    </p>
                    <h3 className="text-base font-semibold text-[var(--w)]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[13px] text-[var(--w55)] leading-relaxed mb-4">
                  {step.desc}
                </p>

                <div className="flex items-start gap-2 pt-3 border-t border-[var(--bd)]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-[var(--bl2)] mt-0.5 shrink-0">
                    <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[11.5px] text-[var(--w30)] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
