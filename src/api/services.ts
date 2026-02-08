import { SERVICE_ITEMS, SERVICES } from "@/constants/services";
import type { LocaleKey } from "@/types/localeProps.interface";

export function getServiceItemName(id: string, locale: LocaleKey) {
  const item = SERVICE_ITEMS.find((item) => item.id === id);
  if (!item) throw new Error(`Unknown service item id: ${id}`);
  return item.name[locale];
}

export function getAllServices(locale: LocaleKey) {
  const services = SERVICES.map((service) => {
    const included = service.included.map((itemId) => getServiceItemName(itemId, locale));
    const notIncluded = service.notIncluded.map((itemId) => getServiceItemName(itemId, locale));

    return {
      id: service.id,
      name: service.name[locale],
      description: service.description[locale],
      priceFrom: service.priceFrom,
      included,
      notIncluded,
    };
  });

  return services;
}
