import { cx, Flex, IconButton } from "@pillar-ui/core";
import { Instagram, Phone, Whatsapp } from "@pillar-ui/icons";
import { PERSONAL_INFO } from "@/constants/personalInfo";

const SocialMedia = ({ className = "" }: { className?: string }) => {
  const cls = cx("social-media-item", { [className]: className });
  return (
    <Flex className="social-media-container" gap="4">
      <IconButton
        color="b"
        variant="mixed"
        title="Go to Instagram"
        icon={<Instagram />}
        className={cls}
        as="a"
        href={PERSONAL_INFO.socialMedia.instagram}
        target="_blank"
        rel="noreferrer"
        size="3"
      />
      <IconButton
        color="b"
        variant="mixed"
        title="Call Us"
        icon={<Phone />}
        className={cls}
        as="a"
        href={`tel:${PERSONAL_INFO.phone}`}
        target="_blank"
        rel="noreferrer"
        size="3"
      />
      <IconButton
        color="b"
        variant="mixed"
        title="Go to Whatsapp"
        icon={<Whatsapp />}
        className={cls}
        as="a"
        href={PERSONAL_INFO.socialMedia.whatsapp}
        target="_blank"
        rel="noreferrer"
        size="3"
      />
    </Flex>
  );
};

export default SocialMedia;
