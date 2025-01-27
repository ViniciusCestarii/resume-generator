import { ResumeData } from "../types/resume";

interface SkillsProps {
  skills: Pick<ResumeData, "skills">["skills"];
}

function Skills({ skills }: SkillsProps) {
  return (
    <section className="break-after-page">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        Skills
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;