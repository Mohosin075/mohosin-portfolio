import { useEffect, useState } from "react";

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
    <div className="md:w-10/12 mx-auto mt-5 md:mt-10">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card md:card-side bg-base-100 shadow-xl"
          >
            <figure className=" md:w-1/2">
              <img className="" src={project?.image} alt="Movie" />
            </figure>
            <div className="card-body md:w-1/2">
              <h2 className="card-title uppercase font-bold text-lg md:text-xl">
                {project?.title}
              </h2>
              <p className="text-sm">
                {project?.description.slice(0, 200)}{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  {" "}
                  see more...
                </span>
              </p>
              <h4 className="font-semibold text-lg">Technology </h4>
              <hr />
              <div className="text-sm space-y-2">
                {project?.forntEnd && (
                  <p>
                    <span className="font-semibold">Front End</span> :{" "}
                    {project?.forntEnd.map((pro) => (
                      <span key={pro.id}>{pro}, </span>
                    ))}
                  </p>
                )}
                {project?.backEnd && (
                  <p>
                    <span className="font-semibold">Back End</span> :{" "}
                    {project?.backEnd.map((pro) => (
                      <span key={pro.id}>{pro}, </span>
                    ))}
                  </p>
                )}
                {project?.tools && (
                  <p>
                    <span className="font-semibold">Tools</span> :{" "}
                    {project?.tools.map((pro) => (
                      <span key={pro.id}>{pro}, </span>
                    ))}
                  </p>
                )}
              </div>
              <h4 className="font-semibold text-lg">GitHub Link </h4>
              <div className="flex">
                {project?.githubClient && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.githubClient}
                  >
                    <button className="btn btn-link btn-sm">Client site</button>
                  </a>
                )}
                {project?.githubServer && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.githubServer}
                  >
                    <button className="btn btn-link btn-sm">Server site</button>
                  </a>
                )}
              </div>
              <div className="card-actions justify-end">
                <a
                  href={project?.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn ml-4">Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
