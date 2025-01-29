import { ResumeData } from "../../types/resume";

interface SkillsProps {
  skill: ResumeData["skill"];
}

function Skills({ skill }: SkillsProps) {
  return (
    <section className="px-rose-padding">
      <h2 className="text-2xl uppercase mb-4">
        {skill.title}
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        {skill.skills.slice(0, 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;