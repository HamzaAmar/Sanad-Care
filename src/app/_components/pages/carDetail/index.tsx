// "use client";

// import { Button, Chips, Flex, Grid, Heading, IconButton, Paper, Separator, Text } from "@pillar-ui/core";
// import {
//   AccessPoint,
//   ArrowLeft,
//   ArrowRight,
//   Calendar,
//   Car,
//   Check,
//   CircleCheck,
//   CreditCard,
//   Door,
//   Gauge,
//   Phone,
//   Settings,
//   UserInfo,
//   Users,
//   Whatsapp,
// } from "@pillar-ui/icons";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { useLocale, useTranslations } from "next-intl";
// import { useCallback } from "react";
// import type { LocaleKey } from "@/types/localeProps.interface";
// import "./car-details.scss";
// import { PERSONAL_INFO } from "@/constants/personalInfo";

// const CarDetailPage = ({ car }: { car: CarDTO }) => {
//   const locale = useLocale() as LocaleKey;
//   const t = useTranslations();
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: locale === "ar" ? "rtl" : "ltr" });

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   const overviewItems = [
//     { icon: <Car />, label: t("cars.features.make"), value: "Taouafi" },
//     { icon: <Car />, label: t("cars.model"), value: car.model[locale] },
//     { icon: <Car />, label: t(t(`cars.type.${car.type}`)), value: t(`cars.type.${car.type}`) }, // Assuming type translations exist or fallback
//     { icon: <Settings />, label: t("cars.features.transmission"), value: t(`cars.features.${car.transmission}`) },
//     { icon: <Gauge />, label: t("cars.features.engine"), value: car.engine },
//     { icon: <AccessPoint />, label: t("cars.features.horsepower"), value: `${car.horsepower} ${t("cars.hp")}` },
//     { icon: <Users />, label: t("cars.features.seats"), value: `${car.seats} ${t("cars.features.passengers")}` },
//     { icon: <Door />, label: t("cars.features.doors"), value: `${car.doors} ${t("cars.features.doors")}` },
//     // { icon: <Briefcase />, label: t("cars.features.luggage"), value: `${car.luggage} ${t("cars.bags")}` }, // Keeping hardcoded value as requested or can be dynamic if available
//     { icon: <Calendar />, label: t("cars.rental.years"), value: car.year },
//     { icon: <UserInfo />, label: t("cars.features.fuelType"), value: t(`cars.features.${car.fuelType}`) },
//   ];

//   return (
//     <Grid cols={{ default: "1fr", md: "2fr 1fr" }} gap="6" className="section car-details-page">
//       <Paper flow="4">
//         <Heading size="7" weight="7" className="mb-4">
//           {car.model[locale]}
//         </Heading>
//         <div className="car-detail--gallery">
//           <IconButton
//             icon={<ArrowLeft />}
//             className="gallery-nav-btn prev"
//             onClick={scrollPrev}
//             title="Previous"
//             variant="solid"
//             color="b"
//           />
//           <div className="embla" ref={emblaRef}>
//             <div className="embla__container">
//               {car.images.map((img, idx) => (
//                 <div className="embla__slide car-detail-image" key={img.url}>
//                   <Image src={img.url} alt={img.alt || car.model[locale]} fill priority={idx === 0} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <IconButton
//             icon={<ArrowRight />}
//             className="gallery-nav-btn next"
//             onClick={scrollNext}
//             title="Next"
//             variant="solid"
//             color="b"
//           />
//         </div>

//         {/* Car Overview */}
//         <Paper flow="5" p="5" corner="3">
//           <Flex gap="2" items="center">
//             <Car width="20" />
//             <Heading size="4" weight="6" transform="uppercase">
//               {t("cars.carFeatures")}
//             </Heading>
//           </Flex>
//           <Grid cols={{ default: "1fr", sm: "1fr 1fr" }}>
//             {overviewItems.map((item) => (
//               <div className="feature-card" key={item.label}>
//                 <div className="icon">{item.icon}</div>
//                 <div>
//                   <div className="label">{item.label}</div>
//                   <div className="value">{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </Grid>
//         </Paper>

//         {/* Description */}
//         <Paper flow="4">
//           <Heading size="4" weight="6" transform="uppercase">
//             {t("cars.descriptionAndHighlights")}
//           </Heading>
//           <Text color="b" low size="4" leading="3">
//             {car.description[locale]}
//           </Text>
//           <div className="features-list mt-4">
//             <Grid cols={{ default: "1fr", sm: "1fr 1fr" }} gap="3">
//               {car.features.map((feature) => (
//                 <Flex key={feature.name} gap="2" items="center">
//                   <CircleCheck width="16" color="var(--Su9)" />
//                   <Text size="3">{feature.name}</Text>
//                 </Flex>
//               ))}
//             </Grid>
//           </div>
//         </Paper>
//       </Paper>

//       <aside className="car-details-sidebar">
//         <Paper className="pricing-card" border corner="4" flow="5" p="5">
//           <div className="text-center">
//             <Text size="3" color="b" low transform="uppercase" className="gold-text">
//               {t("cars.pricing")}
//             </Text>
//             <Heading size="5" weight="7">
//               {t("cars.exclusivePricing")}
//             </Heading>
//           </div>

//           <Grid cols={{ default: "1fr", sm: "1fr 1fr" }} gap="3" className="pricing-tabs">
//             <Paper
//               as={Flex}
//               justify="center"
//               items="center"
//               p="2"
//               corner="2"
//               border
//               gap="2"
//               className="car-detail-price"
//             >
//               <Text size="7" leading="1" weight="7">
//                 {car.price.day}
//               </Text>
//               <Text size="3" color="b" low>
//                 {t("cars.dh")} / {t("cars.pricePerDay")}
//               </Text>
//             </Paper>
//             <Paper
//               as={Flex}
//               justify="center"
//               items="center"
//               p="2"
//               gap="2"
//               corner="2"
//               border
//               className="car-detail-price"
//             >
//               <Text size="7" leading="1" weight="6">
//                 {car.price.week}
//               </Text>
//               <Text size="3" color="b" low>
//                 {t("cars.dh")} / {t("cars.week")}
//               </Text>
//             </Paper>
//             <Paper
//               as={Flex}
//               justify="center"
//               gap="2"
//               items="center"
//               p="2"
//               corner="2"
//               border
//               className="car-detail-price"
//             >
//               <Text size="7" leading="1" weight="6">
//                 {car.price.month}
//               </Text>
//               <Text size="3" color="b" low>
//                 {t("cars.dh")} / {t("cars.month")}
//               </Text>
//             </Paper>
//           </Grid>
//           <Paper p="3" className="deposit-section">
//             <Flex justify="between" items="center">
//               <div>
//                 <Text size="1" color="w" weight="7" transform="uppercase">
//                   {t("cars.rental.depositRequired")}
//                 </Text>
//                 <Text size="4" weight="7" color="w">
//                   20,000 {t("cars.dh")}
//                 </Text>
//               </div>
//               <Chips color="w" size="2">
//                 {t("cars.rental.refundable")}
//               </Chips>
//             </Flex>
//           </Paper>
//           <Grid cols={{ default: "1fr 1fr" }} gap="3">
//             <Button fluid color="p" icon={<Phone />} as="a" href={PERSONAL_INFO.socialMedia.call}>
//               {t("cars.call")}
//             </Button>
//             <Button fluid color="su" icon={<Whatsapp />} as="a" href={PERSONAL_INFO.socialMedia.whatsapp}>
//               {t("cars.whatsapp")}
//             </Button>
//           </Grid>

//           <Flex justify="center" gap="4" items="center">
//             <div className="status-indicator">
//               <Text size="2" color="su">
//                 {t("cars.available")}
//               </Text>
//             </div>
//             <Flex gap="2" items="center">
//               <Check width="14" color="var(--Su9)" />
//               <Text size="2">{t("cars.verified")}</Text>
//             </Flex>
//           </Flex>

//           <Separator />

//           <Paper flow="5">
//             <Text size="3" weight="6" className="mb-3">
//               Rental Terms
//             </Text>
//             <Paper flow="3">
//               <div className="term-item">
//                 <Gauge width="16" />
//                 <Text size="2">
//                   {t("cars.rental.mileagePolicy")}: {t("cars.rental.limited")}
//                 </Text>
//               </div>
//               <div className="term-item">
//                 <Settings width="16" />
//                 <Text size="2">{t("cars.rental.fuelPolicy")}: Full to Full</Text>
//               </div>
//               <div className="term-item">
//                 <CreditCard width="16" />
//                 <Text size="2">
//                   {t("cars.rental.depositPolicy")}: {t("cars.rental.required")}
//                 </Text>
//               </div>
//             </Paper>
//           </Paper>
//         </Paper>
//       </aside>
//     </Grid>
//   );
// };

// export default CarDetailPage;

const index = () => {
  return <div>index</div>;
};

export default index;
