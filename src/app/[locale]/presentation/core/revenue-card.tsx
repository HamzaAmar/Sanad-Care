interface RevenueCardProps {
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
}
export default function RevenueCard({ icon, title, subtitle, badge }: RevenueCardProps) {
  return (
    <div className="rev-card">
      <div className="rev-icon">{icon}</div>
      <div className="rev-title">{title}</div>
      <div className="rev-sub">{subtitle}</div>
      <div className="rev-badge">{badge}</div>
    </div>
  );
}
