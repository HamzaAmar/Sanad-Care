import { PERSONAL_INFO } from "@/constants/personalInfo";
import {
  Envelop,
  Facebook,
  Globe,
  Instagram,
  Linkdin,
  Phone,
  Tiktok,
  Whatsapp,
} from "@pillar-ui/icons";

export const LINKS = [
  {
    id: "site",
    title: "Site",
    link: PERSONAL_INFO.domain,
    icon: <Globe width="24" />,
  },
  {
    id: "instagram",
    title: "Instagram",
    link: PERSONAL_INFO.socialMedia.instagram,
    icon: <Instagram width="24" />,
  },
  {
    id: "tiktok",
    title: "Tiktok",
    link: PERSONAL_INFO.socialMedia.tiktok,
    icon: <Tiktok width="24" />,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    link: PERSONAL_INFO.socialMedia.linkedin,
    icon: <Linkdin width="24" />,
  },
  {
    id: "call",
    title: "Call",
    link: PERSONAL_INFO.contact.phone,
    icon: <Phone width="24" />,
  },
  {
    id: "whatsapp",
    title: "Whatsapp",
    link: PERSONAL_INFO.contact.whatsapp,
    icon: <Whatsapp width="24" />,
  },
  {
    id: "facebook",
    title: "Facebook",
    link: PERSONAL_INFO.socialMedia.facebook,
    icon: <Facebook width="24" />,
  },
  {
    id: "mail",
    title: "Mail",
    link: PERSONAL_INFO.contact.email,
    icon: <Envelop width="24" />,
  },
];
