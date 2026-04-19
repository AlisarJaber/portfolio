import {
  Mail,
  Phone,
  Globe,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSiteSettings } from "../context/SiteSettingsContext";
import "../styles/ContactPage.css";

const content = {
  en: {
    back: "Back",
    kicker: "CONTACT",
    title: "Let’s connect in a way that feels real.",
    description:
      "Whether it’s a collaboration, internship opportunity, project idea, or just a friendly hello — here’s where you can reach me.",
    cards: [
      {
        key: "phone",
        icon: Phone,
        label: "Phone",
        value: "0538269923",
        href: "tel:0538269923",
      },
      {
        key: "email",
        icon: Mail,
        label: "Email",
        value: "alisar.jaber2007@gmail.com",
        href: "mailto:alisar.jaber2007@gmail.com",
      },
      {
        key: "github",
        icon: Globe,
        label: "GitHub",
        value: "github.com/AlisarJaber",
        href: "https://github.com/AlisarJaber",
      },
    ],
  },
  he: {
    back: "חזור",
    kicker: "יצירת קשר",
    title: "בואו נתחבר בדרך שמרגישה אמיתית.",
    description:
      "אם זה שיתוף פעולה, הזדמנות להתמחות, רעיון לפרויקט, או אפילו רק להגיד שלום — כאן אפשר ליצור איתי קשר.",
    cards: [
      {
        key: "phone",
        icon: Phone,
        label: "טלפון",
        value: "0538269923",
        href: "tel:0538269923",
      },
      {
        key: "email",
        icon: Mail,
        label: "אימייל",
        value: "alisar.jaber2007@gmail.com",
        href: "mailto:alisar.jaber2007@gmail.com",
      },
      {
        key: "github",
        icon: Globe,
        label: "גיטהאב",
        value: "github.com/AlisarJaber",
        href: "https://github.com/AlisarJaber",
      },
    ],
  },
};

export default function ContactPage() {
  const { language } = useSiteSettings();
  const navigate = useNavigate();
  const location = useLocation();

  const t = content[language];
  const isHebrew = language === "he";
  const BackIcon = isHebrew ? ArrowRight : ArrowLeft;

  const cameFromHighlight = location.state?.source === "highlight";

  return (
    <main className={`contact-page ${isHebrew ? "rtl" : "ltr"}`}>
      {cameFromHighlight && (
        <button
          type="button"
          className="contact-floating-back"
          onClick={() => navigate("/skills", { state: { source: "highlight" } })}
          aria-label={isHebrew ? "חזרה להיילייט הקודם" : "Back to previous highlight"}
        >
          <BackIcon size={24} strokeWidth={2.4} />
        </button>
      )}

      <div className="contact-shell">
        <button
          type="button"
          className="contact-back-button"
          onClick={() => navigate("/")}
        >
          <BackIcon size={18} strokeWidth={2.4} />
          <span>{t.back}</span>
        </button>

        <section className="contact-hero">
          <div className="contact-plane">✈</div>

          <p className="contact-kicker">{t.kicker}</p>
          <h1 className="contact-title">{t.title}</h1>
          <p className="contact-description">{t.description}</p>
        </section>

        <section className="contact-grid">
          {t.cards.map((item) => {
            const Icon = item.icon;
            const isExternal = item.key === "github";

            return (
              <a
                key={item.key}
                className="contact-card"
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <div className="contact-card-top">
                  <div className="contact-icon-wrap">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  <div className="contact-card-head">
                    <p className="contact-card-label">{item.label}</p>
                    <h2 className="contact-card-value">{item.value}</h2>
                  </div>
                </div>
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
}