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

export default function ClassicResume({ data }: ResumeProps) {
  return (
    <div className="max-w-resume-width min-h-resume-height p-resume-margin mx-auto font-calibri bg-white antialiased">
      <Header  {...data} />
      <Experience {...data} />
      <Education  {...data} />
      <Projects  {...data} />
      <Languages {...data} />
      <Skills  {...data} />
    </div>
  );
}