import { Flex, Paper, Text } from "@pillar-ui/core";
import { ChevronRight } from "@pillar-ui/icons";
import { Link } from "@/i18n/navigation";

import Logo from "../../logo";
import { LINKS } from "./qr-code.data";
import { PERSONAL_INFO } from "@/constants/personalInfo";

function Item({ link, title, icon }: { link: string; title: string; icon: React.ReactNode }) {
  return (
    <Flex as={Link} href={link} className="qr-code_item" target="_blank" rel="noopener noreferrer">
      <Paper
        as={Flex}
        justify="between"
        gap="2"
        border
        corner="3"
        p="3"
        width="100%"
        style={{ width: "100%" }}
      >
        <Flex gap="2">
          {icon}
          <Text size="4" weight="5">
            {title}
          </Text>
        </Flex>
        <ChevronRight width="20" strokeWidth="2" className="qr-code_arrow" />
      </Paper>
    </Flex>
  );
}

function QrCode() {
  return (
    <Flex items="center" justify="center" className="qr-code">
      <Paper shadow="0" flow="5" p="5" background="B1" corner="5" className="qr-code_container">
        <Paper flow="2" p="2" as={Flex} direction="col" items="center">
          <Logo width={180} />
          <Text color="b" low size="3">
            {PERSONAL_INFO.name} in Marrakech
          </Text>
        </Paper>
        <Paper flow="2">
          {LINKS.map((link) => (
            <Item key={link.id} {...link} />
          ))}
        </Paper>
      </Paper>
    </Flex>
    // <html>Hello</html>
  );
}

export default QrCode;
