export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ExperienceSection {
  title: string;
  experiences: Experience[];
}

export interface Education {
  institution: string;
  duration: string;
  degree: string;
}

export interface EducationSection {
  title: string;
  educations: Education[];
}

export interface Project {
  name: string;
  links: { label: string; url: string }[];
  description: string;
  technologies: string;
}

export interface ProjectSection {
  title: string;
  projects: Project[];
}

export interface SkillsSection {
  title: string;
  skills: string[];
}

export interface LanguagesSection {
  title: string;
  languages: string[];
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  experience: ExperienceSection;
  education: EducationSection;
  project: ProjectSection;
  skill: SkillsSection;
  language: LanguagesSection;
}