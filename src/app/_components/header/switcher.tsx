"use client";

import { IconButton, Spinner } from "@pillar-ui/core";
import { useBool } from "@pillar-ui/hooks";
import { Moon, Sun } from "@pillar-ui/icons";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const Switcher = () => {
  const { value: mounted, setTrue } = useBool(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setTrue();
  }, [setTrue]);

  if (!mounted) {
    return <Spinner size="6" />;
  }

  const nextMode = resolvedTheme === "dark" ? "light" : "dark";

  const icon =
    resolvedTheme === "dark" ? (
      <Sun width="30" aria-hidden="true" focusable="false" />
    ) : (
      <Moon width="30" aria-hidden="true" focusable="false" />
    );

  return (
    <IconButton
      size="4"
      onClick={() => setTheme(nextMode)}
      icon={!mounted ? <Spinner /> : icon}
      title={`Switch to ${nextMode} Mode`}
    />
  );
};
