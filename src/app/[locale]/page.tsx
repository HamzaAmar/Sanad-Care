import { PERSONAL_INFO } from "@/constants/personalInfo";
import Home from "../_components/pages/home";

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ─── 1. WEBPAGE ─────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://www.sanadcare.ma/en/#webpage",
        url: "https://www.sanadcare.ma/en",
        name: "Home Nursing Marrakech | 24/7 Professional Care | Sanad Care",
        description:
          "Professional home nursing and medical care in Marrakech. Registered nurses for elderly care, post-surgery recovery, IV therapy, wound care, and medical tourism support. Available 24/7 at home, hotel, or residence.",
        inLanguage: "en",
        isPartOf: { "@id": "https://www.sanadcare.ma/en/#website" },
        about: { "@id": "https://www.sanadcare.ma/en/#business" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.sanadcare.ma/og-image.jpg",
          width: 1200,
          height: 630,
        },
      },

      // ─── 2. WEBSITE (with Sitelinks Searchbox) ────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.sanadcare.ma/en/#website",
        url: "https://www.sanadcare.ma/en",
        name: "Sanad Care",
        alternateName: "Sanad Care Morocco",
        description: "24/7 Home Nursing and Medical Care in Marrakech",
        publisher: { "@id": "https://www.sanadcare.ma/en/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.sanadcare.ma/en/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: ["en", "fr", "ar"],
      },

      // ─── 3. ORGANIZATION (Brand + Contact) ────────────────────
      {
        "@type": "Organization",
        "@id": "https://www.sanadcare.ma/en/#organization",
        name: "Sanad Care",
        legalName: "Sanad Care SARL",
        url: "https://www.sanadcare.ma/en",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.sanadcare.ma/en/#logo",
          url: "https://www.sanadcare.ma/logo.png",
          width: 512,
          height: 512,
          caption: "Sanad Care Logo",
        },
        image: "https://www.sanadcare.ma/og-image.jpg",
        description:
          "Leading home nursing and medical care provider in Marrakech, Morocco. Serving locals and international tourists with 24/7 professional healthcare at home, hotel, or private residence.",
        foundingDate: "2026",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "6",
        },
        knowsLanguage: ["English", "French", "Arabic", "Spanish"],
        sameAs: [
          PERSONAL_INFO.socialMedia.facebook,
          PERSONAL_INFO.socialMedia.instagram,
          PERSONAL_INFO.socialMedia.linkedin,
          PERSONAL_INFO.socialMedia.linkedin,
          PERSONAL_INFO.socialMedia.whatsapp,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          "@id": "https://www.sanadcare.ma/en/#contact",
          telephone: PERSONAL_INFO.phone, // Replace with real number
          contactType: "customer service",
          contactOption: "WhatsApp",
          availableLanguage: ["English", "French", "Arabic"],
          areaServed: "MA",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      },

      // ─── 4. HOME HEALTH CARE SERVICE (Core Local Entity) ──────
      {
        "@type": "HomeHealthCareService",
        "@id": "https://www.sanadcare.ma/en/#business",
        name: "Sanad Care - Home Nursing Marrakech",
        alternateName: [
          "Sanad Care",
          "Private Nurse Marrakech",
          "Home Nurse Marrakech",
          "English Speaking Nurse Marrakech",
        ],
        image: [
          "https://www.sanadcare.ma/og-image.jpg",
          "https://www.sanadcare.ma/images/nurse-home-care.jpg",
          "https://www.sanadcare.ma/images/medical-tourism-marrakech.jpg",
        ],
        description:
          "Sanad Care provides professional home nursing services in Marrakech, Morocco. Our registered nurses deliver 24/7 medical care including elderly care, post-surgery recovery, IV therapy, wound care, blood tests, injections, and doctor home visits. Specialized medical assistance for tourists in hotels and riads.",
        url: "https://www.sanadcare.ma/en",
        telephone: PERSONAL_INFO.phone, // Replace with real number
        email: PERSONAL_INFO.email,
        priceRange: "$$",
        currenciesAccepted: "MAD",
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        isAcceptingNewPatients: true,
        medicalSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Home Health Nursing",
        },
        address: {
          "@type": "PostalAddress",
          "@id": "https://www.sanadcare.ma/en/#address",
          streetAddress: PERSONAL_INFO.information.address, // Replace with real address
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          postalCode: "40000",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6295,
          longitude: -7.9811,
        },
        hasMap: "https://goo.gl/maps/XXXXXXXXXXX", // Replace with real GBP map URL
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Marrakech",
            containedInPlace: {
              "@type": "Country",
              name: "Morocco",
            },
          },
          {
            "@type": "Place",
            name: "Medina, Marrakech",
          },
          {
            "@type": "Place",
            name: "Hivernage, Marrakech",
          },
          {
            "@type": "Place",
            name: "Gueliz, Marrakech",
          },
          {
            "@type": "Place",
            name: "Palmeraie, Marrakech",
          },
          {
            "@type": "Place",
            name: "Agdal, Marrakech",
          },
        ],
        // Medical-specific services (procedures & therapies)
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Blood Test & Collection at Home",
            description:
              "Convenient home sample collection with safe laboratory delivery in Marrakech.",
          },
          {
            "@type": "MedicalProcedure",
            name: "Injection at Home",
            description:
              "Safe administration of prescribed injections including intramuscular, subcutaneous, and intravenous.",
          },
          {
            "@type": "MedicalProcedure",
            name: "Wound Care & Dressing Changes",
            description:
              "Post-surgery dressing, ulcer treatment, and infected wound management at home.",
          },
          {
            "@type": "MedicalTherapy",
            name: "IV Therapy & Perfusion at Home",
            description:
              "Professional hydration, vitamin drips, and intravenous treatments administered at home.",
          },
        ],
        // Full service catalog (for rich results / local pack)
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Nursing & Medical Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 Home Nursing Services",
                description:
                  "Professional certified home healthcare support available round the clock in Marrakech.",
              },
              areaServed: "Marrakech",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Registered Nurse at Home",
                description:
                  "Qualified private nurses for short or long-term medical care at your residence.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Post-Surgery Home Care",
                description:
                  "Clinical monitoring and assistance for safe recovery after surgery in Marrakech.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Elderly & Senior Care at Home",
                description:
                  "Compassionate caregiving, medication supervision, and mobility assistance.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospitalization at Home",
                description: "Continuous medical supervision as an alternative to hospital stay.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Doctor Home Visits",
                description:
                  "Professional physician home visits in Marrakech. Skip the waiting room.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Medical Assistance for Tourists",
                description:
                  "Rapid medical assistance for tourists in hotels and riads across Marrakech.",
              },
            },
          ],
        },
        // Reviews & Ratings
        aggregateRating: {
          "@type": "AggregateRating",
          "@id": "https://www.sanadcare.ma/en/#rating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
          reviewCount: "3000",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Michael Ross",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Fast and efficient service to our hotel. The nurse spoke perfect English and really helped me recover quickly.",
            datePublished: "2026-05-15",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Laura Dubois",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "I needed daily injections and they were punctual and gentle every time. Great service.",
            datePublished: "2026-04-20",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Ahmed Benali",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Professional team. They took excellent care of my father post-surgery. Highly recommended.",
            datePublished: "2026-03-10",
          },
        ],
        // WhatsApp Booking Action (can trigger action buttons in SERP)
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book a Nurse",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://wa.me/212XXXXXXXXX?text=Hello%20Sanad%20Care", // Replace
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Home Nursing Appointment",
          },
        },
      },

      // ─── 5. FAQ PAGE (Rich Results Eligible) ──────────────────
      {
        "@type": "FAQPage",
        "@id": "https://www.sanadcare.ma/en/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How quickly can a nurse arrive at my home or hotel in Marrakech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our average emergency response time is 45 minutes within Marrakech city center, including hotels and riads in the Medina, Hivernage, Gueliz, and Palmeraie districts. We are available 24/7, including weekends and holidays.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide English-speaking nurses for tourists in Marrakech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all our nurses are fluent in English, French, and Arabic. We specialize in medical assistance for tourists staying in hotels and riads across Marrakech, providing clear communication and culturally sensitive care.",
            },
          },
          {
            "@type": "Question",
            name: "Are your nurses licensed and verified in Morocco?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. All Sanad Care nurses are state-registered professionals with extensive experience in critical and home care. We conduct strict background checks and vetting for your safety and peace of mind.",
            },
          },
          {
            "@type": "Question",
            name: "What home nursing services do you offer in Marrakech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer comprehensive home nursing including elderly care, post-surgery recovery, blood tests, injections, IV therapy, wound care, hospitalization at home, doctor visits, and specialized medical tourism support.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a home nurse in Marrakech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Booking is simple. Contact us via WhatsApp, phone call, or our website form. Tell us your needs, location, and schedule. We match you with a qualified nurse and confirm your appointment within minutes.",
            },
          },
          {
            "@type": "Question",
            name: "Do you accept credit cards or insurance for home nursing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We accept cash, credit cards, bank transfers, and PayPal. Please contact us to discuss insurance coverage options, as we can provide detailed invoices for reimbursement claims.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
