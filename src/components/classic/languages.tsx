import { ResumeData } from "../../types/resume";

interface LanguagesProps {
  language: ResumeData["language"];
}

function Languages({ language }: LanguagesProps) {
  return (
    <section className="mb-6 text-sm">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        {language.title}
      </h2>
      <ul className="list-disc ml-5 space-y-2">
        {language.languages.map((lang, index) => (
          <li key={index}>{lang.name}: {lang.level}</li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;