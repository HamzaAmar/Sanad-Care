"use client";

import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type RevealImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

/**
 * Image that fades in the moment it is actually ready (loaded or cached),
 * independent of the surrounding section reveal. No layout properties are
 * animated — only opacity and a very small scale settle.
 */
export function RevealImage({ className, onLoad, onError, ...rest }: RevealImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Gate the hidden pre-load state on JS being active so the image stays
    // visible with JS disabled or before hydration.
    document.documentElement.classList.add("js");
    // Cached images may already be complete before the load handler attaches.
    const el = ref.current;
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const cls = ["reveal-image", loaded ? "is-loaded" : null, className].filter(Boolean).join(" ");

  return (
    <img
      ref={ref}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={(e) => {
        // Never trap a broken image in the hidden state.
        setLoaded(true);
        onError?.(e);
      }}
      className={cls}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}

export default RevealImage;
