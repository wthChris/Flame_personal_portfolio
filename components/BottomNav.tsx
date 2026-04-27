"use client";

import { TABS } from "@/data/portfolio";
import type { TabKey } from "@/data/portfolio";
import PixelIcon from "./PixelIcon";

type Props = {
  current: TabKey;
  onChange: (t: TabKey) => void;
};

export default function BottomNav({ current, onChange }: Props) {
  return (
    <nav className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none z-50">
      <div
        className="pointer-events-auto pixel-panel flex items-center gap-2 sm:gap-3 px-3 py-2"
        style={{
          background: "var(--header-bar)",
          color: "var(--header-text)",
          borderColor: "var(--panel-border)",
        }}
      >
        {TABS.map((t) => {
          const active = current === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 transition-colors ${
                active ? "tab-active" : ""
              }`}
              style={{
                color: active ? "var(--accent)" : "var(--header-text)",
              }}
              aria-label={t.label}
            >
              <PixelIcon name={t.icon} size={20} />
              <span className="font-pixel text-[8px] sm:text-[9px] tracking-[0.1em]">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
