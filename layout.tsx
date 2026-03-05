import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexa Systems — Automatización con IA para empresas",
  description:
    "Sistemas de automatización, IA y CRM para empresas que quieren operar mejor sin depender de más personas. CRM comercial, agentes de IA, integraciones.",
  keywords: "automatización empresas, CRM, agentes IA, integraciones, PYME España",
  openGraph: {
    title: "Nexa Systems — Tu empresa. Funcionando sola.",
    description:
      "Sistemas de automatización, IA y CRM para PYMEs en España.",
    url: "https://nexasystems.io",
    siteName: "Nexa Systems",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Systems",
    description: "Automatización, IA y CRM para PYMEs.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-nexa-black text-nexa-white antialiased">
        {children}
      </body>
    </html>
  );
}
