import { ResumeData } from "../types/resume";
import { Link } from "./ui/link";

interface ProjectsProps {
  projects: Pick<ResumeData, "projects">["projects"];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index}>
            <p className="mb-1">
              <span className="font-bold">{project.name}</span>
              {" "}
              <span className="text-sm">(
              {project.links.map((link, i) => (
                <span key={i}>
                  <Link
                    href={link.url}
                  >
                    {link.label}
                  </Link>
                  {i < project.links.length - 1 ? ", " : ""}
                </span>
              ))}
              ) <span className="italic">{project.technologies}</span>
              </span>
            </p>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;