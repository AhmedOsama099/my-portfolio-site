import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Amplifidor",
    category: "Social Media",
    description:
      "Amplifidor connects networkers, agents, agencies, and brands in one social platform. I worked on the front end, translating Figma designs into responsive components and implementing key features like Profile, HomePage, Groups, Site Settings, and other to come features. My role focused on building clean, scalable UI and ensuring a smooth user experience across devices.",
    image: "/images/projects/amplifidor-logo.png",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Apollo Client",
      "Zustand",
      "React Hook Form",
      "Zod",
      "ShadCN",
      "Tailwind CSS",
      "recharts",
      "react router",
    ],
    siteLink: "https://amplifidor.com/",
    videoLink: "",
    codeLink: "",
  },
  {
    id: 2,
    title: "Sharjah's Municipalities Unified Portal",
    category: "Governmental Services",
    description:
      "Internal Support & Feature Development: Provided ongoing frontend support for the Sharjah's municipalities Governmental System. I implemented new features and carried out various updates based on evolving client requirements, ensuring the system remained efficient, user-friendly, and aligned with the needs of government stakeholders.",
    image: "/images/projects/sharja-logo.png",
    technologies: ["ReactJS", "ReduxJS", "DevExpress", "Material UI"],
    siteLink: "https://mes.dma.shj.ae/homePage/1",
    videoLink: "",
    codeLink: "",
  },
  {
    id: 3,
    title: "University Management System – Quiz Module",
    category: "Education Technology",
    description:
      "I contributed to the development of a comprehensive University Management System by building the Quiz System module. This feature enabled professors to create and manage exams with various question types (e.g., multiple choice, true/false, short answer). Students could take these quizzes online, and professors were able to view submissions and assign grades. The system also allowed students to review their scores and performance after evaluation, streamlining the entire assessment process.",
    image: "/images/projects/quiz.png",
    technologies: [
      "ReactJS",
      "DevExpress",
      ".NET Core",
      "Entity Framework",
      "SQL",
    ],
    siteLink: "https://eg-sds.com/",
    videoLink:
      "https://www.linkedin.com/posts/ahmedosama099_resharing-reposting-frontend-activity-7065791463921528832-TamG?utm_source=share&utm_medium=member_desktop",
    codeLink: "",
  },
  {
    id: 4,
    title: "ERP System – Desktop to Web Migration",
    category: "ERP System",
    description:
      "Participated in the migration of a legacy ERP (Enterprise Resource Planning) system from a desktop-based environment to a modern web application. I was responsible for approximately 25% of the overall development, converting complex modules into responsive and maintainable web interfaces. This included building around 20 web pages, ensuring a smooth transition of core business functionalities while improving usability and cross-platform access.",
    image: "/images/projects/erp.jpg",
    technologies: ["ReactJS", "DevExpress"],
    siteLink: "",
    videoLink:
      "https://drive.google.com/file/d/1sdWOHndKPZIWWfuU5l7KtHgDN0OBbvc0/view",
    codeLink: "",
  },
  {
    id: 5,
    title: "STREAM – (Twitter Clone)",
    category: "Social Media",
    description:
      "Built a full-featured social media web application inspired by Twitter as a personal project to enhance my skills. The platform includes user authentication, profile management, and full tweet functionality—users can create, edit, and delete tweets. They also can view, like, and comment on tweets by others. This project demonstrates my ability to build interactive, user-centric web applications with modern front-end technologies.",
    image: "/images/projects/twitter-clone.png",
    technologies: ["ReactJS", "ReduxJS", "MaterialUl", ".NET Framework"],
    siteLink: "",
    videoLink:
      "https://www.linkedin.com/posts/ahmedosama099_reposting-reactjs-dotnet-activity-7028096870304428032-Dkg5?utm_source=share&utm_medium=member_desktop",
    codeLink: "https://github.com/AhmedOsama099/SocialMediaApp",
  },
  {
    id: 6,
    title: "Alushibe",
    category: "Landing Page",
    description:
      "Contributed to the development of this landing page site. My work involved building responsive and visually appealing UI components, enhancing user experience, and ensuring smooth navigation across the site.",
    image: "/images/projects/alushibi.png",
    technologies: ["ReactJS"],
    siteLink: "https://alushibe.com/",
    videoLink: "",
    codeLink: "",
  },
  {
    id: 7,
    title: "Multi-Step Chapters Selection",
    category: "Multi Steps Wizard Exercise",
    description:
      "Built a multi-step form flow allowing users to select genres, choose corresponding books, then pick chapters before final submission. Upon completion, the app generates and displays a printable receipt. I also implemented a fake storage layer to simulate data persistence throughout the process, enhancing the user experience without a backend.",
    image: "/images/projects/wizard-app.png",
    technologies: [
      "ReactJS",
      "ReduxJS",
      "TypeScript",
      "Material UI",
      "gh-pages",
      "msw",
    ],
    siteLink: "https://ahmedosama099.github.io/Mcledger-Task/",
    videoLink: "",
    codeLink: "https://github.com/AhmedOsama099/Mcledger-Task",
  },
];
