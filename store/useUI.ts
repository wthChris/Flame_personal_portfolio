"use client";

import { useEffect, useState, useCallback } from "react";
import type { Theme, TabKey } from "@/data/portfolio";

const THEME_KEY = "portfolio-90s.theme";
const TAB_KEY = "portfolio-90s.tab";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("gameboy");

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (localStorage.getItem(THEME_KEY) as Theme | null)
      : null);
    if (stored && ["gameboy", "mint", "arcade"].includes(stored)) {
      setThemeState(stored);
      document.documentElement.dataset.theme = stored;
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {}
  }, []);

  return { theme, setTheme };
}

export function useTab() {
  const [tab, setTabState] = useState<TabKey>("about");

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (localStorage.getItem(TAB_KEY) as TabKey | null)
      : null);
    if (stored && ["about", "work", "writing", "contact"].includes(stored)) {
      setTabState(stored);
    }
  }, []);

  const setTab = useCallback((t: TabKey) => {
    setTabState(t);
    try {
      localStorage.setItem(TAB_KEY, t);
    } catch {}
  }, []);

  return { tab, setTab };
}

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  return { on, setOn, toggle };
}
