import { ResumeData } from "../../types/resume";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Languages from "./languages";
import Projects from "./project";
import Skills from "./skills";

interface ResumeProps {
  data: ResumeData;
}

export default function BoldResume({ data }: ResumeProps) {
  return (
    <div className="max-w-resume-width min-h-resume-height p-resume-margin pl-[calc(var(--spacing-resume-margin)_+_3rem)] mx-auto font-calibri bg-white antialiased">
      <div className="fixed top-0 left-0 h-full w-12 bg-orange-600" />
      <Header  {...data} />
      <Experience {...data} />
      <Education  {...data} />
      <Projects  {...data} />
      <Languages {...data} />
      <Skills  {...data} />
    </div>
  );
}