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
  { name: "React Query", key: "react-query" },
  { name: "Docker", key: "docker" },
  { name: "System Design", key: "system-design" },
  { name: "Photoshop", key: "photoshop" },
];

export const experienceList: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    description: [
      {
        title: "Social Media Application",
        description: [
          "Participated in developing features, code reviews and led performance-focused refactoring.",
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
          "Developed an Admin Portal to create reports requiring monthly or quarterly fulfillment.",
          "Implemented functionality allowing administrators to revise fulfilled reports and take actions such as approval, rejection, or deletion.",
          "Built a User Portal to streamline the report fulfillment process.",
          "Integrated a notification system triggered by approval, rejection, or deletion actions.",
          "Contributed to approximately 80% of the total work.",
        ],
        usedTech: "ReactJS - SharePoint - PowerAutomate",
      },
      {
        title: "Project Management System",
        description: [
          "Created Meetings Overview page with categorized filtering.",
          "Developed dynamic project planning with editable steps, task assignments, and attachments.",
          "Enabled drag-and-drop reordering and user-defined customization.",
        ],
        usedTech: "ReactJS - SharePoint",
      },
      {
        title: "SharePoint Framework UI Enhancements",
        description: [
          "Added custom UI components to enhance native SharePoint capabilities.",
          "Maintained and supported legacy front-end components.",
        ],
        usedTech: "ReactJS",
      },
      {
        title: "Sites Migration",
        description: [
          "Participated in the migration and revamp of two internal SharePoint sites.",
        ],
        usedTech: "PowerShell",
      },
      {
        title: "Documents Generator",
        description: [
          "Built dynamic form system to generate documents from user input.",
          "Integrated PowerAutomate to convert HTML into downloadable Word docs.",
          "Enabled users to download the generated documents.",
        ],
        usedTech: "ReactJS - SharePoint - PowerAutomate",
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
        title: "Frontend Library",
        description: [
          "Spearheaded the development of a reusable frontend component library for internal projects.",
        ],
        usedTech: "ReactJS",
      },
      {
        title: "Sharjah's Municipalities Unified Portal",
        description: [
          "Provided support and implemented requested changes for an internal government portal.",
          "Delivered new features and UI improvements based on client requirements.",
        ],
        usedTech: "ReactJS - DevExpress",
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
        title: "Universities System",
        description: [
          "Developed a QR-based limited sign-in system and an interactive quiz platform for student assessments.",
          "Video Demo",
        ],
        usedTech: "ReactJS - DevExpress - .NET Core - Entity Framework - SQL",
      },
      {
        title: "Company Website Revamping",
        description: [
          "Contributed to ~40% of the redesigned company website with modern UI/UX improvements.",
        ],
        usedTech: "ReactJS - DevExpress - .NET Core - Entity Framework - SQL",
      },
      {
        title: "Accounting System Migration",
        description: [
          "Migrated core sections of a desktop accounting app to a web-based solution.",
          "Developed ~20 web pages and contributed to 25% of the total system.",
        ],
        usedTech: "ReactJS - DevExpress",
      },
      {
        title: "Trips & Operations Tracking System",
        description: [
          "Developed a visual tracking interface to map trip progress and highlight the current shipment step on a dynamic path.",
          "Built a financial operations dashboard to monitor and categorize accounting activities, debts, and associated notes.",
        ],
        usedTech: "HTML - CSS - jQuery",
      },
      {
        title: "Legacy Website Support",
        description: [
          "Maintained and updated features on the company's legacy .NET Web Forms site.",
        ],
        usedTech: ".NET Web Forms",
      },
    ],
    date: "10.11.2020: 10.2021",
    company: "MedadSoftware Cairo",
    side: "right",
  },
  {
    title: "Intern Full Stack Developer",
    description: [
      {
        title: "Transportation Company Responsive Landing Page",
        description: [
          "Built a responsive landing page to promote transportation services and optimize for mobile and desktop views.",
        ],
        usedTech: "HTML - CSS - JavaScript - .NET Framework - MySQL",
      },
      {
        title: "Service Map Application",
        description: [
          "Developed an interactive map to help users locate services and nearby restaurants.",
          "Integrated Google Maps JavaScript API for live geolocation and custom pins.",
        ],
        usedTech: "HTML - CSS - JavaScript - Google Maps API",
      },
    ],
    date: "10.2020: 11.2020",
    company: "Weelo Business.",
    side: "left",
  },
];
