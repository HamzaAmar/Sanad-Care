import { ArrowLeft, ArrowRight } from "@pillar-ui/icons";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}
export default function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <>
      <button type="button" id="prev-btn" onClick={onPrev} aria-label="Slide précédente">
        <ArrowLeft width={20} height={20} strokeWidth={1.35} aria-hidden />
      </button>
      <button type="button" id="next-btn" onClick={onNext} aria-label="Slide suivante">
        <ArrowRight width={20} height={20} strokeWidth={1.35} aria-hidden />
      </button>
    </>
  );
}
