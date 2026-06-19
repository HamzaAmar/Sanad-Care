"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const PRESENTATION_SEGMENT = "presentation";

function isPresentationRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const segments = pathname.split("/").filter(Boolean);
  return segments.includes(PRESENTATION_SEGMENT);
}

/**
 * Site shell: header, main, footer — omitted on `/[locale]/presentation` so the deck is full-viewport.
 */
export default function LocaleChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (isPresentationRoute(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
