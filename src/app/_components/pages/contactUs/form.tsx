"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Alert, Button, FormController, Input, Text, Textarea } from "@pillar-ui/core";
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
    }

    if (state.status === "success" || state.status === "error") {
      turnstileRef.current?.reset();
      setCaptchaStatus("idle");
    }
  }, [state]);

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

  const captchaSolved = captchaStatus === "solved";
  const captchaFailed = captchaStatus === "error" || captchaStatus === "expired";

  return (
    <form
      ref={formRef}
      action={formAction}
      aria-labelledby="contact-title"
      aria-busy={pending}
      className="contact-form"
    >
      {stateMessage && (
        <Alert
          color={state.status === "error" ? "d" : "su"}
          title={state.status === "error" ? t("errorTitle") : t("successTitle")}
          message={stateMessage}
        />
      )}
      <div className="Sf-4">
        <FormController label={t("name")} required>
          <Input
            name="name"
            prefixInput={
              <span aria-hidden="true">
                <User width="24" />
              </span>
            }
            required
            autoComplete="name"
            maxLength={100}
          />
        </FormController>
        <FormController label={t("email")} required>
          <Input
            name="email"
            type="email"
            required
            prefixInput={
              <span aria-hidden="true">
                <Envelop width="24" />
              </span>
            }
            autoComplete="email"
            maxLength={254}
          />
        </FormController>
        <FormController label={t("subject")} required>
          <Input
            name="subject"
            required
            prefixInput={
              <span aria-hidden="true">
                <Message width="24" />
              </span>
            }
            maxLength={150}
          />
        </FormController>
        <FormController label={t("message")} required>
          <Textarea
            name="message"
            required
            prefixInput={
              <span aria-hidden="true">
                <Message width="24" />
              </span>
            }
            rows={5}
            maxLength={5000}
          />
        </FormController>
      </div>

      <div className="contact-captcha">
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

        {!captchaSolved && (
          <Text size="2" color="b" low id="captcha-hint">
            {t("captchaHint")}
          </Text>
        )}
      </div>

      {captchaFailed && (
        <Alert
          color="d"
          title={t("errorTitle")}
          message={
            captchaStatus === "expired" ? t("errors.captchaExpired") : t("errors.captchaFailed")
          }
        />
      )}

      {captchaFailed ? (
        <Button type="button" onClick={resetCaptcha}>
          {t("retry")}
        </Button>
      ) : null}

      <Button
        disabled={!captchaSolved}
        aria-describedby={captchaSolved ? undefined : "captcha-hint"}
        icon={<Send width="15" fill="currentColor" />}
        loadingText={t("send")}
        state={pending ? "loading" : "idle"}
        type="submit"
      >
        {t("send")}
      </Button>
    </form>
  );
};

export default ContactForm;
