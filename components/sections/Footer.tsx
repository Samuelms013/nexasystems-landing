import { NexaLogo } from "@/components/ui/NexaLogo";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--bd)] bg-[var(--s1)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Left: brand */}
          <div className="space-y-4">
            <NexaLogo size={20} wordmark systems id="footer-logo" />
            <p className="text-[13px] text-[var(--w30)] font-light max-w-xs leading-relaxed">
              Sistemas de automatización, IA y CRM para PYMEs en España.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[13px] text-[var(--bl2)] hover:underline font-mono"
            >
              {SITE.email}
            </a>
          </div>

          {/* Right: nav */}
          <nav className="space-y-2">
            <p className="font-mono text-[9.5px] tracking-[.14em] text-[var(--w30)] uppercase mb-3">
              Navegación
            </p>
            {[
              { label: "Servicios",    href: "#servicios" },
              { label: "Casos de uso", href: "#casos" },
              { label: "Proceso",      href: "#proceso" },
              { label: "FAQ",          href: "#faq" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-[13px] text-[var(--w55)] hover:text-[var(--w)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--bd)] flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--w30)]">
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacidad" className="text-[12px] text-[var(--w30)] hover:text-[var(--w55)] transition-colors">
              Política de privacidad
            </a>
            <a href="/cookies" className="text-[12px] text-[var(--w30)] hover:text-[var(--w55)] transition-colors">
              Cookies
            </a>
            <a href="/aviso-legal" className="text-[12px] text-[var(--w30)] hover:text-[var(--w55)] transition-colors">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
