import { Button } from "@pillar-ui/core";
import type { ReactElement } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  title,
  icon,
  disabled,
}: {
  title: string;
  icon: ReactElement;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={disabled} state={pending ? "loading" : "idle"} icon={icon}>
      {title}
    </Button>
  );
}
