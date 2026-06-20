import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Envelop, Globe, Instagram, Linkdin, Phone, Tiktok, Whatsapp } from "@pillar-ui/icons";

export const LINKS = [
  {
    id: "1",
    title: "Site",
    link: PERSONAL_INFO.domain,
    icon: <Globe width="24" />,
  },
  {
    id: "2",
    title: "Instagram",
    link: PERSONAL_INFO.socialMedia.instagram,
    icon: <Instagram width="24" />,
  },
  {
    id: "3",
    title: "Tiktok",
    link: PERSONAL_INFO.socialMedia.tiktok,
    icon: <Tiktok width="24" />,
  },
  {
    id: "4",
    title: "Linkedin",
    link: PERSONAL_INFO.socialMedia.linkedin,
    icon: <Linkdin width="24" />,
  },
  {
    id: "5",
    title: "Call",
    link: PERSONAL_INFO.contact.phone,
    icon: <Phone width="24" />,
  },
  {
    id: "6",
    title: "Whatsapp",
    link: PERSONAL_INFO.contact.whatsapp,
    icon: <Whatsapp width="24" />,
  },
  {
    id: "6",
    title: "Facebook",
    link: PERSONAL_INFO.socialMedia.facebook,
    icon: <Whatsapp width="24" />,
  },
  {
    id: "7",
    title: "Mail",
    link: PERSONAL_INFO.contact.email,
    icon: <Envelop width="24" />,
  },
];
