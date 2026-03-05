"use client";

import { useState } from "react";

// Sections
import { Navbar }      from "@/components/sections/Navbar";
import { Hero }        from "@/components/sections/Hero";
import { Services }    from "@/components/sections/Services";
import { UseCases }    from "@/components/sections/UseCases";
import { Process }     from "@/components/sections/Process";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ }         from "@/components/sections/FAQ";
import { CTAFinal }    from "@/components/sections/CTAFinal";
import { Footer }      from "@/components/sections/Footer";

// UI
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function HomePage() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const openCalendly  = () => setCalendlyOpen(true);
  const closeCalendly = () => setCalendlyOpen(false);

  return (
    <>
      {/* Fixed navbar */}
      <Navbar onOpenCalendly={openCalendly} />

      {/* Page content */}
      <main>
        <Hero        onOpenCalendly={openCalendly} />
        <Services />
        <UseCases    onOpenCalendly={openCalendly} />
        <Process />
        <SocialProof />
        <FAQ />
        <CTAFinal    onOpenCalendly={openCalendly} />
      </main>

      <Footer />

      {/* Calendly modal — portal-style overlay */}
      <CalendlyModal isOpen={calendlyOpen} onClose={closeCalendly} />
    </>
  );
}
