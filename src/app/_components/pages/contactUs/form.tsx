"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Alert, Button, FormController, Input, Textarea } from "@pillar-ui/core";
import { Envelop, Message, Send, User } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import React, { useActionState, useEffect, useRef } from "react";
import { sendMail } from "@/app/_components/pages/contactUs/action/contact";
import type { LocaleKey } from "@/types/localeProps.interface";
import type { FormState, StatusProps } from "./contact.type";

export const initialState: FormState = {
  status: "idle",
};

const errorKeyByCode: Record<string, string> = {
  invalid_data: "errors.invalidData",
  captcha_failed: "errors.captchaFailed",
  rate_limited: "errors.rateLimited",
  send_failed: "errors.sendFailed",
};

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendMail, initialState);
  const [captchaStatus, setCaptchaStatus] = React.useState<StatusProps>("idle");
  const formRef = React.useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance>(undefined);
  const t = useTranslations("contact.form");
  const locale = useLocale() as LocaleKey;

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      turnstileRef.current?.reset();
      setCaptchaStatus("idle");
    }
  }, [state.status]);

  const stateMessage =
    state.status === "success"
      ? t("successMessage")
      : state.status === "error" && state.code
        ? t(errorKeyByCode[state.code] ?? "errors.sendFailed")
        : "";

  const resetCaptcha = () => {
    turnstileRef.current?.reset();
    setCaptchaStatus("idle");
  };

  return (
    <form ref={formRef} aria-labelledby="contact-me" className="Sf-5" action={formAction}>
      {stateMessage && (
        <Alert
          color={state.status === "error" ? "d" : "su"}
          title={state.status === "error" ? t("errorTitle") : t("successTitle")}
          message={stateMessage}
          aria-live="polite"
        />
      )}
      <div className="Sf-4">
        <FormController label={t("name")} required>
          <Input name="name" prefixInput={<User width="24" />} required autoComplete="name" />
        </FormController>
        <FormController label={t("email")} required>
          <Input
            name="email"
            type="email"
            required
            prefixInput={<Envelop width="24" />}
            autoComplete="email"
          />
        </FormController>
        <FormController label={t("subject")} required>
          <Input name="subject" required prefixInput={<Message width="24" />} />
        </FormController>
        <FormController label={t("message")} required>
          <Textarea name="message" required prefixInput={<Message width="24" />} rows={5} />
        </FormController>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_SITE_KEY as string}
          onError={() => setCaptchaStatus("error")}
          onExpire={() => setCaptchaStatus("expired")}
          onSuccess={() => setCaptchaStatus("solved")}
          options={{
            language: locale,
          }}
        />

        {(captchaStatus === "error" || captchaStatus === "expired") && (
          <Alert
            color="d"
            title={t("errorTitle")}
            message={
              captchaStatus === "expired" ? t("errors.captchaExpired") : t("errors.captchaFailed")
            }
            aria-live="polite"
          />
        )}

        {captchaStatus === "error" || captchaStatus === "expired" ? (
          <Button type="button" onClick={resetCaptcha}>
            {t("retry")}
          </Button>
        ) : null}

        <Button
          disabled={captchaStatus !== "solved"}
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
