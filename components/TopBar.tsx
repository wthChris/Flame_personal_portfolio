"use client";

import { HUD } from "@/data/portfolio";
import PixelIcon from "./PixelIcon";

type Props = {
  onOpenOptions: () => void;
  onHardcoreClick: () => void;
};

export default function TopBar({ onOpenOptions, onHardcoreClick }: Props) {
  return (
    <header
      className="w-full font-pixel text-[10px] tracking-[0.1em] flex items-center justify-between px-3 sm:px-6 py-3 border-b-2"
      style={{
        background: "var(--topbar-bg)",
        color: "var(--topbar-text)",
        borderColor: "var(--topbar-bg)",
      }}
    >
      {/* Left: SCORE + LEVEL */}
      <div className="flex items-center gap-4 sm:gap-8 shrink-0">
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--topbar-text)" }}>SCORE:</span>
          <span style={{ color: "var(--score-green)" }}>{HUD.score.toLocaleString()}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>LEVEL:</span>
          <span style={{ color: "var(--score-green)" }}>{HUD.level}</span>
        </div>
      </div>

      {/* Center: HARDCORE MODE */}
      <button
        onClick={onHardcoreClick}
        className="hidden md:flex items-center gap-2 px-4 py-2 border-2 hover:opacity-80 transition-opacity"
        style={{ borderColor: "var(--topbar-text)" }}
        title="Switch to ARCADE NIGHT theme"
      >
        <PixelIcon name="skull" size={12} />
        <span>{HUD.hardcoreLabel}</span>
      </button>

      {/* Right: SYS.ONLINE + LIVES + Settings */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <div className="hidden sm:flex items-center gap-2">
          <span style={{ color: "var(--score-green)" }}>●</span>
          <span>{HUD.sysLabel}</span>
          <span style={{ color: "var(--score-green)" }}>|</span>
        </div>
        <div className="flex items-center gap-1">
          <span>LIVES:</span>
          <span className="flex gap-0.5">
            {Array.from({ length: HUD.lives }).map((_, i) => (
              <span key={i} className="heart heart-beat" style={{ animationDelay: `${i * 0.15}s` }}>
                <PixelIcon name="heart" size={14} />
              </span>
            ))}
          </span>
        </div>
        <button
          onClick={onOpenOptions}
          className="hover:opacity-80 transition-opacity"
          aria-label="Options"
        >
          <PixelIcon name="gear" size={18} />
        </button>
      </div>
    </header>
  );
}
