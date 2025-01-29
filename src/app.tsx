import { useParams } from "react-router";
import ClassicResume from "./components/classic/resume";
import { enResumeData } from "./data/en-resume";
import { ptResumeData } from "./data/pt-resume";
import { esResumeData } from "./data/es-resume";
import { frResumeData } from "./data/fr-resume";
import BoldResume from "./components/bold/resume";
import RoseResume from "./components/rose/resume";

const getData = (language: string | undefined) => {
  switch (language) {
    case "en":
      return enResumeData;
    case "pt":
      return ptResumeData;
    case "es":
      return esResumeData;
    case "fr":
      return frResumeData;
    default:
      return enResumeData;
  }
}

export default function App() {
  const { language, resumeStyle } = useParams();

  const data = getData(language);

  switch (resumeStyle) {
    case "classic":
      return <ClassicResume data={data} />
    case "bold":
      return <BoldResume data={data} />
    case "rose":
      return <RoseResume data={data} />
    case "rose-lime":
      return <RoseResume data={data} color={resumeStyle} />
    case "rose-sky":
      return <RoseResume data={data} color={resumeStyle}  />
    default:
      return <ClassicResume data={data} />
  }
}
