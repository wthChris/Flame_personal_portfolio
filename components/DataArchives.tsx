"use client";

import { WRITING } from "@/data/portfolio";
import Panel from "./Panel";
import PixelIcon from "./PixelIcon";

type Props = { onClose?: () => void };

export default function DataArchives({ onClose }: Props) {
  return (
    <Panel title="DATA_ARCHIVES_" onClose={onClose}>
      <div
        className="font-pixel text-[9px] tracking-[0.12em] flex items-center gap-2 mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        <PixelIcon name="doc" size={12} /> DATA LOGS
      </div>
      <h1 className="font-pixel text-[24px] sm:text-[28px]">Featured Writing</h1>
      <hr className="dotted-divider" />

      <ul className="mt-2 divide-y" style={{ borderColor: "var(--panel-border)" }}>
        {WRITING.posts.map((p, idx) => (
          <li
            key={idx}
            className="flex items-baseline gap-4 py-3 px-2 cursor-pointer transition-colors"
            style={{
              borderBottom:
                idx === WRITING.posts.length - 1
                  ? "none"
                  : "1px dashed var(--panel-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--panel-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--header-text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "";
            }}
          >
            <span className="font-mono text-[16px] opacity-80 w-[100px] shrink-0">
              {p.date}
            </span>
            <span className="font-mono text-[18px] flex-1">{p.title}</span>
            <span className="font-pixel text-[9px] tracking-[0.1em] hidden sm:inline">
              {p.minRead} ›
            </span>
          </li>
        ))}
      </ul>

      <p
        className="font-pixel text-[10px] tracking-[0.12em] text-center mt-6"
        style={{ color: "var(--text-muted)" }}
      >
        {WRITING.endLabel}
      </p>

      <div className="flex justify-center mt-4">
        <button className="pixel-btn pixel-btn-primary">{WRITING.ctaLabel}</button>
      </div>
    </Panel>
  );
}
