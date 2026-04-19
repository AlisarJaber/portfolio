// GiftShop
import giftshop1 from "../assets/images/giftshop/giftshop-1.jpg";
import giftshop2 from "../assets/images/giftshop/giftshop-2.jpg";
import giftshop3 from "../assets/images/giftshop/giftshop-3.jpg";
import giftshop4 from "../assets/images/giftshop/giftshop-4.jpg";
import giftshop5 from "../assets/images/giftshop/giftshop-5.jpg";
import giftshop6 from "../assets/images/giftshop/giftshop-6.jpg";
import giftshop7 from "../assets/images/giftshop/giftshop-7.jpg";

// Servio
import servio1 from "../assets/images/servio/servio-1.jpg";
import servio2 from "../assets/images/servio/servio-2.jpg";
import servio3 from "../assets/images/servio/servio-3.jpg";
import servio4 from "../assets/images/servio/servio-4.jpg";
import servio5 from "../assets/images/servio/servio-5.jpg";

// Weather
import weather1 from "../assets/images/weather-app/weather-1.jpg";
import weather2 from "../assets/images/weather-app/weather-2.jpg";

// IP Tracker
import ip1 from "../assets/images/ip-tracker/ip-1.jpg";
import ip2 from "../assets/images/ip-tracker/ip-2.jpg";

// Birthday
import birth1 from "../assets/images/mama-birthday/birth-1.jpg";
import birth2 from "../assets/images/mama-birthday/birth-2.jpg";
import birth3 from "../assets/images/mama-birthday/birth-3.jpg";
import birth4 from "../assets/images/mama-birthday/birth-4.jpg";

const projects = [
  {
    id: "giftshop",
    title: "GiftShop",
    cover: giftshop1,
    images: [giftshop1, giftshop2, giftshop3, giftshop4, giftshop5, giftshop6, giftshop7],
    shortDescription: "Full-stack gift shopping platform.",
    whyBuilt: "Built to practice real product flow, cart logic, admin management, and API integration.",
    techStack: ["React", "JavaScript", "FastAPI", "PostgreSQL","python"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
    gate: "A12",
  },
  {
    id: "servio",
    title: "Servio",
    cover: servio1,
    images: [servio1, servio2, servio3, servio4, servio5],
    shortDescription: "Service booking platform thats my fierst full stack project ever.",
    whyBuilt: "Built to create a system that connects users with service providers.",
    techStack: ["React", "JavaScript", "FastAPI", "python"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
    gate: "B07",
  },
  {
    id: "weather-app",
    title: "Weather App",
    cover: weather1,
    images: [weather1, weather2],
    shortDescription: "Weather forecast app with clean UI.",
    whyBuilt: "Built to practice API handling and responsive design.",
    techStack: ["React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
    gate: "C03",
  },
  {
    id: "ip-tracker",
    title: "IP Tracker",
    cover: ip1,
    images: [ip1, ip2],
    shortDescription: "Track IP locations with map preview.",
    whyBuilt: "Built to practice API integration and maps.",
    techStack: ["React", "JavaScript", "Api"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
    gate: "D09",
  },
  {
    id: "birthday-website",
    title: "Birthday Website",
    cover: birth1,
    images: [birth1, birth2, birth3, birth4],
    shortDescription: "Interactive emotional birthday experience i made it for my mom birthday.",
    whyBuilt: "Built as a creative storytelling project.",
    techStack: ["React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
    gate: "E02",
  },
];

export default projects;