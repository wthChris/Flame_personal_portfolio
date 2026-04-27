"use client";

import { WORK } from "@/data/portfolio";
import Panel from "./Panel";
import PixelIcon from "./PixelIcon";

type Props = { onClose?: () => void };

export default function ProjectFiles({ onClose }: Props) {
  return (
    <Panel title="PROJECT_FILES_" onClose={onClose}>
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <div
          className="font-pixel text-[9px] tracking-[0.12em] flex items-center gap-2"
          style={{ color: "var(--text-muted)" }}
        >
          <PixelIcon name="folder" size={12} /> FILE_MANAGER
        </div>
      </div>

      <div className="flex items-end justify-between mb-3">
        <h1 className="font-pixel text-[24px] sm:text-[28px]">Work Files</h1>
        <span
          className="font-pixel text-[9px] tracking-[0.12em] hidden sm:inline"
          style={{ color: "var(--text-muted)" }}
        >
          {WORK.rootPath}
        </span>
      </div>
      <hr className="dotted-divider" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {WORK.files.map((f) => (
          <article
            key={f.slug}
            className="border-2 p-4 flex flex-col gap-2"
            style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
          >
            <header className="flex items-center justify-between font-pixel text-[10px] tracking-[0.1em]">
              <span className="flex items-center gap-2">
                <PixelIcon name="lock" size={11} /> {f.slug}
              </span>
              <span style={{ color: "var(--text-muted)" }}>{f.size}</span>
            </header>
            <hr className="dotted-divider" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-pixel text-[12px] tracking-[0.05em]">{f.title}</h3>
              {f.star && <span className="badge badge-star">STAR</span>}
            </div>
            <p className="font-mono text-[16px] opacity-90 leading-snug">{f.desc}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {f.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p
        className="font-pixel text-[9px] tracking-[0.12em] text-center mt-4"
        style={{ color: "var(--text-muted)" }}
      >
        {WORK.files.length} FILES FOUND. 0 HIDDEN.
      </p>
    </Panel>
  );
}
