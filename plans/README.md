# Animation Plans

Prioritized, self-contained motion fixes produced by the `improve-animations` audit. Each plan is executable by any agent with zero prior context — every value, path, and excerpt is inline.

## Plans

| # | Title | Severity | Status |
| --- | --- | --- | --- |
| [001](001-why-us-adopt-reveal-system.md) | Replace the bespoke why-us entrance with the shared Reveal system | HIGH | DONE |

## Execution order

1. **001** — no dependencies. One PR: two files, no new tokens, no new dependencies.

## Notes from the audit (2026-10-06, commit `b84dfd7`)

- The shared `Reveal` system (`src/app/_components/reveal/`) is the repo's motion convention — correct easing token, durations, stagger cap, reduced-motion handling, and no-JS safety. New page motion should extend it, never fork it.
- The repo carries a second, older motion system: GSAP `AnimatedSection` (`src/app/_components/AnimatedSection.tsx`), used only by the venipuncture page. Consolidating it onto `Reveal` is a possible future audit, out of scope here.
- The why-us page renders five empty, unstyled `<div className="section-visual visual-*" />` placeholders (`src/app/_components/pages/whyUs/index.tsx`). Not a motion issue; flagged for a content decision (add imagery or remove the markup).
