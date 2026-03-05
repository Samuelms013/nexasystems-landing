"use client";

/**
 * NexaLogo — exact Signal N geometry from brand system v8
 *
 * ViewBox: 0 0 56 64  (ratio 7:8)
 * Method: SVG mask — rect rx=4 MINUS rotated rectangle (gap)
 * Gap: 10u in diagonal direction, centered at (28,32)
 *
 * Usage:
 *   <NexaLogo size={20} />                — symbol only
 *   <NexaLogo size={20} wordmark />       — N + "Nexa"
 *   <NexaLogo size={20} wordmark systems />  — N + "Nexa" + "SYSTEMS"
 */

interface Props {
  /** Height of the N symbol in px. Width scales proportionally (7:8 ratio). */
  size?: number;
  /** Show "Nexa" wordmark next to symbol */
  wordmark?: boolean;
  /** Show "SYSTEMS" descriptor below wordmark (requires wordmark=true) */
  systems?: boolean;
  /** Override fill color (default: #3b82f6 for dark bg, #2563eb for light) */
  color?: string;
  className?: string;
  id?: string;
}

// Unique ID counter to avoid duplicate mask IDs on the same page
let _idCounter = 0;

export function NexaLogo({
  size = 24,
  wordmark = false,
  systems = false,
  color = "#3b82f6",
  className = "",
  id,
}: Props) {
  // Generate stable unique ID for the mask
  const uid = id ?? `nm-${++_idCounter}`;

  const w = Math.round((size * 56) / 64); // proportional width
  const h = size;

  // Font sizes proportional to symbol height
  const wordmarkSize = Math.round(h * 0.77);
  const systemsSize  = Math.round(h * 0.22);
  const gap          = Math.round(h * 0.29); // spacing between symbol and text

  // For wordmark, total SVG width = symbol + gap + text estimate
  const textWidth = wordmark ? Math.round(wordmarkSize * 2.48) : 0; // "Nexa" rough width
  const totalW    = wordmark ? w + gap + textWidth : w;
  const baselineY = Math.round(h * 0.78); // text baseline

  if (!wordmark) {
    // Symbol only
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 56 64"
        fill="none"
        className={className}
        aria-label="Nexa"
      >
        <defs>
          <mask id={uid}>
            <rect width="56" height="64" rx="4" fill="white" />
            <path fill="black" d="M18.6 31.1 L23.1 40 L37.4 32.9 L32.9 24Z" />
          </mask>
        </defs>
        <g mask={`url(#${uid})`}>
          <g fill={color}>
            <rect width="12" height="64" />
            <rect x="44" width="12" height="64" />
            <path d="M6.6 2.7 L17.4 -2.7 L31.1 24.8 L20.4 30.2Z" />
          </g>
          <path fill={color} opacity="0.32" d="M24.9 39.2 L35.6 33.8 L49.4 61.3 L38.6 66.7Z" />
        </g>
      </svg>
    );
  }

  // Symbol + wordmark (+ optional systems)
  const systemsY = Math.round(baselineY + systemsSize * 1.4);
  const svgH     = systems ? systemsY + 4 : h;

  return (
    <svg
      width={totalW}
      height={svgH}
      viewBox={`0 0 ${totalW} ${svgH}`}
      fill="none"
      className={className}
      aria-label={systems ? "Nexa Systems" : "Nexa"}
    >
      <defs>
        <mask id={uid}>
          <rect
            transform={`scale(${h / 64})`}
            width="56"
            height="64"
            rx="4"
            fill="white"
          />
          <path
            fill="black"
            transform={`scale(${h / 64})`}
            d="M18.6 31.1 L23.1 40 L37.4 32.9 L32.9 24Z"
          />
        </mask>
      </defs>

      {/* N symbol */}
      <g mask={`url(#${uid})`} transform={`scale(${h / 64})`}>
        <g fill={color}>
          <rect width="12" height="64" />
          <rect x="44" width="12" height="64" />
          <path d="M6.6 2.7 L17.4 -2.7 L31.1 24.8 L20.4 30.2Z" />
        </g>
        <path fill={color} opacity="0.32" d="M24.9 39.2 L35.6 33.8 L49.4 61.3 L38.6 66.7Z" />
      </g>

      {/* Wordmark "Nexa" */}
      <text
        x={w + gap}
        y={baselineY}
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Helvetica, sans-serif"
        fontSize={wordmarkSize}
        fontWeight="800"
        letterSpacing="-0.04em"
        fill="#e8eaf2"
      >
        Nexa
      </text>

      {/* Optional "SYSTEMS" descriptor */}
      {systems && (
        <>
          <rect
            x={w + gap}
            y={baselineY + 3}
            width={Math.round(wordmarkSize * 1.68)}
            height={1}
            rx="0.5"
            fill="rgba(59,130,246,.28)"
          />
          <text
            x={w + gap + 1}
            y={systemsY}
            fontFamily="-apple-system, BlinkMacSystemFont, Helvetica, sans-serif"
            fontSize={systemsSize}
            fontWeight="400"
            letterSpacing="0.22em"
            fill="rgba(232,234,242,.28)"
          >
            SYSTEMS
          </text>
        </>
      )}
    </svg>
  );
}

export default NexaLogo;
