import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteSettings } from "../context/SiteSettingsContext";
import projects from "../data/projects";
import TechStack from "../components/projects/TechStack";
import "../styles/detail.css";

function getLocalizedValue(value, language) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value[language] || value.en || value.he || "";
  }
  return "";
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useSiteSettings();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isHebrew = language === "he";

  const content = {
    notFound: isHebrew ? "הפרויקט לא נמצא" : "Project not found",
    backToProjects: isHebrew ? "חזרה לפרויקטים" : "Back to projects",
    backToTerminal: isHebrew ? "חזרה לטרמינל" : "Return to terminal",
    backToHome: isHebrew ? "חזרה לדף הבית" : "Back to home",
    gallery: isHebrew ? "גלריית פרויקט" : "Project Gallery",
    whatItIs: isHebrew ? "מה זה" : "What it is",
    whyBuilt: isHebrew ? "למה בניתי אותו" : "Why I built it",
    techStack: isHebrew ? "טכנולוגיות" : "Tech stack",
    liveDemo: isHebrew ? "צפייה בפרויקט" : "Live Demo",
    github: isHebrew ? "גיטהאב" : "GitHub",
    imageLabel: isHebrew ? "תמונה" : "Image",
    of: isHebrew ? "מתוך" : "of",
    previousImage: isHebrew ? "תמונה קודמת" : "Previous image",
    nextImage: isHebrew ? "תמונה הבאה" : "Next image",
  };

  const project = useMemo(
    () => projects.find((item) => item.id === id),
    [id]
  );

  const images = project?.images?.length
    ? project.images
    : project?.image
      ? [project.image]
      : [];

  const backPath =
    location.state?.from === "home-posts" ? "/" : "/projects";

  const backLabel =
    location.state?.from === "home-posts"
      ? content.backToHome
      : content.backToTerminal;

  useEffect(() => {
    setCurrentImageIndex(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!project) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <h1>{content.notFound}</h1>
          <button className="back-link" onClick={() => navigate("/projects")}>
            ← {content.backToProjects}
          </button>
        </div>
      </main>
    );
  }

  const projectTitle = getLocalizedValue(project.title, language);
  const projectShortDescription = getLocalizedValue(
    project.shortDescription,
    language
  );
  const projectWhyBuilt = getLocalizedValue(project.whyBuilt, language);

  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentImageIndex];
  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  const goToPrevImage = () => {
    if (isFirstImage) return;
    setCurrentImageIndex((prev) => prev - 1);
  };

  const goToNextImage = () => {
    if (isLastImage) return;
    setCurrentImageIndex((prev) => prev + 1);
  };

  return (
    <main className="detail-page">
      <div className="detail-container">
        <button className="back-link" onClick={() => navigate(backPath)}>
          ← {backLabel}
        </button>

        <div className="detail-hero-wrap">
          {hasMultipleImages && (
            <div className="detail-gallery-kicker">{content.gallery}</div>
          )}

          <div className="detail-hero">
            {currentImage ? (
              <>
                <img
                  src={currentImage}
                  alt={`${projectTitle} - ${content.imageLabel} ${currentImageIndex + 1}`}
                />

                {hasMultipleImages && !isFirstImage && (
                  <button
                    type="button"
                    className="detail-nav-button detail-nav-button-left"
                    onClick={goToPrevImage}
                    aria-label={content.previousImage}
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {hasMultipleImages && !isLastImage && (
                  <button
                    type="button"
                    className="detail-nav-button detail-nav-button-right"
                    onClick={goToNextImage}
                    aria-label={content.nextImage}
                  >
                    <ChevronRight size={20} />
                  </button>
                )}

                {hasMultipleImages && (
                  <>
                    <div className="detail-image-counter">
                      <span>
                        {currentImageIndex + 1} {content.of} {images.length}
                      </span>
                    </div>

                    <div className="detail-dots">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`detail-dot ${
                            index === currentImageIndex ? "is-active" : ""
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`${content.imageLabel} ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="detail-placeholder" />
            )}
          </div>
        </div>

        <h1>{projectTitle}</h1>

        <section className="detail-section">
          <h2>{content.whatItIs}</h2>
          <p>{projectShortDescription}</p>
        </section>

        <section className="detail-section">
          <h2>{content.whyBuilt}</h2>
          <p>{projectWhyBuilt}</p>
        </section>

        <section className="detail-section">
          <h2>{content.techStack}</h2>
          <TechStack items={project.techStack} />
        </section>

        {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
          <section className="detail-links">
            {project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {content.liveDemo}
              </a>
            )}

            {project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                {content.github}
              </a>
            )}
          </section>
        )}
      </div>
    </main>
  );
}