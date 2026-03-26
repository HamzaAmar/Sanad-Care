interface ValueItemProps {
  emoji: string;
  who: string;
  text: string;
}

export default function ValueItem({ emoji, who, text }: ValueItemProps) {
  return (
    <div className="value-item">
      <div className="value-emoji">{emoji}</div>
      <div>
        <div className="value-who">{who}</div>
        <div className="value-text">{text}</div>
      </div>
    </div>
  );
}
