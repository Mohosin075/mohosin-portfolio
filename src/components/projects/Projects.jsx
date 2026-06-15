import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Globe, ArrowUpRight, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

/* ── FEATURED PROJECT CARD ── */
const FeaturedCard = ({ project, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
    <article className="project-card">

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
           className="featured-grid">

        {/* Image side */}
        <div className="img-container" style={{ aspectRatio: "16/10", position: "relative" }}>
          <Link to={`/projects/${project.id}`} style={{ display: "block", width: "100%", height: "100%" }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Link>
          {/* Subtle dark overlay only at bottom */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(10,10,10,0.6), transparent)",
            pointerEvents: "none"
          }} />
          {/* Category tag on image */}
          <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 8, pointerEvents: "none" }}>
            <span className={`badge ${project.category === "backend" ? "badge-red" : "badge-muted"}`}>
              {project.category}
            </span>
            {project.featured && (
              <span className="badge badge-green">Live</span>
            )}
          </div>
        </div>

        {/* Content side */}
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", paddingTop: 4 }}>
          <div>
            {/* Project number */}
            <span className="project-num" style={{ display: "block", marginBottom: 0, userSelect: "none" }}>
              {num}
            </span>

            {/* Subtitle */}
            <p className="code-label" style={{ marginBottom: 12 }}>
              {project.subtitle}
            </p>

            {/* Title */}
            <h3 className="font-display" style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--chalk)",
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "-0.01em",
            }}>
              <Link to={`/projects/${project.id}`} style={{ color: "inherit", textDecoration: "none" }} className="underline-reveal">
                {project.title}
              </Link>
            </h3>

            {/* Description */}
            <p style={{
              fontSize: 14,
              lineHeight: 1.75,
              color: "var(--muted)",
              marginBottom: 24,
              maxWidth: 400,
            }}>
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && (
              <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                {project.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 13, color: "var(--muted)" }}>
                    <span style={{
                      color: "var(--vermillion)",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      marginTop: 2,
                      flexShrink: 0,
                    }}>
                      →
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
              {project.backEnd?.slice(0, 7).map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
              {project.backEnd?.length > 7 && (
                <span className="tech-tag" style={{ opacity: 0.5 }}>+{project.backEnd.length - 7}</span>
              )}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to={`/projects/${project.id}`}
              className="btn-v"
            >
              View Details
              <ArrowUpRight size={13} />
            </Link>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Globe size={13} />
                Live Site
              </a>
            )}
            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FaGithub size={13} />
                Server
              </a>
            )}
            {project.githubClient && project.githubClient !== project.githubServer && (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GitBranch size={13} />
                Client
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
    </motion.div>
  );
};

/* ── COMPACT PROJECT CARD ── */
const CompactCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="compact-card"
  >
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Image */}
      <div className="img-container" style={{ height: 180, position: "relative" }}>
        <Link to={`/projects/${project.id}`} style={{ display: "block", height: "100%" }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(10,10,10,0.2)",
          pointerEvents: "none"
        }} />
        <div style={{ position: "absolute", top: 12, left: 12, pointerEvents: "none" }}>
          <span className={`badge ${project.category === "backend" ? "badge-red" : "badge-muted"}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 20 }}>
        <p className="code-label" style={{ marginBottom: 6 }}>{project.subtitle}</p>
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "var(--chalk)",
          marginBottom: 10,
          lineHeight: 1.2,
        }}>
          <Link to={`/projects/${project.id}`} style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "var(--vermillion)"} onMouseLeave={e => e.currentTarget.style.color = "var(--chalk)"}>
            {project.title}
          </Link>
        </h3>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12 }}>
          {project.description.slice(0, 100)}...
        </p>
        <Link to={`/projects/${project.id}`} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "'Space Mono', monospace",
          color: "var(--vermillion)",
          textDecoration: "none",
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.05em"
        }}>
          Read Details <ArrowUpRight size={11} />
        </Link>

        {/* Tech + links row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {project.backEnd?.slice(0, 3).map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
            {project.backEnd?.length > 3 && (
              <span className="tech-tag" style={{ opacity: 0.4 }}>+{project.backEnd.length - 3}</span>
            )}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--muted)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--vermillion)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <Globe size={15} />
              </a>
            )}
            {project.githubServer && (
              <a href={project.githubServer} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--muted)", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <FaGithub size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

/* ══════════════════ MAIN ══════════════════ */
const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((r) => r.json())
      .then((data) => {
        setProjects(limit ? data.slice(0, limit) : data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [limit]);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  if (loading)
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 0", gap: 12 }}>
        <div className="spin-slow" style={{
          width: 20, height: 20,
          border: "2px solid var(--border)",
          borderTopColor: "var(--vermillion)",
          borderRadius: "50%",
        }} />
        <span className="code-label">Loading projects</span>
      </div>
    );

  return (
    <div style={{ width: "100%" }}>

      {/* Full-page header with category filter */}
      {!limit && (
        <div style={{ paddingTop: 120, paddingBottom: 64 }} className="CC">
          <div className="rule-label" style={{ marginBottom: 24 }}>
            Portfolio
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--chalk)", lineHeight: 0.9, letterSpacing: "0.01em" }}
            >
              Selected<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(240,237,230,0.2)" }}>Work</span>
            </motion.h2>

            {/* Category filter — minimal tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ display: "flex", gap: 2, padding: 3, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 3 }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 2,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                    background: activeCategory === cat.id ? "var(--vermillion)" : "transparent",
                    color: activeCategory === cat.id ? "#fff" : "var(--muted)",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Project list */}
      <div className={!limit ? "CC" : ""}>
        <AnimatePresence mode="popLayout">
          {/* Featured */}
          <div key="featured">
            {featured.map((project, i) => (
              <FeaturedCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Compact grid */}
          {rest.length > 0 && (
            <motion.div
              key="rest"
              layout
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: 16,
                marginTop: 40,
                paddingTop: 40,
                borderTop: "1px solid var(--border)",
              }}
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

FeaturedCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
    description: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    frontEnd: PropTypes.arrayOf(PropTypes.string),
    backEnd: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    demo: PropTypes.string,
    githubServer: PropTypes.string,
    githubClient: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

CompactCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
    description: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    frontEnd: PropTypes.arrayOf(PropTypes.string),
    backEnd: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    demo: PropTypes.string,
    githubServer: PropTypes.string,
    githubClient: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

Projects.propTypes = { limit: PropTypes.number };
export default Projects;
