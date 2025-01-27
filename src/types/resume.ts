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

export interface Education {
  institution: string;
  duration: string;
  degree: string;
}

export interface Project {
  name: string;
  links: { label: string; url: string }[];
  description: string;
  technologies: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: string[];
  languages: string[];
}