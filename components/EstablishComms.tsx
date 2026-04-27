"use client";

import { CONTACT } from "@/data/portfolio";
import Panel from "./Panel";
import PixelIcon from "./PixelIcon";

type Props = { onClose?: () => void; onOpenResume: () => void };

export default function EstablishComms({ onClose, onOpenResume }: Props) {
  return (
    <Panel title="C_" onClose={onClose}>
      <div
        className="font-pixel text-[9px] tracking-[0.12em] flex items-center gap-2 mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        <PixelIcon name="send" size={12} /> TRANSMISSION
      </div>
      <h1 className="font-pixel text-[24px] sm:text-[28px]">Establish Comms</h1>
      <hr className="dotted-divider" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        {/* SOCIAL_CHANNELS */}
        <div
          className="border-2 p-4 flex flex-col gap-3"
          style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
        >
          <div className="font-pixel text-[10px] tracking-[0.12em] flex items-center gap-2">
            <PixelIcon name="globe" size={12} /> SOCIAL_CHANNELS
          </div>
          <a
            href={`https://x.com/${CONTACT.social.x.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:opacity-80"
          >
            <PixelIcon name="twitter" size={16} />
            <div className="font-mono">
              <div className="font-pixel text-[9px] tracking-[0.12em]">X</div>
              <div className="text-[18px]">{CONTACT.social.x}</div>
            </div>
          </a>
          <a
            href={`https://www.linkedin.com/${CONTACT.social.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:opacity-80"
          >
            <PixelIcon name="linkedin" size={16} />
            <div className="font-mono">
              <div className="font-pixel text-[9px] tracking-[0.12em]">LINKEDIN</div>
              <div className="text-[18px]">{CONTACT.social.linkedin}</div>
            </div>
          </a>
        </div>

        {/* OPEN FOR QUESTS */}
        <div
          className="border-2 p-4 flex flex-col items-center justify-center gap-2 text-center"
          style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
        >
          <PixelIcon name="globe" size={28} />
          <div className="font-pixel text-[12px] tracking-[0.1em] mt-1">
            {CONTACT.open.title}
          </div>
          <p className="font-mono text-[16px] opacity-90 max-w-[260px]">
            {CONTACT.open.desc}
          </p>
        </div>

        {/* CAREER_LOG */}
        <button
          onClick={onOpenResume}
          className="border-2 p-4 flex items-center gap-4 text-left hover:opacity-90 transition-opacity"
          style={{
            borderColor: "var(--panel-border)",
            background: "var(--header-bar)",
            color: "var(--header-text)",
          }}
        >
          <PixelIcon name="doc" size={28} />
          <div>
            <div className="font-pixel text-[12px] tracking-[0.1em]">
              {CONTACT.career.title}
            </div>
            <div className="font-mono text-[16px] mt-1 opacity-90">
              {CONTACT.career.desc}
            </div>
          </div>
        </button>

        {/* QUICK_MESSAGE */}
        <div
          className="border-2 p-4 flex flex-col gap-3"
          style={{ borderColor: "var(--panel-border)", background: "var(--panel-2)" }}
        >
          <div className="font-pixel text-[10px] tracking-[0.12em]">
            {CONTACT.message.title}
          </div>
          <p className="font-mono text-[16px] opacity-90 text-center">
            {CONTACT.message.desc}
          </p>
          <a
            href={CONTACT.message.href}
            target="_blank"
            rel="noreferrer"
            className="pixel-btn pixel-btn-primary text-center"
          >
            {CONTACT.message.cta}
          </a>
        </div>
      </div>
    </Panel>
  );
}
