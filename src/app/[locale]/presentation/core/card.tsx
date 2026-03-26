interface CardProps {
  icon?: React.ReactNode;
  title?: string;
  body?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
export default function Card({ icon, title, body, style, titleStyle, children }: CardProps) {
  return (
    <div className="card" style={style}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && (
        <div className="card-title" style={titleStyle}>
          {title}
        </div>
      )}
      {body && <div className="card-body">{body}</div>}
      {children}
    </div>
  );
}
