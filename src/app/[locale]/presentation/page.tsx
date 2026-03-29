// /** biome-ignore-all lint/suspicious/noArrayIndexKey: static slide blocks, order is the key */

// "use client";

// import { Flex, Grid, Paper, Separator, Text } from "@pillar-ui/core";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ChartArrows,
//   ChartLine,
//   CircuitBulb,
//   Close,
//   Heart,
//   Hospital,
//   Menu,
//   Mobile,
//   Old,
//   Plane,
//   Robot,
//   Target,
//   Trophy,
// } from "@pillar-ui/icons";

// import type { CSSProperties, ReactNode } from "react";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import Logo from "@/app/logo";
// import SmallLogo from "./components/logo";
// import Card from "./core/card";
// import { PitchIcon } from "./core/pitch-icons";
// import RevenueCard from "./core/revenue-card";

// /** Animation wrapper — only sets stagger index for CSS */
// function Reveal({ i, className = "", children }: { i: number; className?: string; children: ReactNode }) {
//   return (
//     <div className={`reveal ${className}`.trim()} style={{ "--reveal-i": i } as CSSProperties}>
//       {children}
//     </div>
//   );
// }

// /** Sidebar labels, same order as slides below */
// const NAV = [
//   { chapter: "Introduction", title: "Introduction" },
//   { chapter: "Problème", title: "Le problème" },
//   { chapter: "Solution", title: "Notre solution" },
//   { chapter: "Marché", title: "Marché" },
//   { chapter: "Business model", title: "Business model" },
//   { chapter: "Exécution", title: "Équipe" },
//   { chapter: "Exécution", title: "Go to market" },
//   { chapter: "Clôture", title: "Concurrence" },
//   { chapter: "Clôture", title: "Roadmap" },
// ] as const;

// export default function PresentationPage() {
//   const total = NAV.length;
//   const [current, setCurrent] = useState(0);
//   const [navVisible, setNavVisible] = useState(true);

//   const goTo = useCallback(
//     (idx: number) => {
//       if (idx >= 0 && idx < total) setCurrent(idx);
//     },
//     [total],
//   );
//   const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
//   const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
//   const toggleNav = useCallback(() => setNavVisible((v) => !v), []);

//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
//       if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [goNext, goPrev]);

//   const chapters = useMemo(() => {
//     const map = new Map<string, { index: number; title: string }[]>();
//     NAV.forEach((s, i) => {
//       let items = map.get(s.chapter);
//       if (!items) {
//         items = [];
//         map.set(s.chapter, items);
//       }
//       items.push({ index: i, title: s.title });
//     });
//     return map;
//   }, []);

//   const slide = (i: number) => (current === i ? "slide active" : "slide");

//   return (
//     <div className="app-shell">
//       <nav id="nav" className={navVisible ? "" : "hidden"}>
//         <div className="nav-logo">
//           <Logo width={120} />
//         </div>
//         <div id="chapter-nav">
//           {[...chapters.entries()].map(([chapter, items]) => (
//             <div className="chapter-group" key={chapter}>
//               <div className="chapter-label">{chapter}</div>
//               {items.map((item) => (
//                 <button
//                   type="button"
//                   key={item.index}
//                   className={`nav-item ${item.index === current ? "active" : ""}`}
//                   onClick={() => goTo(item.index)}
//                 >
//                   <span className="nav-dot" />
//                   {item.title}
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </nav>

//       <div id="main">
//         <div id="topbar">
//           <button type="button" id="toggle-nav" onClick={toggleNav}>
//             <Flex as="span" gap="2" items="center">
//               <Menu width={18} height={18} strokeWidth={1.35} aria-hidden />
//               <Text size="2">Menu</Text>
//             </Flex>
//           </button>
//           <div id="slide-counter">
//             <span>{current + 1}</span> / <span>{total}</span>
//           </div>
//         </div>

//         <div id="slides-container">
//           <div className={slide(0)}>
//             <div className="slide-inner pitch-slide pitch-slide--cover">
//               <div className="accent-glow accent-glow--lg" />
//               <div className="accent-glow accent-glow--secondary" />
//               <Reveal i={0}>
//                 <div className="cover-badge cover-badge--pulse">Conference deck · Maroc</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <Flex items="center" gap="5" as="h1" className="cover-title-h1">
//                   <SmallLogo width="100" />
//                   SANAD <span className="accent">CARE</span>
//                 </Flex>
//               </Reveal>
//               <Reveal i={2}>
//                 <p className="cover-tagline cover-tagline--hero">
//                   Transformer les soins à domicile en système de santé structuré
//                 </p>
//               </Reveal>
//             </div>
//           </div>

//           <div className={slide(1)}>
//             <div className="slide-inner pitch-slide pitch-slide--content">
//               <Paper flow='6' className="accent-glow" />
//               <Reveal i={0}>
//                 <div className="eyebrow">Le problème n’est pas l’absence de soins</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <h2 className="pitch-heading">Le problème</h2>
//               </Reveal>
//               <Reveal i={3}>
//                 <Flex gap='2' direction="col">
//                   <Paper as={Flex} gap='2' background="B1" border p='4' corner='3'>
//                     <Close width={24} strokeWidth='2' stroke="red" />
//                     <Text size='4' color='b' low>Des interventions ponctuelles.</Text>
//                   </Paper>
//                   <Paper as={Flex} gap='2' background="B1" border p='4' corner='3'>
//                    <Close width={24} strokeWidth='2' stroke="red" />
//                     <Text size='4' color='b' low>Protocoles existants, mais peu appliqués.</Text>
//                   </Paper>
//                   <Paper as={Flex} gap='2' background="B1" border p='4' corner='3'>
//                    <Close width={24} strokeWidth='2' stroke="red" />
//                     <Text size='4' color='b' low>Pas de suivi continu.</Text>
//                   </Paper>
//                   <Paper  as={Flex} gap='2'background="B1" border p='4' corner='3'>
//                    <Close width={24} strokeWidth='2' stroke="red" />
//                     <Text size='4' color='b' low>Manque de coordination.</Text>
//                   </Paper>
//                 </Flex>
//               </Reveal>
//             </div>
//           </div>

//           <div className={slide(2)}>
//             <div className="slide-inner pitch-slide pitch-slide--content">
//               <div className="accent-glow" />
//               <Reveal i={0}>
//                 <div className="eyebrow">Solution</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <h2 className="pitch-heading">Notre solution</h2>
//               </Reveal>
//               <Reveal i={2}>
//                 <Separator />
//               </Reveal>
//               <Reveal i={3}>
//                 <p className="pitch-prose">Sanad Care structure les soins à domicile.</p>
//               </Reveal>
//               <Reveal i={4}>
//                 <p className="pitch-prose">
//                   Nous ne proposons pas seulement une visite infirmière — nous mettons en place un système complet de
//                   prise en charge.
//                 </p>
//               </Reveal>
//               <Reveal i={5}>
//                 <Grid gap='3' cols={{default:'1fr 1fr 1fr'}} >
//                   <Card
//                     icon={<PitchIcon id="clipboard" size={24} />}
//                     title="Protocoles"
//                     body="Standards homogènes pour chaque parcours."
//                   />
//                   <Card
//                     icon={<PitchIcon id="chartLine" size={24} />}
//                     title="Suivi continu"
//                     body="Visibilité sur l’évolution du patient."
//                   />
//                   <Card
//                     icon={<PitchIcon id="users" size={24} />}
//                     title="Coordination"
//                     body="Infirmiers, médecins et familles alignés."
//                   />
//                   <Card
//                     icon={<PitchIcon id="listCheck" size={24} />}
//                     title="Traçabilité"
//                     body="Chaque acte documenté, exploitable."
//                   />
//                   <Card
//                     icon={<PitchIcon id="bell" size={24} />}
//                     title="Alertes"
//                     body="Signaux précoces à partir des données."
//                   />
//                   <Card
//                     icon={<Text  size='4' color='su' low>IA</Text>}
//                     title="Intelligence artificielle"
//                     body="Analyse des données et détection précoce des risques."
//                   />
//                 </Grid>
//               </Reveal>
//               <Reveal i={6}>
//                 <p className="pitch-prose">Nous faisons passer le soin d’un acte isolé à un parcours organisé.</p>
//               </Reveal>
//             </div>
//           </div>

//           {/* 7 — Business model */}
//           <div className={slide(3)}>
//             <div className="slide-inner pitch-slide pitch-slide--content">
//               <div className="accent-glow" />
//               <Reveal i={0}>
//                 <div className="eyebrow">Marché</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <h2 className="pitch-heading">Business Model</h2>
//               </Reveal>
//               <Reveal i={2}>
//                 <Separator />
//               </Reveal>
//               <Reveal i={3}>
//                 <p className="pitch-prose">Notre modèle économique repose sur trois sources de revenus :</p>
//               </Reveal>
//               <Reveal i={4}>
//                 <div className="revenue-row revenue-row--pitch">
//                   <RevenueCard
//                     icon={<PitchIcon id="home" size={28} />}
//                     title="Abonnement B2C"
//                     subtitle="Mensuel pour les familles, accès au suivi structuré."
//                     badge="Récurrent"
//                   />
//                   <RevenueCard
//                     icon={<PitchIcon id="cash" size={28} />}
//                     title="Commission"
//                     subtitle="Par service ou intervention réalisée sur la plateforme."
//                     badge="À l’acte"
//                   />
//                   <RevenueCard
//                     icon={<PitchIcon id="building" size={28} />}
//                     title="Partenariats"
//                     subtitle="Cliniques, assurances, associations — B2B / B2C."
//                     badge="Scale"
//                   />
//                 </div>
//               </Reveal>
//               <Reveal i={5}>
//                 <p className="pitch-prose">Un modèle simple, progressif et adapté au marché.</p>
//               </Reveal>
//             </div>
//           </div>

//           <div className={slide(4)}>
//             <div className="slide-inner pitch-slide pitch-slide--content">
//               <div className="accent-glow" />
//               <Reveal i={0}>
//                 <div className="eyebrow">Marché</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <h2 className="pitch-heading">Clients cibles</h2>
//               </Reveal>
//               <Reveal i={2}>
//                 <Separator />
//               </Reveal>
//               <Reveal i={3}>
//                 <p className="pitch-prose">Nos clients prioritaires sont :</p>
//               </Reveal>
//               <Reveal i={4}>
//                 <Paper>
//                   les familles avec patients chroniques à domicile
//                   </Paper>
//                 <Paper>
//                   les patients post-hospitalisation
//                 </Paper>
//                 <Paper>
//                   les personnes âgées vivant à domicile
//                 </Paper>
//                 <Paper>
//                   les patients à risque : diabète, hypertension, insuffisance rénale, plaies chroniques
//                 </Paper>
//               </Reveal>
//               <Reveal i={5}>
//                 <p className="pitch-prose">Nous ciblons les situations où le manque de suivi a un impact direct sur la santé.</p>
//               </Reveal>
//             </div>
//           </div>

//           {/* 5 — Équipe */}
//           <div className={slide(5)}>
//             <div className="slide-inner pitch-slide pitch-slide--content">
//               <div className="accent-glow" />
//               <Reveal i={0}>
//                 <div className="eyebrow">Exécution</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <h2 className="pitch-heading">Équipe</h2>
//               </Reveal>
//               <Reveal i={2}>
//                 <Separator />
//               </Reveal>
//               <Reveal i={3}>
//                 <p className="pitch-prose">Notre équipe réunit :</p>
//               </Reveal>
//               <Reveal i={4}>
//                 <div className="pitch-card-grid">
//                   <Card
//                     icon={<PitchIcon id="stethoscope" size={24} />}
//                     title="Terrain infirmier"
//                     body="Expérience directe des soins chroniques et du domicile."
//                   />
//                   <Card
//                     icon={<PitchIcon id="settings" size={24} />}
//                     title="Tech & gestion"
//                     body="Produit, structuration des partenariats et exécution."
//                   />
//                 </div>
//               </Reveal>
//               <Reveal i={5}>
//                 <p className="pitch-prose">
//                   Une équipe qui connaît le problème de terrain et sait le transformer en solution concrète.
//                 </p>
//               </Reveal>
//             </div>
//           </div>

//           {/* 6 — Go to Market*/}
//           <div className={slide(6)}>
//             <div className="slide-inner pitch-slide pitch-slide--closing">
//               <div className="accent-glow accent-glow--lg" style={{ bottom: "-40%", left: "-20%" }} />
//               <Reveal i={0}>
//                 <div className="eyebrow">Phrase de clôture à retenir</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <div className="vision-quote vision-quote--closing">
//                   <p className="closing-verse">Le problème n’est pas de soigner à domicile.</p>
//                   <p className="closing-verse">Le problème est de soigner à domicile sans système.</p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//           {/* 7 — Go to Concerence*/}

//         <div className={slide(7)}>
//             <div className="slide-inner pitch-slide pitch-slide--closing">
//               <div className="accent-glow accent-glow--lg" style={{ bottom: "-40%", left: "-20%" }} />
//               <Reveal i={0}>
//                 <div className="eyebrow">Phrase de clôture à retenir</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <div className="vision-quote vision-quote--closing">
//                   <p className="closing-verse">Le problème n’est pas de soigner à domicile.</p>
//                   <p className="closing-verse">Le problème est de soigner à domicile sans système.</p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//    {/* 7 — Go to RoadMap*/}

//    <div className={slide(8)}>
//             <div className="slide-inner pitch-slide pitch-slide--closing">
//               <div className="accent-glow accent-glow--lg" style={{ bottom: "-40%", left: "-20%" }} />
//               <Reveal i={0}>
//                 <div className="eyebrow">Phrase de clôture à retenir</div>
//               </Reveal>
//               <Reveal i={1}>
//                 <div className="vision-quote vision-quote--closing">
//                   <p className="closing-verse">Le problème n’est pas de soigner à domicile.</p>
//                   <p className="closing-verse">Le problème est de soigner à domicile sans système.</p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         <button type="button" id="prev-btn" onClick={goPrev} aria-label="Slide précédente">
//           <ArrowLeft width={20} height={20} strokeWidth={1.35} aria-hidden />
//         </button>
//         <button type="button" id="next-btn" onClick={goNext} aria-label="Slide suivante">
//           <ArrowRight width={20} height={20} strokeWidth={1.35} aria-hidden />
//         </button>
//       </div>
//     </div>
//   );
// }

/** biome-ignore-all lint/suspicious/noArrayIndexKey: static slide blocks, order is the key */

"use client";

import { Flex, Grid, Paper, Separator, Text } from "@pillar-ui/core";
import {
  ArrowLeft,
  ArrowRight,
  ChartArrows,
  ChartLine,
  CircuitBulb,
  Close,
  Envelop,
  Hospital,
  Menu,
  Mobile,
  Old,
  Plane,
  Robot,
  Target,
  Trophy,
} from "@pillar-ui/icons";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "@/app/logo";
import Card from "./core/card";
import { PitchIcon } from "./core/pitch-icons";
import RevenueCard from "./core/revenue-card";
import SmallLogo from "./core/smallLogo";

/* ─── Animation wrapper ─── */
function Reveal({ i, className = "", children }: { i: number; className?: string; children: ReactNode }) {
  return (
    <div className={`reveal ${className}`.trim()} style={{ "--reveal-i": i } as CSSProperties}>
      {children}
    </div>
  );
}

/* ─── Sidebar navigation ─── */
const NAV = [
  { chapter: "Introduction", title: "Introduction" },
  { chapter: "Problème", title: "Le problème" },
  { chapter: "Solution", title: "Notre solution" },
  { chapter: "Intelligence artificielle", title: "IA & Suivi santé" },
  { chapter: "Marché", title: "Opportunité de marché" },
  { chapter: "Business model", title: "Business model" },
  { chapter: "Exécution", title: "Équipe" },
  { chapter: "Exécution", title: "Go to market" },
  { chapter: "Clôture", title: "Concurrence" },
  { chapter: "Clôture", title: "Roadmap & Demande" },
  { chapter: "Clôture", title: "Merci" },
] as const;

export default function PresentationPage() {
  const total = NAV.length;
  const [current, setCurrent] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const goTo = useCallback(
    (idx: number) => {
      if (idx >= 0 && idx < total) setCurrent(idx);
    },
    [total],
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

  const chapters = useMemo(() => {
    const map = new Map<string, { index: number; title: string }[]>();
    NAV.forEach((s, i) => {
      let items = map.get(s.chapter);
      if (!items) {
        items = [];
        map.set(s.chapter, items);
      }
      items.push({ index: i, title: s.title });
    });
    return map;
  }, []);

  const slide = (i: number) => (current === i ? "slide active" : "slide");

  return (
    <div className="app-shell">
      {/* ━━━ SIDEBAR NAV ━━━ */}
      <nav id="nav" className={navVisible ? "" : "hidden"}>
        <div className="nav-logo">
          <Logo width={120} />
        </div>
        <div id="chapter-nav">
          {[...chapters.entries()].map(([chapter, items]) => (
            <div className="chapter-group" key={chapter}>
              <div className="chapter-label">{chapter}</div>
              {items.map((item) => (
                <button
                  type="button"
                  key={item.index}
                  className={`nav-item ${item.index === current ? "active" : ""}`}
                  onClick={() => goTo(item.index)}
                >
                  <span className="nav-dot" />
                  {item.title}
                </button>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* ━━━ MAIN AREA ━━━ */}
      <div id="main">
        <div id="topbar">
          <button type="button" id="toggle-nav" onClick={toggleNav}>
            <Flex as="span" gap="2" items="center">
              <Menu width={18} height={18} strokeWidth={1.35} aria-hidden />
              <Text size="2">Menu</Text>
            </Flex>
          </button>
          <div id="slide-counter">
            <span>{current + 1}</span> / <span>{total}</span>
          </div>
        </div>

        {/* ━━━ ALL SLIDES INSIDE THIS CONTAINER ━━━ */}
        <div id="slides-container">
          {/* ── 0 · COVER ── */}
          <div className={slide(0)}>
            <div className="slide-inner pitch-slide pitch-slide--cover">
              <div className="accent-glow accent-glow--lg" />
              <div className="accent-glow accent-glow--secondary" />
              <Reveal i={0}>
                <div className="cover-badge cover-badge--pulse">Pitch Deck · Marrakech, Maroc</div>
              </Reveal>
              <Reveal i={1}>
                <Flex items="center" gap="5" as="h1" className="cover-title-h1">
                  <SmallLogo width={72} strokeWidth={1.35} className="pitch-icon-svg" aria-hidden />
                  SANAD <span className="accent">CARE</span>
                </Flex>
              </Reveal>
              <Reveal i={2}>
                <p className="cover-tagline cover-tagline--hero">
                  Soins infirmiers à domicile 24/7 — propulsés par l'intelligence artificielle
                </p>
              </Reveal>
              <Reveal i={3}>
                <p className="pitch-prose" style={{ opacity: 0.7 }}>
                  Soins aux personnes âgées · Récupération post-opératoire · Tourisme médical
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── 1 · LE PROBLÈME ── */}
          <div className={slide(1)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Ce n'est pas l'absence de soins — c'est l'absence de système</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Le problème</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Flex gap="2" direction="col">
                  <Paper as={Flex} gap="2" background="B1" border p="4" corner="3">
                    <Close width={24} strokeWidth="2" stroke="red" />
                    <Text size="4" color="b" low>
                      <strong>2,5 millions</strong> de Marocains de +65 ans sans suivi structuré à domicile.
                    </Text>
                  </Paper>
                  <Paper as={Flex} gap="2" background="B1" border p="4" corner="3">
                    <Close width={24} strokeWidth="2" stroke="red" />
                    <Text size="4" color="b" low>
                      Des interventions <strong>ponctuelles</strong>, sans continuité ni coordination.
                    </Text>
                  </Paper>
                  <Paper as={Flex} gap="2" background="B1" border p="4" corner="3">
                    <Close width={24} strokeWidth="2" stroke="red" />
                    <Text size="4" color="b" low>
                      Aucune <strong>traçabilité</strong> : pas de données, pas d'alertes, pas de prévention.
                    </Text>
                  </Paper>
                  <Paper as={Flex} gap="2" background="B1" border p="4" corner="3">
                    <Close width={24} strokeWidth="2" stroke="red" />
                    <Text size="4" color="b" low>
                      Les familles sont <strong>seules</strong> face à des décisions médicales complexes.
                    </Text>
                  </Paper>
                  <Paper as={Flex} gap="2" background="B1" border p="4" corner="3">
                    <Close width={24} strokeWidth="2" stroke="red" />
                    <Text size="4" color="b" low>
                      Tourisme médical en <strong>croissance</strong>, mais zéro suivi post-opératoire à domicile.
                    </Text>
                  </Paper>
                </Flex>
              </Reveal>
              <Reveal i={4}>
                <Paper background="B2" border p="5" corner="3">
                  <Flex gap="3" items="start">
                    <CircuitBulb width={28} height={28} strokeWidth={1.35} aria-hidden style={{ flexShrink: 0 }} />
                    <Text size="5" weight="7" color="p" low>
                      Résultat : 30% des réhospitalisations au Maroc sont évitables avec un suivi structuré à domicile.
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 2 · NOTRE SOLUTION ── */}
          <div className={slide(2)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Pas juste une visite — un système complet</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Notre solution</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <p className="pitch-prose">
                  Sanad Care structure les soins à domicile en un{" "}
                  <strong>parcours intelligent, continu et coordonné</strong>.
                </p>
              </Reveal>
              <Reveal i={4}>
                <Grid gap="3" cols={{ default: "1fr 1fr 1fr" }}>
                  <Card
                    icon={<PitchIcon id="clipboard" size={24} />}
                    title="Protocoles standardisés"
                    body="Chaque pathologie suit un parcours validé : diabète, plaies, post-chirurgie..."
                  />
                  <Card
                    icon={<PitchIcon id="chartLine" size={24} />}
                    title="Suivi continu 24/7"
                    body="Données collectées à chaque visite, accessibles en temps réel aux familles et médecins."
                  />
                  <Card
                    icon={<PitchIcon id="users" size={24} />}
                    title="Coordination complète"
                    body="Infirmiers, médecins traitants et familles sur une même plateforme."
                  />
                  <Card
                    icon={<PitchIcon id="listCheck" size={24} />}
                    title="Traçabilité totale"
                    body="Chaque acte documenté, chaque donnée exploitable, chaque décision justifiée."
                  />
                  <Card
                    icon={<PitchIcon id="bell" size={24} />}
                    title="Alertes intelligentes"
                    body="Détection précoce d'anomalies : tension, glycémie, température, poids..."
                  />
                  <Card
                    icon={<Robot width={24} height={24} strokeWidth={1.35} className="pitch-icon-svg" aria-hidden />}
                    title="IA prédictive"
                    body="L'intelligence artificielle analyse les tendances et prédit les risques avant qu'ils ne deviennent des urgences."
                  />
                </Grid>
              </Reveal>
              <Reveal i={5}>
                <Paper background="B2" border p="5" corner="3">
                  <Text size="5" weight="7" color="p" low>
                    Nous faisons passer le soin d'un acte isolé → à un parcours organisé et intelligent.
                  </Text>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 3 · IA & SUIVI SANTÉ ── */}
          <div className={slide(3)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">L'avantage technologique qui change tout</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Intelligence artificielle & suivi santé</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <p className="pitch-prose">
                  Notre IA n'est pas un gadget — c'est le <strong>cœur du système</strong> qui rend le suivi à domicile
                  aussi fiable qu'un suivi hospitalier.
                </p>
              </Reveal>
              <Reveal i={4}>
                <Grid gap="3" cols={{ default: "1fr 1fr" }}>
                  <Card
                    icon={<PitchIcon id="chartLine" size={24} />}
                    title="Analyse prédictive"
                    body="L'IA détecte les dégradations 48-72h avant qu'elles deviennent des urgences. Tension qui dérive ? Glycémie instable ? Alerte automatique."
                  />
                  <Card
                    icon={<PitchIcon id="clipboard" size={24} />}
                    title="Rapports automatiques"
                    body="Génération de rapports santé personnalisés pour les familles et les médecins traitants — en arabe, français et anglais."
                  />
                  <Card
                    icon={<PitchIcon id="bell" size={24} />}
                    title="Score de risque patient"
                    body="Chaque patient reçoit un score de risque dynamique. Plus le score monte, plus le suivi s'intensifie automatiquement."
                  />
                  <Card
                    icon={<PitchIcon id="users" size={24} />}
                    title="Recommandations soignantes"
                    body="L'IA suggère aux infirmiers les actes prioritaires, les examens à demander, les alertes à communiquer au médecin."
                  />
                </Grid>
              </Reveal>
              <Reveal i={5}>
                <Paper background="B2" border p="5" corner="3">
                  <Flex direction="col" gap="2">
                    <Flex gap="2" items="center">
                      <ChartLine width={24} height={24} strokeWidth={1.35} aria-hidden />
                      <Text size="5" weight="7" color="p" low>
                        Résultat attendu
                      </Text>
                    </Flex>
                    <Text size="4" color="b" low>
                      Réduction de <strong>40%</strong> des hospitalisations évitables · Familles{" "}
                      <strong>informées en temps réel</strong> · Médecins avec des <strong>données exploitables</strong>
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 4 · OPPORTUNITÉ DE MARCHÉ ── */}
          <div className={slide(4)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Un marché massif et sous-exploité</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Opportunité de marché</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Grid gap="4" cols={{ default: "1fr 1fr 1fr" }}>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="8" weight="7" color="p">
                        $2.4B
                      </Text>
                      <Text size="3" color="b" low>
                        TAM — Soins à domicile MENA
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="8" weight="7" color="p">
                        $340M
                      </Text>
                      <Text size="3" color="b" low>
                        SAM — Maroc soins à domicile
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="8" weight="7" color="p">
                        $12M
                      </Text>
                      <Text size="3" color="b" low>
                        SOM — Marrakech Année 3
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
              <Reveal i={4}>
                <Grid gap="3" cols={{ default: "1fr 1fr" }}>
                  <Paper as={Flex} gap="3" background="B1" border p="4" corner="3">
                    <Old width={32} height={32} strokeWidth={1.35} aria-hidden />
                    <Flex direction="col">
                      <Text size="4" weight="7">
                        Population vieillissante
                      </Text>
                      <Text size="3" color="b" low>
                        +65 ans au Maroc : 3.5M aujourd'hui → 8M en 2040. Besoin de soins chroniques explosif.
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper as={Flex} gap="3" background="B1" border p="4" corner="3">
                    <Plane width={32} height={32} strokeWidth={1.35} aria-hidden />
                    <Flex direction="col">
                      <Text size="4" weight="7">
                        Tourisme médical
                      </Text>
                      <Text size="3" color="b" low>
                        100 000+ patients/an au Maroc. Marrakech est la 2e destination. Aucun suivi post-op structuré.
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper as={Flex} gap="3" background="B1" border p="4" corner="3">
                    <Hospital width={32} height={32} strokeWidth={1.35} aria-hidden />
                    <Flex direction="col">
                      <Text size="4" weight="7">
                        Post-hospitalisation
                      </Text>
                      <Text size="3" color="b" low>
                        Les hôpitaux veulent décharger les lits. Le domicile devient le nouveau lieu de soins.
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper as={Flex} gap="3" background="B1" border p="4" corner="3">
                    <Mobile width={32} height={32} strokeWidth={1.35} aria-hidden />
                    <Flex direction="col">
                      <Text size="4" weight="7">
                        Digitalisation santé
                      </Text>
                      <Text size="3" color="b" low>
                        Le Maroc investit massivement dans la e-santé. Généralisation de l'AMO. Timing parfait.
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
            </div>
          </div>

          {/* ── 5 · BUSINESS MODEL ── */}
          <div className={slide(5)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Trois sources de revenus, croissance récurrente</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Business model</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <div className="revenue-row revenue-row--pitch">
                  <RevenueCard
                    icon={<PitchIcon id="home" size={28} />}
                    title="Abonnement familles"
                    subtitle="500-2 000 MAD/mois — suivi IA, coordination, alertes, rapports. Revenus récurrents et prévisibles."
                    badge="Récurrent"
                  />
                  <RevenueCard
                    icon={<PitchIcon id="cash" size={28} />}
                    title="Commission par acte"
                    subtitle="15-20% sur chaque intervention réservée via la plateforme. Modèle marketplace."
                    badge="À l'acte"
                  />
                  <RevenueCard
                    icon={<PitchIcon id="building" size={28} />}
                    title="B2B & Partenariats"
                    subtitle="Cliniques, assurances, hôtels médicaux — licence plateforme + données agrégées anonymisées."
                    badge="Scale"
                  />
                </div>
              </Reveal>
              <Reveal i={4}>
                <Grid gap="3" cols={{ default: "1fr 1fr 1fr" }}>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="1" items="center">
                      <Text size="6" weight="7" color="su">
                        Année 1
                      </Text>
                      <Text size="7" weight="7">
                        1.2M MAD
                      </Text>
                      <Text size="2" color="b" low>
                        200 familles · Marrakech
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="1" items="center">
                      <Text size="6" weight="7" color="su">
                        Année 2
                      </Text>
                      <Text size="7" weight="7">
                        5.8M MAD
                      </Text>
                      <Text size="2" color="b" low>
                        800 familles · +Casablanca
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="1" items="center">
                      <Text size="6" weight="7" color="su">
                        Année 3
                      </Text>
                      <Text size="7" weight="7">
                        18M MAD
                      </Text>
                      <Text size="2" color="b" low>
                        2 500 familles · 4 villes · B2B
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
            </div>
          </div>

          {/* ── 6 · ÉQUIPE ── */}
          <div className={slide(6)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Nous connaissons le terrain — et nous savons construire</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">L'équipe</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Grid gap="3" cols={{ default: "1fr 1fr" }}>
                  <Card
                    icon={<PitchIcon id="stethoscope" size={24} />}
                    title="Expertise terrain"
                    body="Infirmiers expérimentés en soins chroniques, gériatrie et post-chirurgie. Ils ont vécu le problème au quotidien."
                  />
                  <Card
                    icon={<PitchIcon id="settings" size={24} />}
                    title="Tech & produit"
                    body="Développeurs spécialisés en IA santé, UX mobile et plateformes de coordination médicale."
                  />
                  <Card
                    icon={<PitchIcon id="building" size={24} />}
                    title="Business & partenariats"
                    body="Expérience en structuration de partenariats cliniques, assurances et institutions de santé au Maroc."
                  />
                  <Card
                    icon={<PitchIcon id="users" size={24} />}
                    title="Réseau médical"
                    body="Accès direct à un réseau de +50 infirmiers qualifiés et partenariats avec des cliniques à Marrakech."
                  />
                </Grid>
              </Reveal>
              <Reveal i={4}>
                <Paper background="B2" border p="5" corner="3">
                  <Text size="4" color="d" >
                    ✅ Une équipe qui <strong>comprend le patient</strong>, <strong>maîtrise la technologie</strong> et{" "}
                    <strong>connaît le marché marocain</strong>.
                  </Text>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 7 · GO TO MARKET ── */}
          <div className={slide(7)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Stratégie de lancement</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Go to market</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Grid gap="3" cols={{ default: "1fr 1fr 1fr" }}>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="3">
                      <Text size="6" weight="7" color="p">
                        Phase 1
                      </Text>
                      <Text size="4" weight="7">
                        Marrakech
                      </Text>
                      <Text size="3" color="b" low>
                        • Lancement avec 20 infirmiers qualifiés
                      </Text>
                      <Text size="3" color="b" low>
                        • Partenariat avec 3-5 cliniques locales
                      </Text>
                      <Text size="3" color="b" low>
                        • Cible : familles avec patients chroniques + tourisme médical
                      </Text>
                      <Text size="3" color="b" low>
                        • Objectif : 200 familles abonnées
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="3">
                      <Text size="6" weight="7" color="p">
                        Phase 2
                      </Text>
                      <Text size="4" weight="7">
                        Expansion nationale
                      </Text>
                      <Text size="3" color="b" low>
                        • Casablanca + Rabat
                      </Text>
                      <Text size="3" color="b" low>
                        • Contrats B2B : assurances + cliniques
                      </Text>
                      <Text size="3" color="b" low>
                        • IA v2 : prédiction avancée + rapports automatiques
                      </Text>
                      <Text size="3" color="b" low>
                        • Objectif : 800 familles
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="5" corner="3">
                    <Flex direction="col" gap="3">
                      <Text size="6" weight="7" color="p">
                        Phase 3
                      </Text>
                      <Text size="4" weight="7">
                        Scale régional
                      </Text>
                      <Text size="3" color="b" low>
                        • 4+ villes marocaines
                      </Text>
                      <Text size="3" color="b" low>
                        • Expansion MENA : Tunisie, Sénégal
                      </Text>
                      <Text size="3" color="b" low>
                        • Plateforme en marque blanche pour cliniques
                      </Text>
                      <Text size="3" color="b" low>
                        • Objectif : 2 500+ familles
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
              <Reveal i={4}>
                <Paper background="B2" border p="5" corner="3">
                  <Flex gap="2" items="start">
                    <Target
                      width={22}
                      height={22}
                      strokeWidth={1.35}
                      aria-hidden
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <Text size="4" color="d" >
                      <strong>Pourquoi Marrakech d'abord ?</strong> — Forte concentration de patients âgés, hub du
                      tourisme médical, et réseau infirmier déjà en place.
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 8 · CONCURRENCE ── */}
          <div className={slide(8)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Ce qui existe — et pourquoi c'est insuffisant</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Paysage concurrentiel</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Grid gap="3" cols={{ default: "1fr 1fr 1fr 1fr" }}>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2">
                      <Text size="4" weight="7">
                        Critère
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2">
                      <Text size="4" weight="7">
                        Infirmiers freelance
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2">
                      <Text size="4" weight="7">
                        Agences classiques
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B2" border p="4" corner="3">
                    <Flex direction="col" gap="2">
                      <Text size="4" weight="7" color="p">
                        Sanad Care
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
              <Reveal i={4}>
                <Flex direction="col" gap="2">
                  {[
                    ["Protocoles standardisés", "❌", "⚠️", "✅"],
                    ["Suivi continu IA", "❌", "❌", "✅"],
                    ["Coordination médecin-famille", "❌", "❌", "✅"],
                    ["Alertes prédictives", "❌", "❌", "✅"],
                    ["Traçabilité des actes", "❌", "⚠️", "✅"],
                    ["Tourisme médical", "❌", "❌", "✅"],
                    ["App patient / famille", "❌", "❌", "✅"],
                  ].map(([critere, free, agence, sanad], idx) => (
                    <Grid gap="3" cols={{ default: "1fr 1fr 1fr 1fr" }} key={idx}>
                      <Paper p="3" corner="2">
                        <Text size="3">{critere}</Text>
                      </Paper>
                      <Paper p="3" corner="2">
                        <Text size="3">{free}</Text>
                      </Paper>
                      <Paper p="3" corner="2">
                        <Text size="3">{agence}</Text>
                      </Paper>
                      <Paper background="B2" p="3" corner="2">
                        <Text size="3" weight="7">
                          {sanad}
                        </Text>
                      </Paper>
                    </Grid>
                  ))}
                </Flex>
              </Reveal>
              <Reveal i={5}>
                <Paper background="B2" border p="5" corner="3">
                  <Flex gap="2" items="start">
                    <Trophy
                      width={22}
                      height={22}
                      strokeWidth={1.35}
                      aria-hidden
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <Text size="4" color="d" >
                      <strong>Notre avantage</strong> : Nous ne sommes pas une agence d'infirmiers. Nous sommes une{" "}
                      <strong>plateforme de santé intelligente</strong> qui structure, coordonne et optimise les soins à
                      domicile.
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 9 · ROADMAP & DEMANDE ── */}
          <div className={slide(9)}>
            <div className="slide-inner pitch-slide pitch-slide--content">
              <div className="accent-glow" />
              <Reveal i={0}>
                <div className="eyebrow">Ce que nous demandons</div>
              </Reveal>
              <Reveal i={1}>
                <h2 className="pitch-heading">Roadmap & investissement</h2>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Paper background="B2" border p="6" corner="4">
                  <Flex direction="col" gap="3" items="center">
                    <Text size="3" color="b" low>
                      Nous recherchons un financement de
                    </Text>
                    <Text size="9" weight="7" color="p">
                      300 000 MAD
                    </Text>
                    <Text size="3" color="b" low>
                      (~200 000 €) — Pré-seed
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
              <Reveal i={4}>
                <Grid gap="3" cols={{ default: "1fr 1fr 1fr 1fr" }}>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="5" weight="7" color="p">
                        35%
                      </Text>
                      <Text size="3" weight="7">
                        Produit & IA
                      </Text>
                      <Text size="2" color="b" low>
                        App mobile, plateforme soignante, moteur IA prédictif
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="5" weight="7" color="p">
                        25%
                      </Text>
                      <Text size="3" weight="7">
                        Opérations
                      </Text>
                      <Text size="2" color="b" low>
                        Recrutement infirmiers, formation, matériel médical
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="5" weight="7" color="p">
                        25%
                      </Text>
                      <Text size="3" weight="7">
                        Acquisition
                      </Text>
                      <Text size="2" color="b" low>
                        Marketing, partenariats cliniques, événements
                      </Text>
                    </Flex>
                  </Paper>
                  <Paper background="B1" border p="4" corner="3">
                    <Flex direction="col" gap="2" items="center">
                      <Text size="5" weight="7" color="p">
                        15%
                      </Text>
                      <Text size="3" weight="7">
                        Fonds de roulement
                      </Text>
                      <Text size="2" color="b" low>
                        Trésorerie, juridique, imprévus
                      </Text>
                    </Flex>
                  </Paper>
                </Grid>
              </Reveal>
              <Reveal i={5}>
                <Paper background="B2" border p="5" corner="3">
                  <Flex direction="col" gap="2">
                    <Flex gap="2" items="center">
                      <ChartArrows width={22} height={22} strokeWidth={1.35} aria-hidden />
                      <Text size="4" weight="7" color="p" low>
                        Retour attendu
                      </Text>
                    </Flex>
                    <Text size="3" color="b" low>
                      Break-even en <strong>18 mois</strong> · ROI projeté <strong>x5 en 3 ans</strong> · Marché en
                      croissance de <strong>+15%/an</strong> au Maroc
                    </Text>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>

          {/* ── 10 · CLOSING ── */}
          <div className={slide(10)}>
            <div className="slide-inner pitch-slide pitch-slide--closing">
              <div className="accent-glow accent-glow--lg" style={{ bottom: "-40%", left: "-20%" }} />
              <div className="accent-glow accent-glow--secondary" style={{ top: "-30%", right: "-10%" }} />
              <Reveal i={0}>
                <div className="eyebrow">À retenir</div>
              </Reveal>
              <Reveal i={1}>
                <div className="vision-quote vision-quote--closing">
                  <p className="closing-verse">Le problème n'est pas de soigner à domicile.</p>
                  <p className="closing-verse">
                    Le problème est de soigner à domicile <span className="accent">sans système</span>.
                  </p>
                </div>
              </Reveal>
              <Reveal i={2}>
                <Separator />
              </Reveal>
              <Reveal i={3}>
                <Flex direction="col" gap="3" items="center">
                  <Flex items="center" gap="4">
                    <SmallLogo width={60}  strokeWidth={1.35} className="pitch-icon-svg" aria-hidden />
                    <Text size="7" weight="7">
                      SANAD <span className="accent">CARE</span>
                    </Text>
                  </Flex>
                  <Text size="4" color="b" low>
                    Soins structurés · IA prédictive · 24/7 à votre porte
                  </Text>
                </Flex>
              </Reveal>
              <Reveal i={4}>
                <Paper background="B2" border p="5" corner="4">
                  <Flex direction="col" gap="2" items="center">
                    <Text size="4" weight="7" color="p" low>
                      Construisons ensemble l'avenir des soins à domicile au Maroc.
                    </Text>
                    <Flex gap="2">
                      <Envelop width={16} />
                      <Text size="3" color="b" low>
                        contact@sanadcare.ma
                      </Text>
                    </Flex>
                  </Flex>
                </Paper>
              </Reveal>
            </div>
          </div>
        </div>
        {/* ━━━ END slides-container ━━━ */}

        <button type="button" id="prev-btn" onClick={goPrev} aria-label="Slide précédente">
          <ArrowLeft width={20} height={20} strokeWidth={1.35} aria-hidden />
        </button>
        <button type="button" id="next-btn" onClick={goNext} aria-label="Slide suivante">
          <ArrowRight width={20} height={20} strokeWidth={1.35} aria-hidden />
        </button>
      </div>
    </div>
  );
}
