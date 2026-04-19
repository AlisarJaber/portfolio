import { useNavigate } from "react-router-dom";
import { ArrowUpRight, PlaneTakeoff, Camera, CircleDot } from "lucide-react";
import projects from "../../data/projects";
import { useSiteSettings } from "../../context/SiteSettingsContext";

const content = {
  en: {
    title: "Posts",
    label: "Departure Board",
    gate: "Gate",
    photos: "photos",
    active: "Active",
    details: "Open Project",
  },
  he: {
    title: "פוסטים",
    label: "לוח יציאות",
    gate: "שער",
    photos: "תמונות",
    active: "פעיל",
    details: "לפתיחת הפרויקט",
  },
};

function getLocalizedValue(value, language) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value[language] || value.en || value.he || "";
  }
  return "";
}

export default function PostsGrid() {
  const navigate = useNavigate();
  const { language } = useSiteSettings();
  const t = content[language];

  return (
    <section className="posts-grid-section">
      <div className="section-line" />

      <div className="posts-title-row">
        <div className="grid-icon" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2>{t.title}</h2>
      </div>

      <div className="posts-grid">
        {projects.map((project) => {
          const projectTitle = getLocalizedValue(project.title, language);
          const projectDescription = getLocalizedValue(
            project.shortDescription,
            language
          );
          const photosCount = project.images?.length || 0;
          const stackPreview = project.techStack?.slice(0, 3) || [];

          return (
            <button
              key={project.id}
              type="button"
              className="post-card terminal-post-card"
              onClick={() =>
                navigate(`/projects/${project.id}`, {
                  state: { from: "home-posts" },
                })
              }
            >
              <div className="terminal-post-top">
                <div className="terminal-post-label">
                  <PlaneTakeoff size={15} />
                  <span>{t.label}</span>
                </div>

                <div className="terminal-post-status">
                  <CircleDot size={12} />
                  <span>{t.active}</span>
                </div>
              </div>

              <div className="terminal-post-body">
                <div className="terminal-post-gate-row">
                  <span className="terminal-post-gate-label">{t.gate}</span>
                  <strong className="terminal-post-gate-value">
                    {project.gate}
                  </strong>
                </div>

                <h3 className="terminal-post-title">{projectTitle}</h3>
                <p className="terminal-post-description">
                  {projectDescription}
                </p>
              </div>

              <div className="terminal-post-stack">
                {stackPreview.map((item) => (
                  <span key={item} className="terminal-post-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="terminal-post-bottom">
                <div className="terminal-post-photos">
                  <Camera size={15} />
                  <span>
                    {photosCount} {t.photos}
                  </span>
                </div>

                <div className="terminal-post-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="terminal-post-track" aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </section>
  );
}