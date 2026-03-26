interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}
export default function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <>
      <button type="button" id="prev-btn" onClick={onPrev}>
        ←
      </button>
      <button type="button" id="next-btn" onClick={onNext}>
        →
      </button>
    </>
  );
}
