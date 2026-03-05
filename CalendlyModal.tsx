"use client";

import { useEffect, useCallback } from "react";
import { CALENDLY_URL } from "@/lib/constants";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="calendly-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Reservar consulta gratuita"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="calendly-modal">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--bd)]">
          <div>
            <p className="section-label mb-0.5">Consulta gratuita</p>
            <p className="text-sm font-semibold text-[var(--w)]">
              Reserva una llamada de diagnóstico
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-8 h-8 rounded-lg flex items-center justify-center
                       text-[var(--w30)] hover:text-[var(--w)] hover:bg-[var(--w07)]
                       transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Calendly iframe */}
        <div className="w-full" style={{ height: "calc(90vh - 80px)", minHeight: 480 }}>
          <iframe
            src={`${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&primary_color=2563eb`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Reservar consulta Nexa Systems"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
