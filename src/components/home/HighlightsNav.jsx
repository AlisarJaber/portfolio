import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserRound, FolderKanban, Wrench, Mail } from "lucide-react";
import { useSiteSettings } from "../../context/SiteSettingsContext";
import profile from "../../data/profile";
import "../../styles/highlights.css";

const iconMap = {
  about: UserRound,
  projects: FolderKanban,
  skills: Wrench,
  contact: Mail,
};

export default function HighlightsNav() {
  const { language } = useSiteSettings();
  const navigate = useNavigate();
  const location = useLocation();

  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [planeStyle, setPlaneStyle] = useState({
    left: 0,
    top: 0,
    visible: false,
  });
  const [isFlying, setIsFlying] = useState(false);

  const items = useMemo(() => profile.highlights, []);

  function movePlaneToIndex(index) {
    const listElement = listRef.current;
    const targetElement = itemRefs.current[index];

    if (!listElement || !targetElement) return;

    const listRect = listElement.getBoundingClientRect();
    const circle = targetElement.querySelector(".highlight-circle");

    if (!circle) return;

    const circleRect = circle.getBoundingClientRect();

    setPlaneStyle({
      left: circleRect.left - listRect.left + circleRect.width / 2 - 12,
      top: circleRect.top - listRect.top - 26,
      visible: true,
    });
  }

  useEffect(() => {
    const activeIndex = items.findIndex((item) => item.path === location.pathname);
    const targetIndex = activeIndex >= 0 ? activeIndex : 0;

    requestAnimationFrame(() => {
      movePlaneToIndex(targetIndex);
    });

    function handleResize() {
      movePlaneToIndex(targetIndex);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname, items, language]);

  function handleMouseEnter(index) {
    movePlaneToIndex(index);
  }

  function handleNavigate(path, index) {
    if (isFlying) return;

    setIsFlying(true);
    movePlaneToIndex(index);

    setTimeout(() => {
      navigate(path);
      setIsFlying(false);
    }, 280);
  }

  return (
    <section className="highlights-nav">
      <div className="section-line" />

      <div className="highlights-list-wrap" ref={listRef}>
        <div
          className={`highlight-plane ${planeStyle.visible ? "visible" : ""}`}
          style={{
            left: `${planeStyle.left}px`,
            top: `${planeStyle.top}px`,
          }}
          aria-hidden="true"
        >
          ✈
        </div>

        <div className="highlights-list">
          {items.map((item, index) => {
            const Icon = iconMap[item.id];
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.id}
                type="button"
                className={`highlight-item ${isActive ? "active" : ""}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onFocus={() => handleMouseEnter(index)}
                onClick={() => handleNavigate(item.path, index)}
              >
                <div className="highlight-circle">
                  {Icon ? <Icon size={28} strokeWidth={2.1} /> : null}
                </div>

                <span className="highlight-label-text">
                  {item.label[language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}