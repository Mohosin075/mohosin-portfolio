import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layers, Globe, Server, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full-Stack" },
];

const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json")
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

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-slate-500 font-bold animate-pulse text-sm uppercase tracking-widest">
          Loading Projects...
        </p>
      </div>
    );

  return (
    <div className={`${!limit ? "section-padding min-h-screen pt-32" : "w-full"}`}>
      {/* Page header — only on full page */}
      {!limit && (
        <div className="CContainer text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-5 uppercase tracking-widest"
          >
            <Layers size={12} />
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Engineering{" "}
            <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="section-subtitle"
          >
            A curated collection of backend architectures, full-stack
            applications, and system designs built for real production environments.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mt-4"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      )}

      {/* Cards Grid */}
      <div
        className={`${!limit ? "CContainer" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id || index}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: limit ? index * 0.1 : 0, duration: 0.5 }}
              className="card-hover-glow group relative flex flex-col glassify-dark rounded-[2rem] overflow-hidden border border-white/5 hover:border-indigo-500/20 transition-all duration-500"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-500/40 text-white text-[9px] font-black uppercase tracking-widest">
                  <Star size={9} className="fill-white" />
                  Featured
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-sm border ${
                  project.category === "backend"
                    ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-400"
                    : "bg-blue-950/80 border-blue-500/30 text-blue-400"
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={project?.image}
                  alt={project?.title}
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                  {project?.demo && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center shadow-xl hover:bg-indigo-500 hover:text-white transition-all"
                    >
                      <Globe size={18} />
                    </motion.a>
                  )}
                  {project?.githubServer && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Server"
                      className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center shadow-xl hover:bg-slate-800 hover:text-white transition-all"
                    >
                      <FaGithub size={18} />
                    </motion.a>
                  )}
                  {project?.githubClient && project?.githubClient !== project?.githubServer && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Client"
                      className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center shadow-xl hover:bg-slate-800 hover:text-white transition-all"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-7 flex-grow flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-widest mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors tracking-tight">
                      {project?.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-500 text-xs mb-5 line-clamp-3 leading-relaxed font-medium">
                  {project?.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-[10px] text-slate-500">
                        <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="mt-auto pt-5 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project?.backEnd?.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[9px] font-bold uppercase tracking-wider text-slate-500"
                      >
                        <Server size={8} className="text-emerald-500" />
                        {tech}
                      </span>
                    ))}
                    {project?.backEnd?.length > 5 && (
                      <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[9px] font-bold text-slate-600">
                        +{project.backEnd.length - 5} more
                      </span>
                    )}
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

Projects.propTypes = {
  limit: PropTypes.number,
};

export default Projects;
