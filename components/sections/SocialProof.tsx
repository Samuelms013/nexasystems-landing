// Social proof — results & example quotes, clearly NOT fake reviews

const results = [
  { metric: "< 5 min",  label: "Primera respuesta media a leads" },
  { metric: "–60%",     label: "Reducción en tareas manuales repetitivas" },
  { metric: "2–4 sem.", label: "Tiempo medio hasta sistema en producción" },
  { metric: "24/7",     label: "Disponibilidad de agentes de IA activos" },
];

const exampleQuotes = [
  {
    text: "Ahora cada lead que llega a nuestra web recibe respuesta en menos de 3 minutos, a cualquier hora. Antes eso era imposible sin contratar más personal.",
    role: "Director Comercial, Concesionario",
  },
  {
    text: "Pasamos de gestionar las citas por WhatsApp a tener un sistema que llena la agenda solo. El equipo de recepción se dedica a lo que importa.",
    role: "Directora Médica, Clínica Estética",
  },
  {
    text: "Integraron nuestro Shopify con el almacén y el soporte en dos semanas. Lo que tardábamos horas en gestionar ahora es automático.",
    role: "Fundador, E-commerce DTC",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-[var(--s1)] border-y border-[var(--bd)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <p className="section-label mb-3">Resultados</p>
          <h2 className="section-title max-w-lg mb-4">
            Lo que suelen notar nuestros clientes
          </h2>
          <p className="section-sub max-w-lg">
            Métricas representativas basadas en proyectos implementados.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-[var(--bd)] bg-[var(--bg)] p-5"
            >
              <p
                className="text-3xl font-extrabold tracking-[-0.04em] mb-1"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {r.metric}
              </p>
              <p className="text-[12.5px] text-[var(--w55)] leading-snug font-light">
                {r.label}
              </p>
            </div>
          ))}
        </div>

        {/* Example quotes */}
        <div className="flex items-center gap-3 mb-6">
          <p className="font-mono text-[9.5px] tracking-[.13em] text-[var(--w30)] uppercase">
            Ejemplos ilustrativos — no testimonios verificados
          </p>
          <div className="flex-1 h-px bg-[var(--bd)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {exampleQuotes.map((q) => (
            <div
              key={q.role}
              className="rounded-2xl border border-[var(--bd)] bg-[var(--bg)] p-5 space-y-4"
            >
              {/* Quote mark */}
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path
                  d="M0 16V9.6C0 4.693 2.56 1.707 7.68 0l1.28 1.92C6.4 3.04 5.013 4.8 4.8 7.2H8V16H0zm12 0V9.6C12 4.693 14.56 1.707 19.68 0L20.96 1.92C18.4 3.04 17.013 4.8 16.8 7.2H20V16h-8z"
                  fill="rgba(59,130,246,.25)"
                />
              </svg>

              <p className="text-[13px] text-[var(--w55)] leading-relaxed italic font-light">
                &ldquo;{q.text}&rdquo;
              </p>

              <div className="pt-3 border-t border-[var(--bd)]">
                <p className="text-[11.5px] text-[var(--w30)]">{q.role}</p>
                <p className="text-[10px] text-[var(--w30)] mt-0.5 font-mono tracking-wide">
                  EJEMPLO ILUSTRATIVO
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
