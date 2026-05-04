import { PERSONAL_INFO } from "@/constants/personalInfo";
import Home from "../_components/pages/home";

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: PERSONAL_INFO.name,
    image: `${PERSONAL_INFO.domain}/og-image.jpg`,
    priceRange: "300 MAD - 5000 MAD per day",
    address: {
      "@type": "PostalAddress",
      streetAddress: PERSONAL_INFO.information.address,
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9716,
      longitude: -6.8498,
    },
    telephone: PERSONAL_INFO.phone,
    openingHours: PERSONAL_INFO.information.workingDays,
    paymentAccepted: "Cash, Credit Card",
    areaServed: ["Marrakech"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Home />
    </>
  );
}
