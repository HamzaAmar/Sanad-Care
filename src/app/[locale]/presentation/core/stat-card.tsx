interface StatCardProps {
  value: string;
  label: string;
  style?: React.CSSProperties;
}
export default function StatCard({ value, label, style }: StatCardProps) {
  return (
    <div className="stat-card" style={style}>
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
