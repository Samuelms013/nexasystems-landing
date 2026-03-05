"use client";

interface HeroProps {
  onOpenCalendly: () => void;
}

// ── Mini icon components ──
function IconClock() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7.5 4.5v3.25l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
      <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9"   y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1.5" y="9"   width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9"   y="9"   width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
      <path d="M8.5 1.5 L4 8.5 h4.5 L6.5 13.5 L12 6.5 H7.5 Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  { icon: <IconClock />, label: "Ahorro de tiempo" },
  { icon: <IconGrid />,  label: "Orden y control" },
  { icon: <IconZap />,   label: "Menos fricción" },
];

// ── Dashboard mockup (pure CSS/SVG, no external images) ──
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -inset-x-8 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(37,99,235,.22) 0%, transparent 70%)",
        }}
      />

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-[var(--bd2)] bg-[var(--s1)] overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--bd)] bg-[var(--s2)]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,95,87,.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(254,188,46,.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(40,200,64,.6)]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[var(--bg)] rounded px-3 py-0.5 text-[10px] font-mono text-[var(--w30)]">
              nexasystems.io/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-5 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Leads hoy",    value: "24",   delta: "+12%" },
              { label: "Reuniones",    value: "8",    delta: "+3" },
              { label: "Tasa cierre",  value: "34%",  delta: "+5%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--bd)] bg-[var(--bg)] p-3"
              >
                <p className="text-[9px] text-[var(--w30)] font-mono tracking-wide mb-1">
                  {stat.label.toUpperCase()}
                </p>
                <p className="text-lg font-bold text-[var(--w)] leading-none">
                  {stat.value}
                </p>
                <p className="text-[9px] text-[#4ade80] mt-1">{stat.delta}</p>
              </div>
            ))}
          </div>

          {/* Pipeline mini */}
          <div className="rounded-xl border border-[var(--bd)] bg-[var(--bg)] p-3">
            <p className="text-[9px] font-mono tracking-wide text-[var(--w30)] mb-3">PIPELINE ACTIVO</p>
            <div className="space-y-2">
              {[
                { stage: "Nuevo",           pct: 85,  n: 12 },
                { stage: "Cualificado",     pct: 55,  n: 7 },
                { stage: "Oferta enviada",  pct: 30,  n: 4 },
              ].map((row) => (
                <div key={row.stage} className="flex items-center gap-3">
                  <span className="text-[9px] text-[var(--w55)] w-24 shrink-0">{row.stage}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[var(--s2)]">
                    <div
                      className="h-full rounded-full bg-[var(--bl2)]"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-[var(--w30)] w-4 text-right">{row.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-[var(--bd)] bg-[var(--bg)] p-3">
            <p className="text-[9px] font-mono tracking-wide text-[var(--w30)] mb-2.5">ACTIVIDAD RECIENTE</p>
            <div className="space-y-2.5">
              {[
                { action: "Lead calificado",     who: "Agente IA",       time: "hace 2min" },
                { action: "Reunión agendada",     who: "Carlos M.",       time: "hace 8min" },
                { action: "Follow-up enviado",    who: "Automatización",  time: "hace 14min" },
              ].map((ev) => (
                <div key={ev.action} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--bl2)] shrink-0" />
                    <span className="text-[10px] text-[var(--w55)]">{ev.action}</span>
                    <span className="text-[9px] text-[var(--w30)]">· {ev.who}</span>
                  </div>
                  <span className="text-[9px] text-[var(--w30)]">{ev.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero({ onOpenCalendly }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(37,99,235,.14) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--w) 1px, transparent 1px), linear-gradient(90deg, var(--w) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            border border-[var(--bd2)] bg-[var(--w07)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--bl2)] animate-pulse-soft" />
              <span className="font-mono text-[10px] tracking-[.12em] text-[var(--w55)] uppercase">
                Automatización · IA · CRM
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.02]">
              Tu empresa.{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                }}
              >
                Funcionando sola.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-[var(--w55)] font-light leading-relaxed max-w-lg">
              Sistemas de automatización, IA y CRM para empresas que quieren
              operar mejor sin depender de más personas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={onOpenCalendly} className="btn-primary px-6 py-3 text-base">
                Consulta gratuita →
              </button>
              <button
                onClick={() => {
                  document.querySelector("#casos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ghost px-6 py-3 text-base"
              >
                Ver casos de uso
              </button>
            </div>

            {/* Microbeneficios */}
            <div className="flex flex-wrap gap-4 pt-2">
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-[var(--w55)]"
                >
                  <span className="text-[var(--bl2)]">{b.icon}</span>
                  <span className="text-[13px] font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
