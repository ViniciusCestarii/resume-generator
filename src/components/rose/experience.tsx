import { ResumeData } from "../../types/resume";

interface ExperienceProps {
  experience: ResumeData["experience"];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section className="px-rose-padding pt-rose-padding">
      <h2 className="text-2xl uppercase mb-4">
        {experience.title}
      </h2>

      {experience.experiences.map((exp, index) => (
        <div key={index} className="mb-4 text-sm">
            <h3 className="font-bold inline">{exp.company}</h3> - {" "}
            <h3 className="font-bold inline">{exp.title}</h3>
            <span className="block italic">{exp.duration}</span>

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