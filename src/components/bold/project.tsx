import { ResumeData } from "../../types/resume";
import { Link } from "./ui/link";

interface ProjectsProps {
  project: ResumeData["project"];
}

function Projects({ project }: ProjectsProps) {
  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold uppercase mb-4">
        {project.title}
      </h2>

      <div className="space-y-4">
        {project.projects.map((project, index) => (
          <div key={index}>
            <p className="mb-1">
              <span className="font-bold">{project.name}</span>
              <span className="text-sm flex flex-wrap">
                <span className="flex gap-1 mr-1">
                  {project.links.map((link, i) => (
                    <span key={i}>
                      <Link
                        href={link.url}
                      >
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </span>
                |
                <span className="italic font-bold ml-1">{project.technologies}</span>
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