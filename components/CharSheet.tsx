"use client";

import Image from "next/image";
import { CHAR_SHEET } from "@/data/portfolio";
import PixelIcon from "./PixelIcon";

type Props = {
  minimized: boolean;
  onMinimize: () => void;
  onExpand: () => void;
};

export default function CharSheet({ minimized, onMinimize, onExpand }: Props) {
  if (minimized) {
    return (
      <button
        onClick={onExpand}
        className="pixel-panel flex flex-col items-center justify-start gap-2 py-3 px-2 cursor-pointer hover:opacity-90 transition-opacity"
        style={{ width: 48, minHeight: 360 }}
        aria-label="Expand CHAR_SHEET"
      >
        <span style={{ color: "var(--panel-border)" }}>
          <PixelIcon name="resize" size={14} />
        </span>
        <span
          className="font-pixel text-[10px] tracking-[0.15em] mt-2"
          style={{
            color: "var(--header-bar)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          CHAR_SHEET
        </span>
      </button>
    );
  }

  return (
    <section className="pixel-panel flex flex-col">
      <header className="pixel-panel-header">
        <span>CHAR_SHEET_</span>
        <button onClick={onMinimize} aria-label="Minimize" className="hover:opacity-70">
          <PixelIcon name="minus" size={14} />
        </button>
      </header>

      <div className="p-5 sm:p-6 flex-1 overflow-auto">
        {/* Avatar block */}
        <div className="flex flex-col items-center text-center">
          <div
            className="border-2 p-1"
            style={{
              borderColor: "var(--panel-border)",
              background: "var(--panel-2)",
            }}
          >
            <Image
              src={CHAR_SHEET.avatar}
              alt={CHAR_SHEET.nameEn}
              width={64}
              height={64}
              style={{ imageRendering: "pixelated" }}
              priority
            />
          </div>
          <h2 className="font-pixel text-[12px] mt-4 tracking-[0.12em]">
            {CHAR_SHEET.nameEn}
          </h2>
          <p className="font-mono text-[16px] mt-1 opacity-80">{CHAR_SHEET.nameCn}</p>
          <p
            className="font-pixel text-[8px] mt-2 tracking-[0.15em]"
            style={{ color: "var(--text-muted)" }}
          >
            SYSTEM_ROLE · DESIGN ALCHEMIST
          </p>
        </div>

        <hr className="dotted-divider mt-5" />

        {/* STATS */}
        <h3 className="font-pixel text-[10px] tracking-[0.12em] mt-2 mb-3">STATS</h3>
        <ul className="space-y-2 font-mono text-[16px]">
          {CHAR_SHEET.stats.map((row) => (
            <li key={row.key} className="flex items-baseline justify-between gap-3">
              <span className="font-pixel text-[9px] tracking-[0.1em]">{row.key}</span>
              <span className="text-right opacity-90">{row.value}</span>
            </li>
          ))}
        </ul>

        <hr className="dotted-divider" />

        {/* INVENTORY */}
        <h3 className="font-pixel text-[10px] tracking-[0.12em] mt-2 mb-3">INVENTORY</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[16px]">
          {CHAR_SHEET.inventory.map((it) => (
            <li key={it.name} className="flex items-center gap-2">
              <span aria-hidden>{it.icon}</span>
              <span>{it.name}</span>
            </li>
          ))}
        </ul>

        <hr className="dotted-divider" />

        {/* CURRENT QUEST */}
        <h3 className="font-pixel text-[10px] tracking-[0.12em] mt-2 mb-2">
          CURRENT QUEST
        </h3>
        <p className="font-mono text-[16px] opacity-90 leading-snug">
          {CHAR_SHEET.currentQuest}
          <span className="blink" />
        </p>
      </div>

      <div
        className="self-end p-1 opacity-60"
        style={{ color: "var(--panel-border)" }}
        aria-hidden
      >
        <PixelIcon name="resize" size={14} />
      </div>
    </section>
  );
}
