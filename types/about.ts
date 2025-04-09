/**
 * Represents a skill item with a name and unique key
 */
export interface SkillItem {
  name: string;
  key: string;
}

/**
 * Represents a description of a work experience project
 */
export interface ExperienceDescription {
  title: string;
  description: string[];
  usedTech: string;
}

/**
 * Represents a work experience item with title, company, date, and projects
 */
export interface ExperienceItem {
  title: string;
  description: ExperienceDescription[];
  date: string;
  company: string;
  side: "left" | "right"; // Determines which side of the timeline the experience appears
}