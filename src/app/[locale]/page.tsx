import Home from "../_components/pages/home";

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Taouafi Luxury Rent Car",
    image: "https://www.sanad-care.ma/og-image.jpg",
    priceRange: "300 MAD - 5000 MAD per day",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Avenue Mali Magasin N12 Ocean",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9716,
      longitude: -6.8498,
    },
    telephone: "+212701002008",
    openingHours: "Mo-Su 08:00-23:00",
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
