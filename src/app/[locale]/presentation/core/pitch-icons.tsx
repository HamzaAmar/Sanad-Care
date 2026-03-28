import {
  Bell,
  Building,
  Calendar,
  Cash,
  ChartLine,
  CheckList,
  CircleWarning,
  Clipboard,
  Database,
  FileText,
  Globe,
  HeartMonitor,
  Home,
  ListCheck,
  Messages,
  Repeat,
  Search,
  Settings,
  Shield,
  Stethoscope,
  Users,
} from "@pillar-ui/icons";
import type { SVGProps } from "react";

type IconSvg = SVGProps<SVGSVGElement>;

export const PITCH_ICON_MAP = {
  clipboard: Clipboard,
  chartLine: ChartLine,
  users: Users,
  listCheck: ListCheck,
  bell: Bell,
  search: Search,
  checkList: CheckList,
  calendar: Calendar,
  heartMonitor: HeartMonitor,
  fileText: FileText,
  circleWarning: CircleWarning,
  messages: Messages,
  globe: Globe,
  database: Database,
  shield: Shield,
  stethoscope: Stethoscope,
  settings: Settings,
  home: Home,
  cash: Cash,
  building: Building,
  repeat: Repeat,
} as const;

export type PitchIconId = keyof typeof PITCH_ICON_MAP;

export function PitchIcon({
  id,
  size = 22,
  className,
  ...rest
}: {
  id: PitchIconId;
  size?: number;
  className?: string;
} & IconSvg) {
  const Cmp = PITCH_ICON_MAP[id];
  return (
    <Cmp
      width={size}
      height={size}
      strokeWidth={1.35}
      className={className ?? "pitch-icon-svg"}
      aria-hidden
      {...rest}
    />
  );
}
