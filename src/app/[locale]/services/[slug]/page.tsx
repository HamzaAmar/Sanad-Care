// export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
//   const { slug, locale } = await params;
//   const local = locale as LocaleKey;
//   const CAR = CARS.find((car) => car.slug === slug);

//   if (!CAR) return { title: "Car Not Found" };

//   // Fallback if you haven't updated DTO yet
//   const title = CAR?.seo?.title[local] || `${CAR.model[local]} Rental Marrakech - Taouafi`;
//   const description = CAR?.seo?.metaDescription[local] || CAR.description[local];

//   // Construct canonical URL (critical for avoiding duplicate content penalties)
//   const canonicalUrl = `${BASE_URL}/${local}/services/${slug}`;

//   return {
//     title: title,
//     description: description,
//     keywords: CAR.seo?.keywords[local].join(", "),
//     alternates: {
//       canonical: canonicalUrl,
//       languages: {
//         en: `${BASE_URL}/en/services/${slug}`,
//         fr: `${BASE_URL}/fr/services/${slug}`,
//         ar: `${BASE_URL}/ar/services/${slug}`,
//       },
//     },
//     openGraph: {
//       title: title,
//       description: description,
//       images: [{ url: CAR.images[0].url, width: 1200, height: 630, alt: CAR.images[0].alt }],
//       type: "website",
//       locale: locale,
//     },
//   };
// }

const page = async () => {
  // const locale = await getLocale();
  // const { slug } = await params;
  // const CAR = CARS.find((car) => car.slug === slug);

  // if (!CAR) {
  //   return <div>Car not found</div>;
  // }

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Vehicle",
  //   name: `Rental: ${CAR.model.en}`,
  //   image: CAR.images.map((img) => `${BASE_URL}${img.url}`),
  //   description: CAR.description.en,
  //   sku: CAR.slug,
  //   brand: {
  //     "@type": "Brand",
  //     name: "Land Rover",
  //   },
  //   offers: {
  //     "@type": "Offer",
  //     url: `${BASE_URL}/${locale}/services/${CAR.slug}`,
  //     priceCurrency: "MAD",
  //     price: CAR.price.day,
  //     priceValidUntil: "2025-12-31",
  //     itemCondition: "https://schema.org/UsedCondition",
  //     availability: CAR.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
  //     seller: {
  //       "@type": "Organization",
  //       name: "Taouafi Rent Car",
  //     },
  //   },
  // };

  return <div className="section">hello</div>;
};

export default page;
