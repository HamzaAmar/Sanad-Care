import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/constants/personalInfo";

export const getPageMetadata = (title: string, description: string, path: string, image?: string): Metadata => ({
  title: `${title} | ${PERSONAL_INFO.name}`,
  description,
  openGraph: {
    type: "website",
    url: `${PERSONAL_INFO.domain}/${path}`,
    title: `${title} | ${PERSONAL_INFO.name}`,
    description,
    images: image
      ? [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${PERSONAL_INFO.name}`,
    description,
    images: image ? [image] : undefined,
  },
  alternates: {
    canonical: `${PERSONAL_INFO.domain}/${path}`,
  },
});
export const baseMetadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.domain),
  title: {
    default: `Luxury Car Rental Marrakech | ${PERSONAL_INFO.name}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description:
    "Rent luxury cars in Marrakech with Taouafi. Premium SUVs, exotic sports cars, Range Rover, Mercedes & chauffeur service. Airport delivery across Morocco.",
  keywords: [
    "luxury car rental Marrakech",
    "location voiture luxe Marrakech",
    "كراء سيارات فاخرة مراكش",
    "luxury car hire Morocco",
    "premium car rental Marrakech",
    "exotic car rental Marrakech",
    "SUV rental Marrakech",
    "4x4 car rental Morocco",
    "Marrakech airport car rental luxury",
    "chauffeur service Marrakech",
    "luxury car delivery Morocco",
    "location voiture luxe Maroc",
    "location voiture premium Marrakech",
    "location 4x4 Marrakech",
    "location SUV Marrakech",
    "service chauffeur Marrakech",
    `${PERSONAL_INFO.name}`,
    "Taouafi car rental Marrakech",
    "Taouafi car rental",
    "Taouafi rent car",
    "best luxury car rental Morocco",
    "top car rental Marrakech luxury",
    "VIP car rental Marrakech",
  ],
  authors: [{ name: `${PERSONAL_INFO.name}`, url: PERSONAL_INFO.domain }],
  creator: `${PERSONAL_INFO.name}`,
  publisher: `${PERSONAL_INFO.name}`,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: PERSONAL_INFO.domain,
    siteName: `${PERSONAL_INFO.name}`,
    title: `Experience Marrakech in a Luxury Car — ${PERSONAL_INFO.name}`,
    description:
      "Premium fleet of exotic cars, Range Rovers & Mercedes. 24/7 concierge, airport pickup. Morocco's most trusted luxury rental.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} fleet of luxury vehicles in Marrakech`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TaouafiRentCar",
    creator: "@TaouafiRentCar",
    title: `Experience Marrakech in a Luxury Car — ${PERSONAL_INFO.name}`,
    description:
      "Premium fleet of exotic cars, Range Rovers & Mercedes. 24/7 concierge, airport pickup. Morocco's most trusted luxury rental.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: PERSONAL_INFO.domain,
    languages: {
      en: `${PERSONAL_INFO.domain}/en`,
      fr: `${PERSONAL_INFO.domain}/fr`,
      ar: `${PERSONAL_INFO.domain}/ar`,
    },
  },
  category: "Luxury Car Rental",
};
