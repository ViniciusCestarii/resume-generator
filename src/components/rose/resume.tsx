import { ResumeData } from "../../types/resume";
import { cn } from "../../utils/cn";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Languages from "./languages";
import Profile from "./profile";
import Skills from "./skills";

interface ResumeProps {
  data: ResumeData;
  color?: "rose" | "rose-sky" | "rose-lime";
}

export default function RoseResume({ data, color }: ResumeProps) {
  return (
    <div className={cn("max-w-resume-width min-h-resume-height mx-auto font-trebuchet bg-white text-[#333a30] antialiased", color)}>
      <div className="grid grid-cols-[300px_1fr]">
        <div className="bg-rose-100 min-h-screen">
          <Header  {...data} />
          <Education  {...data} />
          <Languages {...data} />
        </div>
        <div>
          <Profile {...data} />
          <Experience {...data} />
          <Skills  {...data} />
        </div>
      </div>
    </div>
  );
}