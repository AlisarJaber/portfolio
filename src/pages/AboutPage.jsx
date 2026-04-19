import { useNavigate } from "react-router-dom";
import { Plane, ArrowLeft } from "lucide-react";
import { useSiteSettings } from "../context/SiteSettingsContext";
import profile from "../data/profile";
import "../styles/about.css";
import HighlightNavigator from "../components/home/HighlightNavigator";

export default function AboutPage() {
  const navigate = useNavigate();
  const { language } = useSiteSettings();

  const aboutContent = profile.about[language];
  const isHebrew = language === "he";

  return (
    <main className="about-page">
      <div className="about-shell">
        <button
          type="button"
          className="about-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          <span>{isHebrew ? "חזרה לדף הראשי" : "Back to Home"}</span>
        </button>

        <section className="about-terminal-card">
          <div className="about-terminal-header">
            <div className="about-plane-badge">
              <Plane size={22} />
            </div>

            <div className="about-terminal-copy">
              <span className="about-kicker">
                {isHebrew ? "טרמינל אודות" : "About Terminal"}
              </span>
              <h1 className="about-title">{aboutContent.title}</h1>
              <p className="about-subtitle">{aboutContent.subtitle}</p>
            </div>
          </div>

          <div className="about-info-strip">
            <div className="about-info-item">
              <span className="about-info-label">
                {isHebrew ? "שם" : "Name"}
              </span>
              <strong>Alisar Jaber</strong>
            </div>

            <div className="about-info-item">
              <span className="about-info-label">
                {isHebrew ? "גיל" : "Age"}
              </span>
              <strong>19</strong>
            </div>

            <div className="about-info-item">
              <span className="about-info-label">
                {isHebrew ? "עיר" : "Location"}
              </span>
              <strong>{isHebrew ? "דאלית אל כרמל" : "Daliyat al-Karmel"}</strong>
            </div>
          </div>

          <div className="about-body">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
      <HighlightNavigator />
    </main>
  );
}