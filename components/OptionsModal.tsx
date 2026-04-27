"use client";

import { useEffect } from "react";
import type { Theme } from "@/data/portfolio";
import PixelIcon from "./PixelIcon";

type Props = {
  open: boolean;
  theme: Theme;
  sound: boolean;
  onChangeTheme: (t: Theme) => void;
  onToggleSound: () => void;
  onClose: () => void;
};

const OPTIONS: { key: Theme; label: string }[] = [
  { key: "gameboy", label: "GAMEBOY GREEN" },
  { key: "mint", label: "FUTURE MINT" },
  { key: "arcade", label: "ARCADE NIGHT" },
];

export default function OptionsModal({
  open,
  theme,
  sound,
  onChangeTheme,
  onToggleSound,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="pixel-panel w-[320px] max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="pixel-panel-header">
          <span>OPTIONS</span>
          <button onClick={onClose} aria-label="Close" className="hover:opacity-70">
            <PixelIcon name="x" size={14} />
          </button>
        </header>

        <div className="p-4 flex flex-col gap-4">
          {/* Theme */}
          <div>
            <div
              className="font-pixel text-[10px] tracking-[0.12em] flex items-center gap-2 pb-2 mb-2"
              style={{ borderBottom: "1px dashed var(--panel-border)" }}
            >
              <PixelIcon name="palette" size={12} /> THEME SELECT
            </div>
            <div className="flex flex-col gap-2">
              {OPTIONS.map((o) => {
                const active = theme === o.key;
                return (
                  <button
                    key={o.key}
                    onClick={() => onChangeTheme(o.key)}
                    className="border-2 px-3 py-2 font-pixel text-[10px] tracking-[0.1em] flex items-center justify-between"
                    style={{
                      borderColor: "var(--panel-border)",
                      background: active ? "var(--lives-red)" : "var(--panel)",
                      color: active ? "#fff" : "var(--text)",
                    }}
                  >
                    <span>{o.label}</span>
                    {active && <span>●</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Audio */}
          <div>
            <div
              className="font-pixel text-[10px] tracking-[0.12em] pb-2 mb-2"
              style={{ borderBottom: "1px dashed var(--panel-border)" }}
            >
              AUDIO
            </div>
            <button
              onClick={onToggleSound}
              className="border-2 px-3 py-2 w-full flex items-center justify-between font-pixel text-[10px] tracking-[0.1em]"
              style={{
                borderColor: "var(--panel-border)",
                background: "var(--header-bar)",
                color: "var(--header-text)",
              }}
            >
              <span>SOUND: {sound ? "ON" : "OFF"}</span>
              <PixelIcon name="speaker" size={14} />
            </button>
          </div>

          <button onClick={onClose} className="pixel-btn pixel-btn-primary mt-2">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}
