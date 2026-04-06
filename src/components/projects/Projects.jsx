import { useEffect, useState } from "react";
import Button from "../ui/Button";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="md:w-10/12 mx-auto mt-5 md:mt-10 relative">
      <div className="bgShadow inset-y-20 inset-x-0"></div>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg bg-card"
          >
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={project?.image}
                alt={project?.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">{project?.title}</h3>
              <p className="text-sm text-muted">
                {project?.description.slice(0, 180)}
                {project?.description.length > 180 ? "..." : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
                {project?.forntEnd?.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 rounded">
                    {t}
                  </span>
                ))}
                {project?.backEnd?.map((t, i) => (
                  <span key={"b" + i} className="px-2 py-1 bg-white/5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {project?.githubClient && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project?.githubClient}
                      className="text-sm text-muted underline"
                    >
                      Client
                    </a>
                  )}
                  {project?.githubServer && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project?.githubServer}
                      className="text-sm text-muted underline"
                    >
                      Server
                    </a>
                  )}
                </div>
                <a
                  href={project?.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
