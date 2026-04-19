const profile = {
  name: "Alisar.Jaber",
  role: {
    en: "Full-Stack Engineer",
    he: "מהנדסת פול-סטאק",
  },

  bioLines: {
    en: [
      "I build projects with personality, structure, and real user experience.",
      "Still learning, still exploring, and turning ideas into interactive products.",
    ],
    he: [
      "אני בונה פרויקטים עם אופי, סדר וחוויית משתמש אמיתית.",
      "עדיין לומדת, עדיין חוקרת, והופכת רעיונות למוצרים אינטראקטיביים.",
    ],
  },

  about: {
  en: {
    title: "Passenger Profile",
    subtitle: "Background, experience, and journey",
    paragraphs: [
      "My name is Alisar, I’m 19 years old from Daliyat al-Karmel.",
      "I graduated from Draca High School with a full matriculation certificate, where I specialized in Mechatronics.",
      "During school, I participated in the International Mechatronics Competition and our team won 1st place for an engineering-focused project.",
      "Alongside my studies, I volunteered at MDA and worked in a restaurant, where I became a shift manager and developed responsibility, teamwork, and leadership skills.",
      "After high school, I completed a service program in the Ministry of Defense, where I trained in hardware and software, and later continued a Full-Stack training program in the Technion that lasted four months.",
      "Afterward, I worked in the field for two years and gained practical experience in building systems, solving problems, and turning ideas into real products.",
    ],
  },
  he: {
    title: "פרופיל נוסעת",
    subtitle: "רקע, ניסיון והמסלול שלי",
    paragraphs: [
      "שמי אליסאר, אני בת 19 מדאלית אל כרמל.",
      "סיימתי את לימודיי בתיכון דרכא דאלית אל כרמל עם בגרות מלאה, תוך התמחות במגמת מכטרוניקה.",
      "במהלך הלימודים השתתפתי בתחרות המכטרוניקה הבינלאומית, ובה זכינו במקום הראשון על פרויקט בעל תוכן הנדסי.",
      "במקביל ללימודים התנדבתי במד״א ועבדתי במסעדה, שם התקדמתי לתפקיד אחראית משמרת ופיתחתי יכולות של אחריות, עבודה בצוות והובלה.",
      "לאחר סיום התיכון ביצעתי שירות במשרד הביטחון, שבמהלכו עברתי הכשרה בתחומי החומרה והתוכנה, ולאחר מכן המשכתי להכשרת Full-Stack במסגרת הטכניון שנמשכה ארבעה חודשים.",
      "בהמשך עבדתי בתחום במשך שנתיים, וצברתי ניסיון מעשי בפיתוח מערכות, פתרון בעיות והפיכת רעיונות למוצרים אמיתיים.",

    ],
  },
},

  stats: [
    {
      value: "6+",
      label: {
        en: "projects",
        he: "פרויקטים",
      },
    },
    {
      value: "5mo+",
      label: {
        en: "learning time",
        he: "זמן למידה",
      },
    },
    {
      value: "8+",
      label: {
        en: "tools & tech",
        he: "כלים וטכנולוגיות",
      },
    },
  ],

  highlights: [
    {
      id: "about",
      code: "A01",
      label: { en: "About", he: "אודות" },
      sublabel: {
        en: "Background & story",
        he: "רקע והסיפור שלי",
      },
      status: {
        en: "Open",
        he: "פתוח",
      },
      path: "/about",
    },
    {
      id: "projects",
      code: "B12",
      label: { en: "Projects", he: "פרויקטים" },
      sublabel: {
        en: "Things I built",
        he: "דברים שבניתי",
      },
      status: {
        en: "Boarding",
        he: "לעלייה",
      },
      path: "/projects",
    },
    {
      id: "skills",
      code: "C07",
      label: { en: "Skills", he: "כישורים" },
      sublabel: {
        en: "Tools & strengths",
        he: "כלים וחוזקות",
      },
      status: {
        en: "Explore",
        he: "לחקירה",
      },
      path: "/skills",
    },
    {
      id: "contact",
      code: "D04",
      label: { en: "Contact", he: "יצירת קשר" },
      sublabel: {
        en: "Let’s connect",
        he: "בואי נדבר",
      },
      status: {
        en: "Available",
        he: "זמינה",
      },
      path: "/contact",
    },
  ],
};

export default profile;