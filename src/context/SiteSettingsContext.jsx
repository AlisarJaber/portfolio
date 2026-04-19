import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SiteSettingsContext = createContext(null);

export function SiteSettingsProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", language === "he" ? "rtl" : "ltr");
  }, [theme, language]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      language,
      setLanguage,
    }),
    [theme, language]
  );

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error("useSiteSettings must be used inside SiteSettingsProvider");
  }

  return context;
}