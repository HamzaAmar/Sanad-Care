interface CompareColumnProps {
  type: "bad" | "good";
  heading: string;
  items: { id: string; item: string }[];
}
export default function CompareColumn({ type, heading, items }: CompareColumnProps) {
  return (
    <div className={`compare-col ${type}`}>
      <div className="compare-head">{heading}</div>
      {items.map((item) => (
        <div className="compare-item" key={item.id}>
          {item.item}
        </div>
      ))}
    </div>
  );
}
