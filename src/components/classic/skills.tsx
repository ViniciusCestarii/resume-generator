import { ResumeData } from "../../types/resume";

interface SkillsProps {
  skill: ResumeData["skill"];
}

function Skills({ skill }: SkillsProps) {
  return (
    <section className="print:break-after-page print:pt-resume-margin">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        {skill.title}
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        {skill.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;