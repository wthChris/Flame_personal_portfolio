"use client";

import { ABOUT } from "@/data/portfolio";
import Panel from "./Panel";

type Props = { onClose?: () => void };

function renderRich(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-pixel text-[12px] tracking-[0.05em]">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function MissionLog({ onClose }: Props) {
  return (
    <Panel title="MISSION_LOG_" onClose={onClose}>
      <div
        className="font-pixel text-[9px] tracking-[0.12em] mb-2"
        style={{ color: "var(--text-muted)" }}
      >
        &gt;_ {ABOUT.briefingTag}
      </div>

      <h1
        className="font-pixel text-[22px] sm:text-[28px] leading-tight whitespace-pre-line"
        style={{ color: "var(--text)" }}
      >
        {ABOUT.title}
      </h1>

      <hr className="dotted-divider mt-4" />

      {/* Quote box */}
      <div
        className="border-2 mt-5 p-5 font-mono text-[18px] sm:text-[20px] leading-relaxed space-y-3"
        style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
      >
        <p className="italic">{ABOUT.quote}</p>
        {ABOUT.paragraphs.map((p, i) => (
          <p key={i}>{renderRich(p)}</p>
        ))}
      </div>

      {/* Skill tree */}
      <h2 className="font-pixel text-[12px] tracking-[0.1em] mt-8 mb-1">★ SKILL TREE</h2>
      <hr className="dotted-divider" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {ABOUT.skillTree.map((s) => (
          <div
            key={s.name}
            className="border-2 p-4 flex flex-col gap-2"
            style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-pixel text-[11px] tracking-[0.1em]">
                <span className="mr-2">{s.icon}</span>
                {s.name}
              </h3>
              <span className="badge">{s.badge}</span>
            </div>
            <p className="font-mono text-[16px] opacity-90 leading-snug">{s.desc}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
