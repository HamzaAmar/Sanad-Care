import { Flex, Text } from "@pillar-ui/core";
import { Menu } from "@pillar-ui/icons";

interface TopBarProps {
  current: number;
  total: number;
  onToggleNav: () => void;
}
export default function TopBar({ current, total, onToggleNav }: TopBarProps) {
  return (
    <div id="topbar">
      <button type="button" id="toggle-nav" onClick={onToggleNav}>
        <Flex as="span" gap="2" items="center">
          <Menu width={18} height={18} strokeWidth={1.35} aria-hidden />
          <Text size="2">Menu</Text>
        </Flex>
      </button>
      <div id="slide-counter">
        <span>{current + 1}</span> / <span>{total}</span>
      </div>
    </div>
  );
}
