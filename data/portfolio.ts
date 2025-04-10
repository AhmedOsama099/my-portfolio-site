import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing. Built with a focus on performance and user experience.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description:
      "An intuitive finance dashboard that visualizes complex financial data in an accessible way. Features include real-time updates, interactive charts, and customizable widgets.",
    image: "/images/projects/finance.jpg",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Social Media App",
    category: "Mobile Development",
    description:
      "A social networking application with features like user profiles, post creation, commenting, and real-time notifications. Designed with a focus on community building.",
    image: "/images/projects/social.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    demoLink: "https://example.com/demo",
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
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/yourusername/project",
  },
];