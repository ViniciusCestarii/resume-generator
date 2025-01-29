import { ResumeData } from "../../types/resume";

interface EducationProps {
  education: Pick<ResumeData, "education">["education"];
}

function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold uppercase mb-4">
        {education.title}
      </h2>

      {education.educations.map((edu, index) => (
        <div key={index} className="mb-4">
          <span className="font-bold">{edu.duration}</span>
          <div className="flex flex-wrap gap-1">
            <h3>{edu.degree}</h3> |
            <h3>{edu.institution}</h3>
          </div>
        </div>))}
    </section>
  );
}

export default Education;