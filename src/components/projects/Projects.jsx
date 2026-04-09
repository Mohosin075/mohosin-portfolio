import { useEffect, useState } from "react";
import { ExternalLink, Code, Settings } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    fetch("projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Projects loaded successfully:", data);
        setProjects(limit ? data.slice(0, limit) : data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div className="text-center py-20 text-gray-400">Loading projects...</div>;
  if (projects.length === 0) return <div className="text-center py-20 text-gray-400">No projects found.</div>;

  return (
    <div className={`${!limit ? 'CContainer py-24' : 'w-full'}`}>
      {!limit && (
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive list of my work, ranging from backend architectures to full-stack applications.
          </motion.p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col glassify-dark rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={project?.image} 
                alt={project?.title || "Project Image"} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a
                  href={project?.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-black hover:bg-accent-purple hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                {(project?.githubClient || project?.githubServer) && (
                  <a
                    href={project?.githubClient || project?.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-black hover:bg-accent-blue hover:text-white transition-all duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors">
                {project?.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project?.description}
              </p>

              {/* Technologies */}
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project?.frontEnd?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                      {tech}
                    </span>
                  ))}
                  {project?.backEnd?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    {project?.githubClient && (
                      <a href={project.githubClient} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Code size={18} />
                      </a>
                    )}
                    {project?.githubServer && (
                      <a href={project.githubServer} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Settings size={18} />
                      </a>
                    )}
                  </div>
                  <a
                    href={project?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white group/link"
                  >
                    LIVE PREVIEW
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
