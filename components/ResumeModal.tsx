"use client";

import { useEffect } from "react";
import { RESUME } from "@/data/portfolio";
import PixelIcon from "./PixelIcon";

type Props = { open: boolean; onClose: () => void };

export default function ResumeModal({ open, onClose }: Props) {
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
        className="pixel-panel w-[820px] max-w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="pixel-panel-header">
          <span>RESUME_LOG_</span>
          <button onClick={onClose} aria-label="Close" className="hover:opacity-70">
            <PixelIcon name="x" size={14} />
          </button>
        </header>

        <div className="p-5 sm:p-7 overflow-auto">
          <div
            className="font-pixel text-[9px] tracking-[0.12em] flex items-center gap-2 mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            <PixelIcon name="doc" size={12} /> EXPERIENCE_LOG
          </div>
          <h1 className="font-pixel text-[24px] sm:text-[28px]">
            &gt; {RESUME.title}
          </h1>
          <p className="font-mono text-[18px] mt-2 opacity-90">{RESUME.subtitle}</p>
          <hr className="dotted-divider mt-3" />

          <div className="flex flex-col gap-4 mt-4">
            {RESUME.jobs.map((j, idx) => (
              <article
                key={idx}
                className="border-2 p-4"
                style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
              >
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-pixel text-[12px]">{j.role}</h3>
                    <div className="font-pixel text-[14px] tracking-[0.05em] mt-1">
                      {j.org}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[16px]">📅 {j.time}</div>
                    <div
                      className="font-pixel text-[9px] tracking-[0.1em] mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {j.loc}
                    </div>
                  </div>
                </header>
                <ul className="mt-3 space-y-1 font-mono text-[16px] list-disc pl-5">
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p
            className="font-pixel text-[10px] tracking-[0.12em] text-center mt-5"
            style={{ color: "var(--text-muted)" }}
          >
            {RESUME.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
