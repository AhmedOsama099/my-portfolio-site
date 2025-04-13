import { SkillItem, ExperienceItem } from "@/types/about";

export const skillsList: SkillItem[] = [
  { name: "HTML5", key: "html5" },
  { name: "CSS3", key: "css3" },
  { name: "JavaScript (ES6+)", key: "javascript" },
  { name: "TypeScript", key: "typescript" },
  { name: "ReactJS", key: "react" },
  { name: "ReduxJS", key: "redux" },
  { name: "Redux Toolkit", key: "redux-toolkit" },
  { name: "Zustand", key: "zustand" },
  { name: "Tailwind CSS", key: "tailwind" },
  { name: "Bootstrap", key: "bootstrap" },
  { name: "ShadCN", key: "shadcn" },
  { name: "DevExtreme", key: "devextreme" },
  { name: "UI implementation from Figma", key: "figma-ui" },
  { name: "UI implementation from Framer", key: "framer-ui" },
  { name: "Responsive Design", key: "responsive" },
  { name: "NextJS", key: "nextjs" },
  { name: "Vite", key: "vite" },
  { name: "Git", key: "git" },
  { name: "Bitbucket", key: "bitbucket" },
  { name: "RESTful APIs", key: "rest" },
  { name: "GraphQL", key: "graphql" },
  { name: "Apollo Client", key: "apollo" },
  { name: "Docker", key: "docker" },
  { name: "System Design", key: "system-design" },
  { name: "Photoshop", key: "photoshop" },
];

export const experienceList: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    description: [
      {
        title: "SocialMedia Application",
        description: [
          "Participating in developing app features, code reviewing and refactoring",
        ],
        usedTech:
          "ReactJS - Apollo Client - Zustand - Zod - React Hook Form - ShadCN",
      },
    ],
    date: "06.2024: present",
    company: "Bitbang,LLC",
    side: "left",
  },
  {
    title: "Software Engineer",
    description: [
      {
        title: "Report Generator System",
        description: [
          "Developed an Admin Portal responsible for creating reports that require fulfillment on a monthly or quarterly basis.",
          "Implemented functionalities allowing administrators to revise fulfilled reports and take actions such as approval, rejection, or deletion.",
          "Implemented a User Portal to for seamless report fulfillment.",
          "Integrated a notification system based on approval, rejection, or deletion actions. Contributed to 80% of total work.",
        ],
        usedTech: " ReactJS - SharePoint - PowerAutomate.",
      },
      {
        title: "Project Management System",
        description: [
          "Implemented a Meetings Overview page to view details, categorize and filter meetings.",
          "Developed a Projects Planning Page with automated project sections and customizable steps, allowing users to manipulate information, attach files, and add tasks to each section..",
          "Enabled users to add, delete, and reorder project steps for enhanced project planning..",
        ],
        usedTech: " ReactJS - SharePoint.",
      },
      {
        title: "SharePoint Framework support with Front End Components",
        description: [
          "Enhanced SharePoint functionality by adding UI custom components.",
          "Provided support for existing custom components..",
        ],
        usedTech: " ReactJS.",
      },
      {
        title: "Sites Migration",
        description: [
          "Played a role in the migration and revamping of two SharePoint sites.",
        ],
        usedTech: " PowerShell.",
      },
      {
        title: "Documents Generator.",
        description: [
          "Developed a dynamic form for generating documents based on user inputs.",
          "Integrated PowerAutomate to convert generated HTML to Word documents.",
          "Enabled users to download the generated documents.",
        ],
        usedTech: " ReactJS - SharePoint - PowerAutomate.",
      },
    ],
    date: "10.2021: 02.2022",
    company: "_vois",
    side: "right",
  },
  {
    title: "Front End Developer",
    description: [
      {
        title: "Frontend Library.",
        description: [
          "Spearheaded the development of a versatile Frontend Library comprising UI components tailored for integration across various company projects.",
        ],
        usedTech: " ReactJS.",
      },
      {
        title: "Ras Al Khaimah Emirate Government System Support.",
        description: [
          "Provided ongoing support for the Ras Al Khaimah Emirate Government System.",
          "Implemented diverse changes and introduced new features as per client requirements.",
        ],
        usedTech: " ReactJS - DevExpress.",
      },
    ],
    date: "10.2021: 02.2022",
    company: "AIS-WORKS",
    side: "left",
  },
  {
    title: "Full Stack Developer",
    description: [
      {
        title: "Universities System.",
        description: [
          "Engineered a QR Limited Sign-in system and developed an interactive Quiz system for testing students.",
        ],
        usedTech: " ReactJS, DevExpress, .NET Core, Entity Framework, SQL.",
      },
      {
        title: "Company Website Revamping.",
        description: [
          "Built company new website, contributing to 40% of total work.",
        ],
        usedTech: "ReactJS, DevExpress, .NET Core, Entity Framework, SQL.",
      },
      {
        title: "Web-Based Accounting System Migration.",
        description: [
          "Converted already built desktop application sections to a web based application contributed to 25% of total work, and built approximately 20 web pages",
        ],
        usedTech: "ReactJS, DevExpress.",
      },
      {
        title: "Company Legacy Website Support.",
        description: [
          "Implemented requested changes and updates to the legacy company website.",
        ],
        usedTech: ".NET Web Forms.",
      },
    ],
    date: "10.11.2020: 10.2021",
    company: "MedadSoftwareCairo",
    side: "right",
  },
  {
    title: "Intern Full Stack Developer",
    description: [
      {
        title: "Transportation Company Responsive Landing Page.",
        description: [
          "Developed a responsive landing page to market transportation services.",
        ],
        usedTech: "HTML, CSS, JavaScript, .NET Framework, MySQL.",
      },
      {
        title: "Service Map Application.",
        description: [
          "Implemented a Service Map Application to improve user experience and provide information about service locations, including proximity to nearby restaurants.",
        ],
        usedTech: "HTML, CSS, JavaScript, Google Maps JavaScript API.",
      },
    ],
    date: "10.2020: 11.2020",
    company: "Weelo Business.",
    side: "left",
  },
];
