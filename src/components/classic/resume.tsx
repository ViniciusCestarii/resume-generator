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
    <div className="max-w-[8.5in] min-h-[11in] mx-auto font-calibri bg-white p-[0.5in] print:p-[0] print:max-w-none print:mx-0 print:my-0 antialiased">
      <Header  {...data} />
      <Experience {...data} />
      <Education  {...data} />
      <Projects  {...data} />
      <Languages {...data} />
      <Skills  {...data} />
    </div>
  );
}