import { useNavigate } from "react-router-dom";
import { Plane, ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { useSiteSettings } from "../context/SiteSettingsContext";
import projects from "../data/projects";
import "../styles/projects.css";
import HighlightNavigator from "../components/home/HighlightNavigator";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { language } = useSiteSettings();

  const isHebrew = language === "he";

  const content = {
    kicker: isHebrew ? "טרמינל פרויקטים" : "Projects Terminal",
    title: isHebrew ? "הטיסות הפעילות שלי" : "Active Project Flights",
    subtitle: isHebrew
      ? "אוסף הפרויקטים שבניתי, פיתחתי ועיצבתי לאורך הדרך."
      : "A collection of projects I designed, built, and developed along the way.",
    boardLabels: {
      total: isHebrew ? "סה״כ פרויקטים" : "Total Projects",
      status: isHebrew ? "סטטוס" : "Status",
      route: isHebrew ? "מסלול" : "Route",
      active: isHebrew ? "באוויר" : "In Motion",
      portfolioRoute: isHebrew ? "תיק עבודות / פיתוח" : "Portfolio / Development",
    },
    card: {
      gate: isHebrew ? "שער" : "Gate",
      stack: isHebrew ? "טכנולוגיות" : "Stack",
      mission: isHebrew ? "למה בניתי אותו" : "Why I Built It",
      live: isHebrew ? "לצפייה" : "Live",
      code: isHebrew ? "קוד" : "Code",
      details: isHebrew ? "לפרטים" : "View Details",
      unavailable: isHebrew ? "בקרוב" : "Soon",
    },
    back: isHebrew ? "חזרה לדף הראשי" : "Back to Home",
  };

  return (
    <main className="projects-page">
      <div className="projects-shell">
        <button
          type="button"
          className="projects-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          <span>{content.back}</span>
        </button>

        <section className="projects-terminal-card">
          <div className="projects-terminal-header">
            <div className="projects-plane-badge">
              <Plane size={22} />
            </div>

            <div className="projects-terminal-copy">
              <span className="projects-kicker">{content.kicker}</span>
              <h1 className="projects-title">{content.title}</h1>
              <p className="projects-subtitle">{content.subtitle}</p>
            </div>
          </div>

          <div className="projects-info-strip">
            <div className="projects-info-item">
              <span className="projects-info-label">
                {content.boardLabels.total}
              </span>
              <strong>{projects.length}</strong>
            </div>

            <div className="projects-info-item">
              <span className="projects-info-label">
                {content.boardLabels.status}
              </span>
              <strong>{content.boardLabels.active}</strong>
            </div>

            <div className="projects-info-item">
              <span className="projects-info-label">
                {content.boardLabels.route}
              </span>
              <strong>{content.boardLabels.portfolioRoute}</strong>
            </div>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="project-card-top">
                  <div>
                    <span className="project-gate">
                      {content.card.gate} {project.gate}
                    </span>
                    <h2 className="project-name">{project.title}</h2>
                  </div>

                  <span className="project-status">
                    {isHebrew ? "פעיל" : "Active"}
                  </span>
                </div>

                <p className="project-description">{project.shortDescription}</p>

                <div className="project-stack">
                  {project.techStack.map((item) => (
                    <span key={item} className="project-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-why">
                  <span className="project-section-label">
                    {content.card.mission}
                  </span>
                  <p>{project.whyBuilt}</p>
                </div>

                <div
                  className="project-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="project-action-button primary"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <ArrowUpRight size={16} />
                    <span>{content.card.details}</span>
                  </button>

                  <a
                    className={`project-action-button ${project.liveUrl === "#" ? "is-disabled" : ""}`}
                    href={project.liveUrl === "#" ? undefined : project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (project.liveUrl === "#") e.preventDefault();
                    }}
                  >
                    <ArrowUpRight size={16} />
                    <span>
                      {project.liveUrl === "#"
                        ? content.card.unavailable
                        : content.card.live}
                    </span>
                  </a>

                  <a
                    className={`project-action-button ${project.githubUrl === "#" ? "is-disabled" : ""}`}
                    href={project.githubUrl === "#" ? undefined : project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (project.githubUrl === "#") e.preventDefault();
                    }}
                  >
                    <Globe size={16} />
                    <span>
                      {project.githubUrl === "#"
                        ? content.card.unavailable
                        : content.card.code}
                    </span>
                  </a>
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