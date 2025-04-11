import { Project } from "@/types/portfolio";
import amplifidorLogo from "@/public/projects/amplifidor-logo.png";
import sharjaLogo from "@/public/projects/sharja-logo.png";
export const projects: Project[] = [
  {
    id: 1,
    title: "Amplifidor",
    category: "Social Media",
    description:
      "Amplifidor connects networkers, agents, agencies, and brands in one social platform. I worked on the front end, translating Figma designs into responsive components and implementing key features like Profile, HomePage, Groups, Site Settings, and other to come features. My role focused on building clean, scalable UI and ensuring a smooth user experience across devices.",
    image: amplifidorLogo,
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
    image: sharjaLogo,
    technologies: ["ReactJS", "ReduxJS", "DevExpress", "Material UI"],
    siteLink: "https://mes.dma.shj.ae/homePage/1",
    videoLink: "",
    codeLink: "",
  },
  {
    id: 3,
    title: "Social Media App",
    category: "Mobile Development",
    description:
      "A social networking application with features like user profiles, post creation, commenting, and real-time notifications. Designed with a focus on community building.",
    image: "/images/projects/social.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    siteLink: "https://example.com/demo",
    videoLink: "",
    codeLink: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Machine Learning",
    description:
      "An AI-powered tool that generates high-quality content based on user prompts. Utilizes natural language processing to create coherent and contextually relevant text.",
    image: "/images/projects/ai.jpg",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
    siteLink: "https://example.com/demo",
    videoLink: "",
    codeLink: "https://github.com/yourusername/project",
  },
];
