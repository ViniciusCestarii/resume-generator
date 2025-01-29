type Langs = Record<string, {
  resume: string
  translationPrompt: string

}>;

export const LANGS: Langs = {
  en: {
    resume: 'Resume',
    translationPrompt: ""
  },
  pt: {
    resume: 'Curriculo',
    translationPrompt: `Create the ptResumeData. Say in the first person, ex: Desenvolvi. Don't translate tech words, ex: Soft Skills = Soft Skills. Brazil = Brasil. Dashboard = Dashboard. Output it as JSON. Import the import { ResumeData } from "./resume"`
  },
  es: {
    resume: 'Currículum',
    translationPrompt: `Create the esResumeData. Say in the first person, ex: Desarrollé. Don't translate tech words, ex: Soft Skills = Soft Skills. Output it as JSON. Import the import { ResumeData } from "./resume"`
  },
  fr: {
    resume: 'Curriculum Vitae',
    translationPrompt: `Create the frResumeData. Say in the first person, ex: Développé. Don't translate tech words, ex: Soft Skills = Soft Skills. Output it as JSON. Import the import { ResumeData } from "./resume"`
  }
};

type ResumeStyles = Record<string, object>

export const RESUME_STYLES: ResumeStyles = {
  classic: {
  },
};