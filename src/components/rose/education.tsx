import { ResumeData } from "../../types/resume";

interface EducationProps {
  education: ResumeData["education"];
}

function Education({ education }: EducationProps) {
  return (
    <section className="px-rose-padding pt-rose-padding">
      <h2 className="text-2xl uppercase mb-4">
        {education.title}
      </h2>

      {education.educations.map((edu, index) => (
        <div key={index} className="mb-4 text-sm">
          <div className="flex flex-col mb-1">
            <h3 className="font-bold">{edu.institution}</h3>
            <span>{edu.duration}</span>
            <span className="font-bold italic">{edu.degree}</span>
          </div>
        </div>))}
    </section>
  );
}

export default Education;