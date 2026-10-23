export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  highlightBadge?: string;
  techStack: string[];
  liveLink: string;
  clientRepo?: string;
  serverRepo?: string;
  roleContribution?: string;
  keyFeatures: string[];
  challenges: string[];
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    id: "recipehub",
    title: "RecipeHub",
    category: "Full-Stack Web App",
    shortDescription: "A full-stack recipe sharing platform for discovering, creating, and exploring culinary recipes with intuitive filtering.",
    description: "RecipeHub is a full-stack recipe sharing platform that allows culinary enthusiasts to discover, share, and explore curated recipes. The platform provides an intuitive interface for browsing dishes by category, viewing step-by-step instructions, and managing recipe submissions.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://recipehub-iota.vercel.app/",
    clientRepo: "https://github.com/mahjabin-alif-lamiya/recipehub-client",
    serverRepo: "https://github.com/mahjabin-alif-lamiya/recipehub-server",
    keyFeatures: [
      "Curated recipe discovery with dynamic search and category filtering",
      "Comprehensive recipe view with ingredient quantities and step-by-step preparations",
      "RESTful API integration connecting React frontend with Express/MongoDB backend",
      "Responsive, clean UI designed for effortless kitchen browsing across devices"
    ],
    challenges: [
      "Structuring multi-tier recipe models to accommodate varying ingredients, measurements, and cooking instructions",
      "Optimizing client-side state and filtering across diverse recipe tags for rapid user response"
    ],
    futureImprovements: [
      "User authentication and personal saved-recipe bookmark collections",
      "Community rating system and interactive user reviews",
      "Automated grocery list generator based on serving size adjustments"
    ]
  },
  {
    id: "drivefleet",
    title: "DriveFleet",
    category: "Fleet Management Solution",
    shortDescription: "A comprehensive fleet management platform for tracking vehicles, organizing service records, and managing operations.",
    description: "DriveFleet is a comprehensive fleet management solution built to streamline commercial vehicle tracking, maintenance scheduling, and operational administration. It equips fleet supervisors with tools to monitor vehicle statuses, log driver assignments, and optimize transport logistics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://drivefleet-client-jade.vercel.app/",
    keyFeatures: [
      "Centralized dashboard monitoring fleet inventory and vehicle operational status",
      "Maintenance log tracking and scheduled servicing records",
      "Modular management components for driver allocation and route assignments",
      "Responsive desktop and tablet layouts tailored for transport dispatchers"
    ],
    challenges: [
      "Designing clean data models in MongoDB to track vehicle operational history and status transitions",
      "Building responsive dashboard metrics and status tables that remain readable across all screen sizes"
    ],
    futureImprovements: [
      "Real-time GPS integration for live fleet map tracking",
      "Automated preventive maintenance alerts based on odometer thresholds",
      "Exportable operational reports and fuel consumption analytics"
    ]
  },
  {
    id: "medibondhu",
    title: "MediBondhu",
    category: "AI Healthcare Web App",
    highlightBadge: "Champion: PROTICHAMP AI Championship 1.0",
    shortDescription: "Gemini-powered healthcare web app delivering AI-based symptom guidance; Champion at PROTICHAMP AI Championship 1.0.",
    description: "MediBondhu is a Gemini-powered healthcare web app offering AI-based preliminary symptom guidance. Originally developed for the SciBlitz 2.0 AI Hackathon organized by IEEE CUET Student Branch, it was further refined and won 1st Place Champion at the PROTICHAMP AI Championship 1.0 (Healthcare Category).",
    techStack: ["Next.js", "Google Gemini API", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://medibondhu.vercel.app/",
    keyFeatures: [
      "AI-driven symptom analysis powered by Google Gemini API integration",
      "Structured preliminary healthcare suggestions and precautionary guidance",
      "Accessible, reassuring user interface built with Next.js and Tailwind CSS",
      "Responsible health disclaimers emphasizing professional medical evaluation"
    ],
    challenges: [
      "Crafting prompt engineering boundaries with Google Gemini to guarantee safe, non-diagnostic guidance",
      "Maintaining quick, responsive streaming interactions while handling complex symptom inquiries"
    ],
    futureImprovements: [
      "Bengali language support to extend healthcare accessibility to rural populations",
      "Direct integration with licensed telemedicine providers for doctor consultations",
      "Emergency medical helpline and nearby clinic locator using geolocation"
    ]
  },
  {
    id: "krishidisha",
    title: "KrishiDisha",
    category: "AI Agriculture Web App",
    shortDescription: "AI-powered agriculture web app built with a modular, component-based structure to deliver modern farming guidance.",
    description: "KrishiDisha is an AI-powered agriculture web application built with a modular, component-based architecture to provide agricultural guidance, crop recommendations, and intelligent farming assistance to empower agricultural productivity.",
    techStack: ["Next.js", "Google Gemini API", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://krishi-disha.vercel.app/",
    keyFeatures: [
      "AI-assisted crop guidance and soil-specific farming recommendations",
      "Modular, component-based Next.js architecture built for scalability and clean maintenance",
      "Lightweight, performance-optimized layout suitable for variable network conditions",
      "Practical agricultural advice and seasonal crop protection insights"
    ],
    challenges: [
      "Formulating specialized prompt strategies to generate actionable, regional farming advice",
      "Creating an intuitive, clean interface accessible to users with varying levels of technical proficiency"
    ],
    futureImprovements: [
      "Image-based crop pest and disease identification using computer vision",
      "Localized weather forecasting and rainfall alert integration",
      "Direct farm-to-consumer agricultural market portal"
    ]
  },
  {
    id: "qurbanihat",
    title: "QurbaniHat",
    category: "Livestock Booking Platform",
    shortDescription: "Livestock booking platform for Qurbani animals built with Next.js, Firebase authentication, and responsive UI.",
    description: "QurbaniHat is a dedicated livestock booking platform for Qurbani animals developed using Next.js and Firebase authentication. Styled with Tailwind CSS, it features interactive feedback with react-toastify and intuitive icons using react-icons.",
    techStack: ["Next.js", "Firebase Authentication", "Tailwind CSS", "react-toastify", "react-icons"],
    liveLink: "https://qurbani-hat-ebon-six.vercel.app/",
    keyFeatures: [
      "Secure user authentication and account management powered by Firebase Auth",
      "Interactive toast notifications via react-toastify for clear booking feedback",
      "Organized livestock catalog with animal weight, breed, price, and health details",
      "Responsive, mobile-friendly design with rich icons from react-icons"
    ],
    challenges: [
      "Managing asynchronous Firebase authentication state transitions smoothly across Next.js components",
      "Building a fast, responsive animal catalog with real-time UI status updates"
    ],
    futureImprovements: [
      "Integrated payment gateway for digital booking advance payments",
      "Seller verification badges with veterinary health certification uploads",
      "Scheduled delivery tracking from farm to buyer destination"
    ]
  },
  {
    id: "medicore",
    title: "MediCore",
    category: "AI Healthcare Guidance Platform",
    highlightBadge: "Team Software Lab Project",
    shortDescription: "AI healthcare guidance and navigation platform with doctor recommendations, appointment booking, and dashboards.",
    description: "MediCore is an AI-powered healthcare guidance and clinical navigation platform created as a collaborative three-member team Software Lab project. Built with Next.js, Tailwind CSS, MongoDB Atlas, JWT authentication, and Google Gemini API.",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "JWT Authentication", "Google Gemini API"],
    liveLink: "https://medicore-lime.vercel.app/",
    roleContribution: "Contributed to a 3-member team Software Lab project by developing backend functionality for recommending suitable doctors to patients, implementing booking integrations, doctor and patient dashboards, and deploying the application on Vercel. (Note: Gemini API integration was developed by teammates).",
    keyFeatures: [
      "Backend recommendation engine matching suitable doctors to patients based on symptoms",
      "Complete appointment booking workflow connecting patient requests with doctor schedules",
      "Dedicated patient and doctor dashboards with secure JWT authentication",
      "Cloud deployment and environment configuration on Vercel"
    ],
    challenges: [
      "Developing an accurate backend doctor recommendation algorithm based on symptom criteria in MongoDB",
      "Coordinating API contracts and git branch management within a 3-member agile team",
      "Implementing secure role-based dashboard routing with JWT authentication"
    ],
    futureImprovements: [
      "Automated appointment reminders via SMS and email with calendar invites",
      "Digital prescription storage and diagnostic record history for patients",
      "Real-time doctor schedule availability management with conflict prevention"
    ]
  }
];
