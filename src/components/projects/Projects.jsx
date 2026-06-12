import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Globe, Server, ExternalLink, Star, Terminal,
  ArrowUpRight, Layers, GitBranch, Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full-Stack" },
];

/* ── Shared pill used in both card types ── */
const TechPill = ({ tech, accent }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${
      accent
        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
        : "bg-slate-900 border-slate-800/80 text-slate-500"
    }`}
  >
    <Server size={7} className={accent ? "text-indigo-400" : "text-emerald-500"} />
    {tech}
  </span>
);

/* ── Terminal-style tech block ── */
const TerminalBlock = ({ stack }) => (
  <div className="rounded-xl bg-[#0a0d14] border border-slate-800/60 overflow-hidden text-[10px] font-mono">
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-800/60 bg-slate-900/40">
      <span className="w-2 h-2 rounded-full bg-red-500/70" />
      <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
      <span className="w-2 h-2 rounded-full bg-green-500/70" />
      <span className="text-slate-600 ml-2 text-[9px]">stack.config</span>
    </div>
    <div className="px-4 py-3 space-y-1">
      {stack.slice(0, 6).map((t, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-indigo-500">›</span>
          <span className="text-emerald-400">{t}</span>
        </div>
      ))}
      {stack.length > 6 && (
        <div className="flex items-center gap-2 text-slate-600">
          <span>›</span>
          <span>+{stack.length - 6} more...</span>
        </div>
      )}
    </div>
  </div>
);

/* ── FEATURED CARD — large horizontal layout ── */
const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6 }}
    className="group relative rounded-[2rem] overflow-hidden border border-slate-800/60 hover:border-indigo-500/30 transition-all duration-500"
    style={{
      background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(10,15,30,0.98) 100%)",
    }}
  >
    {/* Gradient glow behind featured cards */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-emerald-600/10 blur-xl" />
    </div>

    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
      {/* ── Image side ── */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950 hidden lg:block" />
        <div className="absolute inset-0 bg-slate-950/60 lg:bg-slate-950/30 backdrop-blur-[1px] lg:backdrop-blur-none opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 lg:hidden">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/95 text-slate-950 flex items-center justify-center shadow-2xl hover:bg-indigo-500 hover:text-white transition-all">
              <Globe size={18} />
            </a>
          )}
          {project.githubServer && (
            <a href={project.githubServer} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/95 text-slate-950 flex items-center justify-center shadow-2xl hover:bg-slate-800 hover:text-white transition-all">
              <FaGithub size={18} />
            </a>
          )}
        </div>

        {/* Badges on image */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-500/50 text-white text-[9px] font-black uppercase tracking-widest">
            <Star size={8} className="fill-white" />
            Featured
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-sm border ${
            project.category === "backend"
              ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-400"
              : "bg-blue-950/90 border-blue-500/40 text-blue-400"
          }`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Content side ── */}
      <div className="p-8 lg:p-10 flex flex-col justify-between relative z-10">
        <div>
          <p className="text-[9px] text-indigo-400/80 font-black uppercase tracking-[0.2em] mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-2xl font-black tracking-tight text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed mb-5 font-medium line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-2 mb-6">
              {project.highlights.slice(0, 4).map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[10px] text-slate-400">
                  <span className="w-4 h-4 rounded bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu size={8} className="text-indigo-400" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Terminal Tech Block */}
          <TerminalBlock stack={project.backEnd} />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-800/60">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
            >
              <Globe size={12} /> Live Demo
            </a>
          )}
          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider hover:text-white hover:border-slate-700 transition-all"
            >
              <FaGithub size={12} /> Server Repo
            </a>
          )}
          {project.githubClient && project.githubClient !== project.githubServer && (
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider hover:text-white hover:border-slate-700 transition-all"
            >
              <GitBranch size={12} /> Client Repo
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── COMPACT CARD — smaller grid card ── */
const CompactCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex flex-col rounded-[1.75rem] overflow-hidden border border-slate-800/60 hover:border-indigo-500/25 transition-all duration-500"
    style={{
      background: "rgba(10, 14, 28, 0.9)",
    }}
  >
    {/* Image */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1c] via-slate-950/20 to-transparent" />

      {/* Hover actions */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/70 backdrop-blur-sm">
        {project.demo && (
          <motion.a whileHover={{ scale: 1.1 }} href={project.demo} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
            <Globe size={15} />
          </motion.a>
        )}
        {project.githubServer && (
          <motion.a whileHover={{ scale: 1.1 }} href={project.githubServer} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
            <FaGithub size={15} />
          </motion.a>
        )}
        {project.githubClient && project.githubClient !== project.githubServer && (
          <motion.a whileHover={{ scale: 1.1 }} href={project.githubClient} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
            <ExternalLink size={15} />
          </motion.a>
        )}
      </div>

      {/* Category badge */}
      <div className="absolute top-3 right-3">
        <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest backdrop-blur-sm border ${
          project.category === "backend"
            ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-400"
            : "bg-blue-950/90 border-blue-500/40 text-blue-400"
        }`}>
          {project.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-[9px] text-indigo-400/70 font-black uppercase tracking-[0.18em] mb-1.5">
        {project.subtitle}
      </p>
      <h3 className="text-base font-black text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-500 text-[11px] leading-relaxed mb-4 line-clamp-2 font-medium">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="mt-auto pt-4 border-t border-slate-800/50 flex flex-wrap gap-1.5">
        {project.backEnd?.slice(0, 4).map((t, i) => (
          <TechPill key={i} tech={t} />
        ))}
        {project.backEnd?.length > 4 && (
          <span className="px-2 py-0.5 rounded text-[9px] font-black text-slate-600">
            +{project.backEnd.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

/* ══════════════ MAIN COMPONENT ══════════════ */
const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setProjects(limit ? data.slice(0, limit) : data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [limit]);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-5">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin" />
          <Terminal size={18} className="absolute inset-0 m-auto text-indigo-400" />
        </div>
        <p className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] animate-pulse">
          Loading Projects...
        </p>
      </div>
    );

  return (
    <div className={`${!limit ? "section-padding min-h-screen pt-32" : "w-full"}`}>
      {/* ── Full-page header ── */}
      {!limit && (
        <div className="CContainer text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-5 uppercase tracking-widest"
          >
            <Layers size={12} /> Portfolio
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
            Full-stack & backend systems built for real production environments.
          </motion.p>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mt-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-slate-900/80 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      )}

      {/* ── Cards ── */}
      <div className={`${!limit ? "CContainer" : ""} space-y-6 sm:space-y-8`}>
        <AnimatePresence mode="popLayout">
          {/* Featured — full-width bento cards */}
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}

          {/* Rest — 2-col compact grid */}
          {rest.length > 0 && (
            <motion.div
              key="compact-grid"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {rest.map((project, i) => (
                <CompactCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

Projects.propTypes = {
  limit: PropTypes.number,
};

export default Projects;
