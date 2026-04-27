type Props = { name: string; size?: number; className?: string };

export default function PixelIcon({ name, size = 18, className = "" }: Props) {
  const s = size;
  const stroke = "currentColor";
  switch (name) {
    case "shield":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M3 2 H13 V8 C13 11 10 13 8 14 C6 13 3 11 3 8 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M8 5 V11 M5 8 H11" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case "sword":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M12 2 L14 4 L7 11 L5 11 L5 9 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M3 13 L6 10 M5 13 L3 11" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "scroll":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <rect x="3" y="3" width="10" height="10" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M5 6 H11 M5 8 H11 M5 10 H9" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case "mail":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <rect x="2" y="4" width="12" height="9" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M2 4 L8 10 L14 4" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "gear":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <circle cx="8" cy="8" r="3" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M8 1 V3 M8 13 V15 M1 8 H3 M13 8 H15 M3 3 L4.5 4.5 M11.5 11.5 L13 13 M3 13 L4.5 11.5 M11.5 4.5 L13 3"
            stroke={stroke}
            strokeWidth="1.2"
          />
        </svg>
      );
    case "heart":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path
            d="M2 6 V4 H4 V2 H6 V4 H10 V2 H12 V4 H14 V6 H14 V8 H12 V10 H10 V12 H8 V14 H8 V12 H6 V10 H4 V8 H2 Z"
            fill="currentColor"
          />
        </svg>
      );
    case "skull":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M4 3 H12 V10 H10 V13 H6 V10 H4 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <rect x="6" y="6" width="1" height="2" fill={stroke} />
          <rect x="9" y="6" width="1" height="2" fill={stroke} />
        </svg>
      );
    case "lock":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <rect x="3" y="7" width="10" height="7" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M5 7 V5 C5 3 6 2 8 2 C10 2 11 3 11 5 V7" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "folder":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M2 4 H6 L8 6 H14 V13 H2 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "send":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M2 8 L14 2 L11 14 L8 9 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "globe":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <circle cx="8" cy="8" r="6" fill="none" stroke={stroke} strokeWidth="1.5" />
          <ellipse cx="8" cy="8" rx="3" ry="6" fill="none" stroke={stroke} strokeWidth="1" />
          <path d="M2 8 H14" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case "speaker":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M2 6 H5 L9 3 V13 L5 10 H2 Z" fill="currentColor" />
          <path d="M11 5 C13 7 13 9 11 11" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "palette":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M8 2 C12 2 14 4 14 7 C14 9 12 9 11 9 H10 C9 9 9 10 10 11 C10 12 9 13 8 13 C5 13 2 11 2 7 C2 4 5 2 8 2 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "x":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M3 3 L13 13 M13 3 L3 13" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "minus":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M3 8 H13" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "resize":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <circle cx="6" cy="10" r="1" fill={stroke} />
          <circle cx="10" cy="10" r="1" fill={stroke} />
          <circle cx="10" cy="6" r="1" fill={stroke} />
          <circle cx="6" cy="14" r="1" fill={stroke} />
          <circle cx="10" cy="14" r="1" fill={stroke} />
          <circle cx="14" cy="10" r="1" fill={stroke} />
          <circle cx="14" cy="14" r="1" fill={stroke} />
          <circle cx="14" cy="6" r="1" fill={stroke} />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <rect x="2" y="2" width="12" height="12" fill="none" stroke={stroke} strokeWidth="1.5" />
          <rect x="4" y="6" width="2" height="6" fill={stroke} />
          <rect x="4" y="3" width="2" height="2" fill={stroke} />
          <rect x="8" y="6" width="2" height="6" fill={stroke} />
          <path d="M10 8 C10 7 11 6 12 6 C13 6 14 7 14 8 V12" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "twitter":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M3 3 L8 9 L3 13 H5 L9 10 L12 13 H14 L9 7 L13 3 H11 L8 6 L5 3 Z" fill="currentColor" />
        </svg>
      );
    case "doc":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M3 2 H10 L13 5 V14 H3 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M5 8 H11 M5 10 H11 M5 12 H9" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case "wrench":
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" shapeRendering="crispEdges" className={className}>
          <path d="M11 2 L14 5 L8 11 L5 8 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M5 8 L2 11 L5 14 L8 11" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
