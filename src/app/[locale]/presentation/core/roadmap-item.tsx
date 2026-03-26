interface RoadmapItemProps {
  step: number;
  phase: string;
  description: string;
  active?: boolean;
}
export default function RoadmapItem({ step, phase, description, active }: RoadmapItemProps) {
  return (
    <div className={`roadmap-item ${active ? "active" : ""}`}>
      <div className="roadmap-dot">{step}</div>
      <div className="roadmap-content">
        <div className="roadmap-phase">{phase}</div>
        <div className="roadmap-desc">{description}</div>
      </div>
    </div>
  );
}
