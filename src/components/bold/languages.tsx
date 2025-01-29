import { ResumeData } from "../../types/resume";

interface LanguagesProps {
  language: Pick<ResumeData, "language">["language"];
}

function Languages({ language }: LanguagesProps) {
  return (
    <section className="mb-4 print:break-before-page print:pt-resume-margin">
      <h2 className="text-2xl font-bold uppercase mb-4">
        {language.title}
      </h2>
      <ul className="flex gap-8">
        {language.languages.map((lang, index) => (
          <li key={index}>
            <span className="font-bold">
              {lang.name}
            </span>
            <span className="italic ml-1">
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;