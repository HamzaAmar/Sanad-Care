/** biome-ignore-all lint/suspicious/noArrayIndexKey: I don't care */
interface TeamCardProps {
  avatar: string;
  name: string;
  type: string;
  tags: string[];
}
export default function TeamCard({ avatar, name, type, tags }: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-avatar">{avatar}</div>
      <div>
        <div className="team-name">{name}</div>
        <div className="team-role">{type}</div>
        <div className="team-tags">
          {tags.map((tag, i) => (
            <span className="tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
