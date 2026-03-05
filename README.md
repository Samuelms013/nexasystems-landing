# Nexa Systems — Landing Page

Landing page de producción para **Nexa Systems** (nexasystems.io).  
Stack: **Next.js 14 App Router · TypeScript · Tailwind CSS · Vercel**

---

## Requisitos previos

- Node.js ≥ 18.17
- npm ≥ 9 (o pnpm / yarn)

---

## 1. Ejecución local

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-org/nexa-landing.git
cd nexa-landing

# 2. Instala dependencias
npm install

# 3. Crea el archivo de variables de entorno
cp .env.example .env.local
# → edita .env.local y añade tu URL de Calendly (ver abajo)

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 2. Variables de entorno

Crea un archivo `.env.local` en la raíz con:

```env
# URL de tu Calendly — REEMPLAZA con tu enlace real
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/nexasystems/consulta
```

> Si no tienes Calendly aún, el modal seguirá abriéndose con esa URL placeholder.  
> Reemplaza `CALENDLY_URL` en `lib/constants.ts` directamente si prefieres no usar `.env`.

---

## 3. Añadir el logo SVG

Coloca tu archivo de logo en:

```
public/logo.svg
```

El componente `NexaLogo` ya incluye el símbolo SVG generado inline desde el brand system.  
**No necesitas una imagen externa** para el logo: el símbolo se renderiza con SVG puro.

### Tamaños recomendados del logo

| Contexto          | Altura símbolo | Wordmark size |
|-------------------|----------------|---------------|
| Navbar            | 22 px          | ~17 px        |
| Footer            | 20 px          | ~15 px        |
| Hero / Hero largo | 40–48 px       | ~31–37 px     |
| CTA Final         | 40 px          | ~31 px        |
| Favicon (PNG)     | 96×96 px       | —             |

---

## 4. Build de producción (local)

```bash
npm run build
npm start
```

---

## 5. Deploy en Vercel

### Opción A — Vercel CLI

```bash
# Instala la CLI si no la tienes
npm i -g vercel

# Desde la raíz del proyecto
vercel

# Sigue el asistente:
# → Set up and deploy: Yes
# → Which scope: (tu cuenta)
# → Link to existing project: No → crea uno nuevo
# → Directory: ./  (por defecto)
# → Override settings: No
```

### Opción B — Vercel Dashboard (recomendado)

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio de GitHub / GitLab
3. Vercel detecta Next.js automáticamente — no hay que tocar nada
4. Añade la variable de entorno en **Settings → Environment Variables**:
   - Key: `NEXT_PUBLIC_CALENDLY_URL`
   - Value: `https://calendly.com/nexasystems/consulta`
5. Click **Deploy**

El dominio custom `nexasystems.io` se configura en **Settings → Domains**.

---

## 6. Estructura del proyecto

```
nexa-landing/
├── app/
│   ├── globals.css          # CSS global + Tailwind + variables de marca
│   ├── layout.tsx           # Root layout (metadata, fuentes)
│   └── page.tsx             # Página principal (ensamblaje de secciones)
│
├── components/
│   ├── ui/
│   │   ├── NexaLogo.tsx     # Componente SVG del logo (symbol + wordmark)
│   │   └── CalendlyModal.tsx # Modal con iframe de Calendly
│   │
│   └── sections/
│       ├── Navbar.tsx       # Barra de navegación fija
│       ├── Hero.tsx         # Hero con mockup dashboard
│       ├── Services.tsx     # Qué hacemos — 4 cards
│       ├── UseCases.tsx     # Casos de uso — 4 sectores
│       ├── Process.tsx      # Proceso — 3 pasos
│       ├── SocialProof.tsx  # Resultados + quotes ilustrativos
│       ├── FAQ.tsx          # FAQ accordion
│       ├── CTAFinal.tsx     # Bloque CTA final con Calendly
│       └── Footer.tsx       # Footer con nav + legal
│
└── lib/
    └── constants.ts         # CALENDLY_URL, SITE data
```

---

## 7. Personalización rápida

### Cambiar el copy
Todos los textos están en los componentes de `components/sections/`.  
Busca las cadenas en español y reemplázalas directamente.

### Cambiar colores de marca
Los colores están definidos como CSS variables en `app/globals.css`:

```css
:root {
  --bl:  #2563eb;   /* Azul primario (fondo claro) */
  --bl2: #3b82f6;   /* Azul brillante (fondo oscuro) */
  --bg:  #07080c;   /* Fondo principal */
  --s1:  #0c0e15;   /* Surface 1 */
  --s2:  #10121a;   /* Surface 2 */
  --w:   #e8eaf2;   /* Blanco de marca */
}
```

### Añadir / quitar secciones
En `app/page.tsx`, simplemente importa o elimina los componentes de sección.

---

## 8. Calendly — notas de integración

El modal usa un `<iframe>` estándar de Calendly con `?embed_type=Inline`.  
No requiere ninguna librería externa — funciona con el iframe nativo del navegador.

Si quieres usar el script oficial de Calendly (`<script>` tag) para analytics:

```tsx
// En app/layout.tsx, añade dentro de <head>:
<Script
  src="https://assets.calendly.com/assets/external/widget.js"
  strategy="lazyOnload"
/>
```

---

## 9. SEO

El metadata está en `app/layout.tsx`. Actualiza:
- `title`, `description`, `keywords`
- `openGraph.url` → tu dominio real
- Imagen OG → `/public/og-image.png` (1200×630 px recomendado)

---

## Licencia

Propiedad de Nexa Systems. Todos los derechos reservados.
