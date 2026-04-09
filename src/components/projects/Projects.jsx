import { useEffect, useState } from "react";
import { ExternalLink, Code, Settings, Layers, Globe, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        setProjects(limit ? data.slice(0, limit) : data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <div className="w-16 h-16 border-4 border-accent-purple/20 border-t-accent-purple rounded-full animate-spin" />
      <p className="text-gray-500 font-bold animate-pulse">Orchestrating Projects...</p>
    </div>
  );

  return (
    <div className={`${!limit ? 'section-padding min-h-screen pt-32' : 'w-full'}`}>
      {!limit && (
        <div className="CContainer text-center mb-20 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Engineering <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            A curated collection of backend architectures, full-stack applications, and system designs.
          </motion.p>
        </div>
      )}

      <div className={`${!limit ? 'CContainer' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-10 2xl:gap-12`}>
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col glassify-dark rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Project Image Container */}
              <div className="relative h-60 sm:h-72 2xl:h-80 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                  src={project?.image} 
                  alt={project?.title} 
                />
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 sm:gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl hover:bg-accent-purple hover:text-white transition-all"
                  >
                    <Globe size={20} />
                  </motion.a>
                  {(project?.githubClient || project?.githubServer) && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project?.githubClient || project?.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl hover:bg-accent-blue hover:text-white transition-all"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-wrap gap-2 justify-end pointer-events-none">
                  {project?.frontEnd?.slice(0, 2).map((tech, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-accent-purple">
                  <Layers size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Project {index + 1}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black mb-4 group-hover:text-accent-purple transition-colors tracking-tight">
                  {project?.title}
                </h3>
                
                <p className="text-gray-500 text-sm sm:text-base mb-8 line-clamp-3 leading-relaxed font-medium">
                  {project?.description}
                </p>

                {/* Tech Stack Visual */}
                <div className="mt-auto pt-6 sm:pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project?.backEnd?.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-400">
                        <Server size={12} className="text-accent-blue" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
