import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import ar from "../../messages/ar.json";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import { routing } from "./routing";

const messages = { en, fr, ar };

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale],
  };
});
