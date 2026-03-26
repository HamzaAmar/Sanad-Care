/** biome-ignore-all lint/suspicious/noArrayIndexKey: I don't care */
"use client";

import Architecture from "./components/architecture";
import Avantage from "./components/avantage";
import CasUsage from "./components/cas-usage";
import Constat from "./components/constat";
import Cover from "./components/cover";
import Equipe from "./components/equipe";
import Fonctionnement from "./components/fonctionnement";
import Impact from "./components/impact";
import Insight from "./components/insight";
import Investissement from "./components/investissement";
import Marche from "./components/marche";
import ModeleEconomique from "./components/modele-economique";
import Roadmap from "./components/roadmap";
import Solution from "./components/solution";
import Valeur from "./components/valeur";
import Vision from "./components/vision";
import { SLIDES } from "./constants";
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
          <div className={`slide ${current === 0 ? "active" : ""}`}>
            <Cover />
          </div>
          <div className={`slide ${current === 1 ? "active" : ""}`}>
            <Constat />
          </div>
          <div className={`slide ${current === 2 ? "active" : ""}`}>
            <Impact />
          </div>
          <div className={`slide ${current === 3 ? "active" : ""}`}>
            <Insight />
          </div>
          <div className={`slide ${current === 4 ? "active" : ""}`}>
            <Solution />
          </div>
          <div className={`slide ${current === 5 ? "active" : ""}`}>
            <Fonctionnement />
          </div>
          <div className={`slide ${current === 6 ? "active" : ""}`}>
            <Architecture />
          </div>
          <div className={`slide ${current === 7 ? "active" : ""}`}>
            <CasUsage />
          </div>
          <div className={`slide ${current === 8 ? "active" : ""}`}>
            <Valeur />
          </div>
          <div className={`slide ${current === 9 ? "active" : ""}`}>
            <Marche />
          </div>
          <div className={`slide ${current === 10 ? "active" : ""}`}>
            <ModeleEconomique />
          </div>
          <div className={`slide ${current === 11 ? "active" : ""}`}>
            <Avantage />
          </div>
          <div className={`slide ${current === 12 ? "active" : ""}`}>
            <Equipe />
          </div>
          <div className={`slide ${current === 13 ? "active" : ""}`}>
            <Roadmap />
          </div>
          <div className={`slide ${current === 14 ? "active" : ""}`}>
            <Investissement />
          </div>
          <div className={`slide ${current === 15 ? "active" : ""}`}>
            <Vision />
          </div>
        </div>

        <NavigationButtons onPrev={goPrev} onNext={goNext} />
      </div>
    </div>
  );
}
