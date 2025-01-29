import { ResumeData } from "../../types/resume";

interface ExperienceProps {
  experience: Pick<ResumeData, "experience">["experience"];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        {experience.title}
      </h2>

      {experience.experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">{exp.title}</h3>
            <h3 className="font-bold">{exp.company}</h3>
            <span>{exp.duration}</span>
          </div>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            {exp.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;