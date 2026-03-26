// src/hooks/useSlideNavigation.js
import { useCallback, useEffect, useState } from "react";

export default function useSlideNavigation(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const goTo = useCallback(
    (idx: number) => {
      if (idx >= 0 && idx < totalSlides) {
        setCurrent(idx);
      }
    },
    [totalSlides],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
  const toggleNav = useCallback(() => setNavVisible((v) => !v), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return {
    current,
    total: totalSlides,
    navVisible,
    goTo,
    goNext,
    goPrev,
    toggleNav,
  };
}
