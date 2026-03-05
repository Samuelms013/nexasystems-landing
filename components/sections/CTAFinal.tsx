"use client";

import { NexaLogo } from "@/components/ui/NexaLogo";

interface CTAFinalProps {
  onOpenCalendly: () => void;
}

export function CTAFinal({ onOpenCalendly }: CTAFinalProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37,99,235,.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div
          className="rounded-3xl border border-[rgba(59,130,246,.28)]
                      bg-[var(--s1)] p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 100% 100% at 50% -20%, rgba(37,99,235,.12) 0%, transparent 60%)",
          }}
        >
          {/* Decorative lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--bl2)] to-transparent opacity-40" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[var(--bl2)] to-transparent opacity-40" />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-7">
            <NexaLogo size={40} wordmark systems id="cta-final-logo" />
          </div>

          {/* Copy */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em]
                       leading-[1.05] mb-5 max-w-xl mx-auto"
          >
            Reserva una consulta{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              }}
            >
              gratuita
            </span>
          </h2>

          <p className="text-[15px] text-[var(--w55)] font-light leading-relaxed max-w-md mx-auto mb-8">
            Cuéntanos cómo opera tu empresa. En 45 minutos analizamos qué se puede
            automatizar y qué sistema tendría más impacto para ti.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <button
              onClick={onOpenCalendly}
              className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto justify-center"
            >
              Agendar en Calendly →
            </button>
            <a
              href="mailto:hola@nexasystems.io"
              className="btn-ghost px-8 py-3.5 text-base w-full sm:w-auto justify-center"
            >
              Escribir un email
            </a>
          </div>

          {/* Micro trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              "Sin compromiso",
              "Respuesta en 24–48h",
              "Sin spam",
            ].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[var(--w30)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[12px] font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
