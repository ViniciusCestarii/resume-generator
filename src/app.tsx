import { useParams } from "react-router";
import Resume from "./components/resume";
import { enResumeData } from "./types/en-resume-data";

const getData = (language: string | undefined) => {
  switch (language) {
    case "en":
      return enResumeData;
    default:
      return enResumeData;
  }
}

export default function App() {
  const { language } = useParams();

  const data = getData(language);

  return <Resume data={data} />
}
