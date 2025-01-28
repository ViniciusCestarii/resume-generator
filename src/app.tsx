import { useParams } from "react-router";
import Resume from "./components/resume";
import { enResumeData } from "./data/en-resume";
import { ptResumeData } from "./data/pt-resume";
import { esResumeData } from "./data/es-resume";
import { frResumeData } from "./data/fr-resume";

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
  const { language } = useParams();

  const data = getData(language);

  return <Resume data={data} />
}
