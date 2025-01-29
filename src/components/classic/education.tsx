import { ResumeData } from "../../types/resume";

interface EducationProps {
  education: Pick<ResumeData, "education">["education"];
}

function Education({ education }: EducationProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        {education.title}
      </h2>

      {education.educations.map((edu, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">{edu.degree}</h3>
            <h3 className="font-bold">{edu.institution}</h3>
            <span>{edu.duration}</span>
          </div>
        </div>))}
    </section>
  );
}

export default Education;