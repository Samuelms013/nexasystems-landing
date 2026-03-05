"use client";

import { useState, useEffect } from "react";
import { NexaLogo } from "@/components/ui/NexaLogo";

interface NavbarProps {
  onOpenCalendly: () => void;
}

const navLinks = [
  { label: "Servicios",      href: "#servicios" },
  { label: "Casos de uso",   href: "#casos" },
  { label: "Proceso",        href: "#proceso" },
];

export function Navbar({ onOpenCalendly }: NavbarProps) {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(7,8,12,.92)] backdrop-blur-md border-b border-[var(--bd)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Nexa Systems — inicio"
          className="flex items-center gap-0 hover:opacity-90 transition-opacity"
        >
          <NexaLogo size={22} wordmark id="nav-logo" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[var(--w55)] hover:text-[var(--w)]
                         transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenCalendly} className="btn-primary text-sm">
            Consulta gratuita →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          className="md:hidden w-9 h-9 flex items-center justify-center
                     rounded-lg border border-[var(--bd)] text-[var(--w55)]
                     hover:text-[var(--w)] hover:border-[var(--bd2)] transition-colors"
        >
          {mobileMenuOpen ? (
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="4.5" width="12" height="1.3" rx=".65" fill="currentColor" />
              <rect x="2" y="7.35" width="12" height="1.3" rx=".65" fill="currentColor" />
              <rect x="2" y="10.2" width="12" height="1.3" rx=".65" fill="currentColor" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--s1)] border-t border-[var(--bd)] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-2.5 rounded-lg
                         text-sm text-[var(--w55)] hover:text-[var(--w)]
                         hover:bg-[var(--w07)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCalendly(); }}
              className="btn-primary w-full justify-center text-sm"
            >
              Consulta gratuita →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
