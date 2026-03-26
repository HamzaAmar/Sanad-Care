interface PointListProps {
  items: { id: string; item: string }[];
}
export default function PointList({ items }: PointListProps) {
  return (
    <ul className="point-list">
      {items.map((item) => (
        <li key={item.id}>{item.item}</li>
      ))}
    </ul>
  );
}
