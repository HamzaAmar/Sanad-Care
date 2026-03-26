interface FlowStepProps {
  icon: string;
  label: string;
}
export default function FlowStep({ icon, label }: FlowStepProps) {
  return (
    <div className="flow-step">
      <div className="flow-icon">{icon}</div>
      <div className="flow-label">{label}</div>
    </div>
  );
}
