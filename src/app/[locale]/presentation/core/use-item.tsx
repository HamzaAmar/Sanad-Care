interface UseItemProps {
  label: string;
  description: string;
}

export default function UseItem({ label, description }: UseItemProps) {
  return (
    <div className="use-item">
      <div className="use-pct">{label}</div>
      <div className="use-label">{description}</div>
    </div>
  );
}
