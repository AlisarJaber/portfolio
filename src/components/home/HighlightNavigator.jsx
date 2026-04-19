import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import profile from "../../data/profile";
import "../../styles/highlightNavigator.css";

export default function HighlightNavigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const highlights = profile.highlights;

  const currentIndex = highlights.findIndex(
    (item) => item.path === location.pathname
  );

  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const prevIndex = (safeIndex - 1 + highlights.length) % highlights.length;
  const nextIndex = (safeIndex + 1) % highlights.length;

  const prevItem = highlights[prevIndex];
  const nextItem = highlights[nextIndex];

  const isFirst = safeIndex === 0; // <-- About

  function triggerFlight(direction, path) {
    const plane = document.querySelector(".navigator-plane");

    if (plane) {
      plane.classList.remove("fly-left", "fly-right");

      void plane.offsetWidth;

      plane.classList.add(direction === "left" ? "fly-left" : "fly-right");

      setTimeout(() => {
        navigate(path, { state: { source: "highlight" } });
        plane.classList.remove("fly-left", "fly-right");
      }, 360);
    } else {
      navigate(path, { state: { source: "highlight" } });
    }
  }

  return (
    <div className="highlight-navigator">
      <div className="navigator-plane">✈</div>

      {/* ⛔ אל תציג אם זה About */}
      {!isFirst && (
        <button
          type="button"
          className="navigator-button prev-button"
          onClick={() => triggerFlight("left", prevItem.path)}
        >
          <ArrowLeft size={20} />
        </button>
      )}

      <button
        type="button"
        className="navigator-button next-button"
        onClick={() => triggerFlight("right", nextItem.path)}
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}