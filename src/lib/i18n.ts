type Locale = "en" | "fr" | "ar";

interface Messages {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    gallery: string;
    about: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    copyright: string;
    followUs: string;
  };
}

const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: "Moroccan Caftans - Artisan Showcase",
      description:
        "Discover authentic Moroccan caftans and traditional clothing crafted with passion",
    },
    nav: {
      home: "Home",
      gallery: "Gallery",
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      title: "Artisan Moroccan Caftans",
      subtitle: "Handcrafted with tradition and passion",
      cta: "Explore Collection",
    },
    footer: {
      copyright: "© 2025 Moroccan Caftans. All rights reserved.",
      followUs: "Follow Us",
    },
  },
  fr: {
    meta: {
      title: "Caftans Marocains - Galerie Artisanale",
      description:
        "Découvrez les authentiques caftans marocains et vêtements traditionnels confectionnés avec passion",
    },
    nav: {
      home: "Accueil",
      gallery: "Galerie",
      about: "À Propos",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    hero: {
      title: "Caftans Marocains Artisanaux",
      subtitle: "Confectionnés avec tradition et passion",
      cta: "Explorer la Collection",
    },
    footer: {
      copyright: "© 2025 Caftans Marocains. Tous droits réservés.",
      followUs: "Nous Suivre",
    },
  },
  ar: {
    meta: {
      title: "القفاطين المغربية - عرض حرفي",
      description: "اكتشف القفاطين المغربية الأصلية والملابس التقليدية المصنوعة بشغف",
    },
    nav: {
      home: "الرئيسية",
      gallery: "المعرض",
      about: "حول",
      testimonials: "الشهادات",
      contact: "اتصل",
    },
    hero: {
      title: "القفاطين المغربية الحرفية",
      subtitle: "مصنوعة بتقليد وشغف",
      cta: "استكشف المجموعة",
    },
    footer: {
      copyright: "© 2025 القفاطين المغربية. جميع الحقوق محفوظة.",
      followUs: "تابعنا",
    },
  },
};

export function getMessages(locale: string): Messages {
  return messages[locale as Locale] || messages.en;
}

export const locales: Locale[] = ["en", "fr", "ar"];
