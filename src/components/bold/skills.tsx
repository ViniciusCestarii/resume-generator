import { ResumeData } from "../../types/resume";

interface SkillsProps {
  skill: Pick<ResumeData, "skill">["skill"];
}

function Skills({ skill }: SkillsProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold uppercase mb-4">
        {skill.title}
      </h2>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        {skill.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;