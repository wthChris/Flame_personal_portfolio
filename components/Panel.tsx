"use client";

import { ReactNode } from "react";
import PixelIcon from "./PixelIcon";

type Props = {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  className?: string;
};

export default function Panel({ title, children, onClose, onMinimize, className = "" }: Props) {
  return (
    <section className={`pixel-panel flex flex-col ${className}`}>
      <header className="pixel-panel-header">
        <span>{title}</span>
        <span className="flex items-center gap-2">
          {onMinimize && (
            <button onClick={onMinimize} aria-label="Minimize" className="hover:opacity-70">
              <PixelIcon name="minus" size={14} />
            </button>
          )}
          {onClose && (
            <button onClick={onClose} aria-label="Close" className="hover:opacity-70">
              <PixelIcon name="x" size={14} />
            </button>
          )}
        </span>
      </header>
      <div className="flex-1 overflow-auto p-5 sm:p-6">{children}</div>
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
