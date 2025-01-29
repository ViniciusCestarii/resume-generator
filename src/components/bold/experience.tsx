import { ResumeData } from "../../types/resume";

interface ExperienceProps {
  experience: ResumeData["experience"];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold uppercase mb-4">
        {experience.title}
      </h2>

      {experience.experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <span className="font-bold">{exp.duration}</span>
          <div className="flex flex-wrap gap-1 mb-1">
            <h3>{exp.title}</h3> |
            <h3>{exp.company}</h3>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
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