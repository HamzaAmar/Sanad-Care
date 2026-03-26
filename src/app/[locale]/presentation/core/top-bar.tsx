interface TopBarProps {
  current: number;
  total: number;
  onToggleNav: () => void;
}
export default function TopBar({ current, total, onToggleNav }: TopBarProps) {
  return (
    <div id="topbar">
      <button type="button" id="toggle-nav" onClick={onToggleNav}>
        ≡ Menu
      </button>
      <div id="slide-counter">
        <span>{current + 1}</span> / <span>{total}</span>
      </div>
    </div>
  );
}
