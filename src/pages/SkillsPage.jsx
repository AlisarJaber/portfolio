import { useNavigate } from "react-router-dom";
import { Plane, ArrowLeft } from "lucide-react";
import { useSiteSettings } from "../context/SiteSettingsContext";
import HighlightNavigator from "../components/home/HighlightNavigator";
import "../styles/skills.css";

export default function SkillsPage() {
  const navigate = useNavigate();
  const { language } = useSiteSettings();

  const isHebrew = language === "he";

  const content = {
    kicker: isHebrew ? "טרמינל כישורים" : "Skills Terminal",
    title: isHebrew ? "הכלים שאני טסה איתם" : "The Tools I Travel With",
    subtitle: isHebrew
      ? "הטכנולוגיות, הפלטפורמות והכלים שליוו אותי בפרויקטים ובדרך שלי בפיתוח."
      : "The technologies, platforms, and tools that supported my projects and growth as a developer.",
    back: isHebrew ? "חזרה לדף הראשי" : "Back to Home",
    info: {
      focus: isHebrew ? "פוקוס" : "Focus",
      stack: isHebrew ? "סביבת עבודה" : "Work Style",
      growth: isHebrew ? "כיוון" : "Direction",
      focusValue: isHebrew ? "פיתוח מלא" : "Full-Stack Development",
      stackValue: isHebrew ? "מעשי, מסודר, יצירתי" : "Hands-on, Structured, Creative",
      growthValue: isHebrew ? "למידה מתמשכת" : "Continuous Learning",
    },
    groups: [
  {
    title: isHebrew ? "פרונטאנד" : "Frontend",
    items: [
      { name: "HTML", tag: "Structure" },
      { name: "CSS", tag: "Design" },
      { name: "JavaScript", tag: "Logic" },
      { name: "TypeScript", tag: "Typed JS" },
      { name: "React", tag: "UI Building" },
      { name: "Python", tag: "Frontend Language" },
    ],
  },
  {
    title: isHebrew ? "בקאנד ודאטה" : "Backend & Data",
    items: [
      { name: "FastAPI", tag: "API Layer" },
      { name: "SQL", tag: "Queries" },
      { name: "MongoDB", tag: "NoSQL" },
      { name: "PostgreSQL", tag: "Relational DB" },
      { name: "Database Design", tag: "Architecture" },
      { name: "Python", tag: "Backend Language" },
    ],
  },
  {
    title: isHebrew ? "כלים ופלטפורמות" : "Tools & Platforms",
    items: [
      { name: "VS Code", tag: "Development" },
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "OutSystems", tag: "Low-Code" },
      { name: "API Integration", tag: "Data Flow" },
      { name: "Python", tag: "Backend Language" },
    ],
  },
],
  };

  return (
    <main className="skills-page">
      <div className="skills-shell">
        <button
          type="button"
          className="skills-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          <span>{content.back}</span>
        </button>

        <section className="skills-terminal-card">
          <div className="skills-terminal-header">
            <div className="skills-plane-badge">
              <Plane size={22} />
            </div>

            <div className="skills-terminal-copy">
              <span className="skills-kicker">{content.kicker}</span>
              <h1 className="skills-title">{content.title}</h1>
              <p className="skills-subtitle">{content.subtitle}</p>
            </div>
          </div>

          <div className="skills-info-strip">
            <div className="skills-info-item">
              <span className="skills-info-label">{content.info.focus}</span>
              <strong>{content.info.focusValue}</strong>
            </div>

            <div className="skills-info-item">
              <span className="skills-info-label">{content.info.stack}</span>
              <strong>{content.info.stackValue}</strong>
            </div>

            <div className="skills-info-item">
              <span className="skills-info-label">{content.info.growth}</span>
              <strong>{content.info.growthValue}</strong>
            </div>
          </div>

          <div className="skills-groups">
            {content.groups.map((group) => (
              <article key={group.title} className="skills-group-card">
                <h2 className="skills-group-title">{group.title}</h2>

                <div className="skills-chip-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="skills-chip">
                        <span>{item.name}</span>
                        <small>{item.tag}</small>
                    </div>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <HighlightNavigator />
    </main>
  );
}