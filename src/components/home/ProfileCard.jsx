import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../data/profile";
import Button from "../common/Button";
import profileImage from "../../assets/images/profile.jpg";
import { useSiteSettings } from "../../context/SiteSettingsContext";

const content = {
  en: {
    contact: "Contact me",
    settings: "Settings",
    finish: "Finish ✈",
    appearance: "Appearance",
    dark: "Dark mode",
    light: "Light mode",
    language: "Language",
    english: "English",
    hebrew: "עברית",
  },
  he: {
    contact: "יצירת קשר",
    settings: "הגדרות",
    finish: "סיום ✈",
    appearance: "תצוגה",
    dark: "מצב כהה",
    light: "מצב בהיר",
    language: "שפה",
    english: "English",
    hebrew: "עברית",
  },
};

export default function ProfileCard() {
  const [showSettings, setShowSettings] = useState(false);
  const { theme, setTheme, language, setLanguage } = useSiteSettings();
  const settingsRef = useRef(null);
  const navigate = useNavigate();
  const t = content[language];

  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    }

    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  return (
    <section className="profile-card">
      <div className="profile-top">
        <div className="profile-avatar">
          <img
            src={profileImage}
            alt={profile.name}
            className="profile-avatar-image"
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-role">@{profile.role[language]}</p>

          <div className="profile-stats">
            {profile.stats.map((stat) => (
              <div key={stat.label.en} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-bio">
        {profile.bioLines[language].map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="profile-actions">
        <Button
          className="button-primary"
          onClick={() => navigate("/contact")}
        >
          {t.contact}
        </Button>

        <div className="settings-wrapper" ref={settingsRef}>
          <Button
            className="button-secondary"
            onClick={() => setShowSettings((prev) => !prev)}
          >
            {t.settings}
          </Button>

          {showSettings && (
            <div className="settings-menu">
              <div className="settings-group">
                <p className="settings-label">{t.appearance}</p>

                <button
                  className={`settings-option ${theme === "dark" ? "active" : ""}`}
                  onClick={() => setTheme("dark")}
                >
                  {t.dark}
                </button>

                <button
                  className={`settings-option ${theme === "light" ? "active" : ""}`}
                  onClick={() => setTheme("light")}
                >
                  {t.light}
                </button>
              </div>

              <div className="settings-group">
                <p className="settings-label">{t.language}</p>

                <button
                  className={`settings-option ${language === "en" ? "active" : ""}`}
                  onClick={() => setLanguage("en")}
                >
                  {t.english}
                </button>

                <button
                  className={`settings-option ${language === "he" ? "active" : ""}`}
                  onClick={() => setLanguage("he")}
                >
                  {t.hebrew}
                </button>
              </div>

              <button
                className="settings-finish-button"
                onClick={() => setShowSettings(false)}
              >
                {t.finish}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}