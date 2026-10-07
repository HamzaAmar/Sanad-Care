# 001 — Replace the bespoke why-us entrance with the shared Reveal system

- **Status**: DONE — executed and applied to the working tree on 2026-10-06; diff reviewed (review-animations bar: Approve), format/type-check/lint clean, live render verified on /en/why-us and /ar/why-us (9 section + 23 item reveals in SSR HTML)
- **Commit**: b84dfd7
- **Severity**: HIGH (merges four audit findings: load-time-only animation, missing reduced-motion handling, off-convention easing/duration, no stagger)
- **Category**: Purpose & frequency / Accessibility / Easing & duration / Cohesion & tokens
- **Estimated scope**: 2 files — `src/app/_components/pages/whyUs/index.tsx` (add Reveal wrappers), `src/app/_components/pages/whyUs/why-us.scss` (delete keyframes, add one width rule)

## Problem

The `/why-us` page is the only page in the repo with its own hand-rolled entrance animation instead of the shared `Reveal` system (`src/app/_components/reveal/`, used by the home and patient pages). The bespoke code, verbatim:

```scss
/* src/app/_components/pages/whyUs/why-us.scss:1-21 — current */
.why-us-section {
  min-height: calc(80vh - 8rem);
  background-color: var(--B2);
  padding: 2rem;
  border-radius: 1rem;
  animation: ab 1.5s ease-out;
  transform-origin: left;
  display: flex;
  align-items: center;
}

@keyframes ab {
  0% {
    opacity: 0;
    transform: scale(0.9) translateX(-5rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
```

Four concrete problems:

1. **All sections animate on page load, at the same instant.** CSS `animation` runs when the stylesheet applies — there is no scroll trigger. The page has 9 `.why-us-section` blocks; everything below the fold animates while off-screen and is already static by the time the user scrolls to it. The page's only motion benefits the first screen and is wasted everywhere else.
2. **No `prefers-reduced-motion` handling.** This is the only animated surface in the repo without one (verified: `src/app/_components/reveal/_main.scss:57`, `src/app/_components/pages/patient/patient.scss:438`, `src/app/_components/pages/serviceDetail/serviceDetail.scss:441`, `src/app/_components/service-card/_main.scss:51`, `src/app/_components/hero/_main.scss:671` all handle it). Motion-sensitive users get a 5rem slide plus scale on every section.
3. **Off-convention values.** 1500ms duration and 80px horizontal travel with `transform-origin: left` — sluggish and heavy next to the repo's shared entrance (450ms sections / 300ms items, 24px/16px vertical travel, `scale(0.97)`, strong ease-out). The horizontal-left direction is also arbitrary: sections alternate visual/text sides and several are centered.
4. **No stagger.** The four content grids (6 detail cards, 3 global-list items, 11 measurement items, 3 promise items) appear as one block. The repo's system already staggers grid items at 60ms, capped at index 8.

## Target

Every section's content reveals on scroll via the existing `Reveal` component; grid items stagger via `Reveal variant="item"`; the `ab` keyframes and their properties are deleted. No new tokens, no new SCSS motion code — the shared system provides everything:

- Section entrance: 450ms, `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `translateY(24px) scale(0.97)` → none, triggered by IntersectionObserver at 15% visibility with `rootMargin: "0px 0px -10% 0px"`.
- Item entrance: 300ms, `translateY(16px)`, stagger = `index * 60ms` (index capped at 8).
- Reduced motion: built in (`reveal/_main.scss:57-68`) — 150ms fade with 8px travel, no stagger.
- No-JS safety: built in — `.reveal` is visible by default; the hidden pre-reveal state only applies once JS adds the `js` class to `<html>`.

## Repo conventions to follow

- `Reveal` component: `src/app/_components/reveal/index.tsx`. Props: `variant?: "section" | "item"` (default `section`), `index?: number` (stagger slot, default 0), `threshold`, `rootMargin`, `className`, `style`. It renders a plain `<div>`.
- Its styles are already loaded site-wide via `src/app/_components/_main.scss:3` (`@forward "./reveal/main"`). Do not re-import the SCSS.
- **Exemplar — section-level wrap** (`src/app/_components/pages/patient/components/sections/TrustSignals.tsx:13-18`): the `<Reveal>` sits *inside* the section element, wrapping the content block; the section's own background does not fly in.
- **Exemplar — grid stagger** (`src/app/_components/pages/home/components/whyUs/index.tsx:59-63`):

  ```tsx
  {FEATURES.map(({ slug, ...rest }, i) => (
    <Reveal key={slug} variant="item" index={i}>
      <Box {...rest} />
    </Reveal>
  ))}
  ```

- `Reveal` is a client component (`"use client"` in its own file); importing it from a server component is fine and already done in `TrustSignals.tsx`. Do NOT add `"use client"` to the why-us page.

## Steps

All edits in `src/app/_components/pages/whyUs/index.tsx` (line numbers from commit `b84dfd7`) unless noted.

1. Add the import next to the existing component imports:

   ```tsx
   import { Reveal } from "@/app/_components/reveal";
   ```

2. Wrap the first child element of each section block in `<Reveal>` (no props — default `variant="section"`). Pattern, shown for the first section (current lines 22–39):

   ```tsx
   {/* current */}
   <section className="why-us-section section-exist">
     <Paper>
       <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
         …
       </Grid>
     </Paper>
   </section>

   {/* target */}
   <section className="why-us-section section-exist">
     <Reveal>
       <Paper>
         <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
           …
         </Grid>
       </Paper>
     </Reveal>
   </section>
   ```

   Apply the same single-child wrap at these nine blocks (indentation of the wrapped subtree increases by one level each time):

   | Block | Child to wrap | Current line |
   | --- | --- | --- |
   | `section-exist` | `<Paper>` | 23 |
   | `section-patient` | `<Paper>` | 42 |
   | `section-question` | `<Paper>` | 61 |
   | details `<div className="why-us-section">` | `<Paper flow="8">` | 80 |
   | `section-global` | `<Paper>` | 104 |
   | measurement `<section className="why-us-section">` | `<Paper flow="6">` | 150 |
   | `section-visible` | `<Grid …>` (no Paper in this one) | 170 |
   | `section-families` | `<Paper>` | 187 |
   | `section-promise` | `<Paper flow="6">` | 206 |

3. Stagger the four grids by wrapping each mapped child in `<Reveal variant="item" index={i}>` (the `key` moves onto the `Reveal`):

   - **Details grid** (lines 91–98), 6 items:

     ```tsx
     {details.map((item, index) => (
       <Reveal key={item.title} variant="item" index={index}>
         <Box
           icon={DETAIL_ICONS[index]}
           title={item.title}
           description={item.description}
         />
       </Reveal>
     ))}
     ```

   - **Global list** (lines 121–141), 3 items — wrap the outer `<Flex … as={Paper} …>` of `[0, 1, 2].map((i) => …)`, `index={i}`.
   - **Measurement list** (lines 158–164), 11 items — wrap the `<Paper background="B1" p="4" corner="3">` of `Array.from({ length: 11 }).map((_, i) => …)`, `index={i}`. (Index is capped at 8 inside `Reveal`, so the last cards wait at most 480ms — by design.)
   - **Promise list** (lines 220–225), 3 items — wrap the `<Paper background="B1" as={Flex} …>` of `[0, 1, 2].map((i) => …)`, `index={i}`.

4. Edit `src/app/_components/pages/whyUs/why-us.scss`. Delete `animation: ab 1.5s ease-out;`, `transform-origin: left;`, and the entire `@keyframes ab { … }` block. Add one rule so the Reveal wrapper (a flex child of `.why-us-section`) keeps full width — without it the section content can shrink to max-content width:

   ```scss
   /* target — full file top section */
   .why-us-section {
     min-height: calc(80vh - 8rem);
     background-color: var(--B2);
     padding: 2rem;
     border-radius: 1rem;
     display: flex;
     align-items: center;
   }

   // The Reveal wrapper is a flex child; keep it full-width so the
   // section content still spans the card.
   .why-us-section > .reveal {
     width: 100%;
   }
   ```

   Leave the `.why-us-page` block (lines 22–36) untouched.

## Boundaries

- Do NOT touch `src/app/_components/reveal/` (component or SCSS), other pages, or `AnimatedSection.tsx`.
- Do NOT remove the empty `<div className="section-visual visual-*" />` elements — they are dead markup today but their removal is a separate decision, not a motion fix.
- Do NOT change section backgrounds, spacing, min-heights, or any translated content.
- Do NOT add new dependencies, easings, or keyframes. The shared system supplies all motion.
- If the code you find no longer matches the excerpts/line numbers above (drift since commit `b84dfd7`), STOP and report instead of improvising.

## Verification

- **Mechanical**: `yarn validation` (runs `oxfmt --check`, `tsc --noEmit`, `oxlint`) — clean. Then `grep -n "ab" src/app/_components/pages/whyUs/why-us.scss` — no matches.
- **Feel check** (`yarn dev`, open `/en/why-us`, then `/ar/why-us` for RTL):
  - Scroll slowly from the top: each section's *content* rises 24px and settles as it enters the viewport; the section's card background does not move. Nothing animates on initial load except the first visible section.
  - Grid cards enter one after another at roughly 60ms apart — a ripple, not a block.
  - DevTools → Animations panel at 10% speed: entrance is opacity + small rise + settle, one-shot per section, never restarting on re-scroll (observer unobserves after firing).
  - DevTools → Rendering → emulate `prefers-reduced-motion: reduce`: sections still fade in (150ms, 8px travel), no slide, no scale, no stagger.
  - Disable JS: the full page renders visible (no blank sections).
  - RTL: the travel is vertical, so Arabic behaves identically — confirm no horizontal drift.
- **Done when**: every section block is wrapped, all four grids stagger, `ab` is gone, and all checks above pass.
