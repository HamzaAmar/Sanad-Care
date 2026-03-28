"use client";

import PitchSlide from "./components/pitch-slide";
import { SLIDE_DEFS, SLIDES } from "./slide-data";
import Nav from "./core/nav";
import NavigationButtons from "./core/navigation-buttons";
import TopBar from "./core/top-bar";
import useSlideNavigation from "./core/useSlideNavigation";

export default function App() {
  const { current, total, navVisible, goTo, goNext, goPrev, toggleNav } = useSlideNavigation(SLIDES.length);

  return (
    <div className="app-shell">
      <Nav slides={SLIDES} current={current} visible={navVisible} onNavigate={goTo} />

      <div id="main">
        <TopBar current={current} total={total} onToggleNav={toggleNav} />

        <div id="slides-container">
          {SLIDE_DEFS.map((def, index) => (
            <div key={def.navTitle} className={`slide ${current === index ? "active" : ""}`}>
              <PitchSlide config={def} />
            </div>
          ))}
        </div>

        <NavigationButtons onPrev={goPrev} onNext={goNext} />
      </div>
    </div>
  );
}
