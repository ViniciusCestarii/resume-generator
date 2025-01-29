import { ResumeData } from "../../types/resume";

interface LanguagesProps {
  language: ResumeData["language"];
}

function Languages({ language }: LanguagesProps) {
  return (
    <section className="px-rose-padding">
      <h2 className="text-2xl uppercase mb-4">
        {language.title}
      </h2>
      <ul className="grid grid-cols-2 text-sm">
        {language.languages.map((lang, index) => (
          <li key={index} className="flex flex-col">{lang.name}
            <span className="italic">{lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;