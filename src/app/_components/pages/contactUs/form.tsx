"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { Alert, Button, FormController, Input, Textarea } from "@pillar-ui/core";
import { Envelop, Message, Send, User } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import React, { useActionState, useEffect } from "react";
import { sendMail } from "@/app/_components/pages/contactUs/action/contact";
import type { LocaleKey } from "@/types/localeProps.interface";
import type { FormState, StatusProps } from "./contact.type";

export const initialState: FormState = {
  message: "",
  status: "idle",
};

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendMail, initialState);
  const [status, setStatus] = React.useState<StatusProps>("idle");
  const formRef = React.useRef<HTMLFormElement>(null);
  const t = useTranslations("contact.form");
  const locale = useLocale() as LocaleKey;

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} aria-labelledby="contact-me" className="Sf-5" action={formAction}>
      {state?.message && (
        <Alert
          color={state.status === "error" ? "d" : "su"}
          title={state.status ?? ""}
          message={state.message}
          aria-live="polite"
        />
      )}
      <div className="Sf-4">
        <FormController label={t("name")} required>
          <Input name="name" prefixInput={<User width="24" />} required autoComplete="name" />
        </FormController>
        <FormController label={t("email")} required>
          <Input name="email" type="email" required prefixInput={<Envelop width="24" />} autoComplete="email" />
        </FormController>
        <FormController label={t("subject")} required>
          <Input name="subject" required prefixInput={<Message width="24" />} />
        </FormController>
        <FormController label={t("message")} required>
          <Textarea name="message" required prefixInput={<Message width="24" />} rows={5} />
        </FormController>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_SITE_KEY as string}
          onError={() => setStatus("error")}
          onExpire={() => setStatus("expired")}
          onSuccess={() => setStatus("solved")}
          options={{
            language: locale,
          }}
        />

        <Button
          disabled={status !== "solved"}
          icon={<Send width="15" fill="currentColor" />}
          state={pending ? "loading" : "idle"}
          type="submit"
        >
          {t("send")}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
