"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import CharSheet from "@/components/CharSheet";
import MissionLog from "@/components/MissionLog";
import ProjectFiles from "@/components/ProjectFiles";
import DataArchives from "@/components/DataArchives";
import EstablishComms from "@/components/EstablishComms";
import BottomNav from "@/components/BottomNav";
import OptionsModal from "@/components/OptionsModal";
import ResumeModal from "@/components/ResumeModal";
import { useTheme, useTab, useToggle } from "@/store/useUI";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const { tab, setTab } = useTab();
  const { on: charMin, setOn: setCharMin } = useToggle(false);
  const { on: optionsOpen, setOn: setOptionsOpen } = useToggle(false);
  const { on: resumeOpen, setOn: setResumeOpen } = useToggle(false);
  const [sound, setSound] = useState(true);
  const [mainClosed, setMainClosed] = useState(false);

  const renderMain = () => {
    if (mainClosed) {
      return (
        <button
          onClick={() => setMainClosed(false)}
          className="pixel-panel flex items-center justify-center w-full min-h-[300px] font-pixel text-[10px] tracking-[0.1em]"
        >
          [ REOPEN PANEL ]
        </button>
      );
    }
    const close = () => setMainClosed(true);
    if (tab === "about") return <MissionLog onClose={close} />;
    if (tab === "work") return <ProjectFiles onClose={close} />;
    if (tab === "writing") return <DataArchives onClose={close} />;
    return <EstablishComms onClose={close} onOpenResume={() => setResumeOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar
        onOpenOptions={() => setOptionsOpen(true)}
        onHardcoreClick={() => setTheme("arcade")}
      />

      <main className="flex-1 px-3 sm:px-6 py-5 sm:py-8 pb-28">
        <div
          className={`grid gap-4 ${
            charMin
              ? "grid-cols-[48px_1fr]"
              : "grid-cols-1 lg:grid-cols-[360px_1fr]"
          }`}
        >
          {/* Desktop / minimized rail */}
          <div className={charMin ? "" : "hidden lg:block"}>
            <CharSheet
              minimized={charMin}
              onMinimize={() => setCharMin(true)}
              onExpand={() => setCharMin(false)}
            />
          </div>
          {/* Mobile-only stacked CharSheet (when not minimized) */}
          {!charMin && (
            <div className="lg:hidden">
              <CharSheet
                minimized={false}
                onMinimize={() => setCharMin(true)}
                onExpand={() => setCharMin(false)}
              />
            </div>
          )}
          <div>{renderMain()}</div>
        </div>
      </main>

      <BottomNav current={tab} onChange={setTab} />

      <OptionsModal
        open={optionsOpen}
        theme={theme}
        sound={sound}
        onChangeTheme={setTheme}
        onToggleSound={() => setSound((v) => !v)}
        onClose={() => setOptionsOpen(false)}
      />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
