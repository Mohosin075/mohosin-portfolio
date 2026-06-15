import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Globe, ArrowLeft, ArrowUpRight, GitBranch, Terminal, Layers, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page render
    window.scrollTo(0, 0);

    fetch("/projects.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProject(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", gap: 12 }}>
        <div className="spin-slow" style={{
          width: 24, height: 24,
          border: "2px solid var(--border)",
          borderTopColor: "var(--vermillion)",
          borderRadius: "50%",
        }} />
        <span className="code-label">Loading project details...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="CC" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", gap: 24 }}>
        <p className="code-label" style={{ fontSize: 14 }}>Project not found</p>
        <Link to="/projects" className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: "100%", paddingTop: 120, paddingBottom: 100 }}
    >
      <div className="CC">
        {/* Back Link */}
        <div style={{ marginBottom: 40 }}>
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              fontFamily: "'Space Mono', monospace",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--chalk)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <ArrowLeft size={14} style={{ color: "var(--vermillion)" }} />
            Back to Projects
          </Link>
        </div>

        {/* Title Block */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className={`badge ${project.category === "backend" ? "badge-red" : "badge-muted"}`}>
              {project.category}
            </span>
            {project.featured && (
              <span className="badge badge-green">Featured Project</span>
            )}
          </div>

          <h1 className="font-display" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--chalk)",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-0.01em"
          }}>
            {project.title}
          </h1>

          <p className="code-label" style={{ fontSize: 14, color: "var(--muted)" }}>
            {project.subtitle}
          </p>
        </div>

        {/* Large Media Image */}
        <div className="img-container" style={{
          aspectRatio: "16/9",
          width: "100%",
          maxHeight: 600,
          position: "relative",
          marginBottom: 64,
          border: "1px solid var(--border)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0) 50%)",
          }} />
        </div>

        {/* Content Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 64,
          alignItems: "start"
        }} className="featured-grid">
          
          {/* Left Column: Details */}
          <div>
            <section style={{ marginBottom: 48 }}>
              <h2 className="font-display" style={{ fontSize: 24, color: "var(--chalk)", marginBottom: 20 }}>
                Overview
              </h2>
              <p style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--muted)",
                marginBottom: 24,
                textAlign: "justify"
              }}>
                {project.description}
              </p>
            </section>

            {project.highlights && project.highlights.length > 0 && (
              <section style={{ marginBottom: 48 }}>
                <h2 className="font-display" style={{ fontSize: 24, color: "var(--chalk)", marginBottom: 20 }}>
                  Key Features & Accomplishments
                </h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        fontSize: 15,
                        color: "var(--muted)",
                        lineHeight: 1.6
                      }}
                    >
                      <span style={{
                        color: "var(--vermillion)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 14,
                        marginTop: 2,
                        flexShrink: 0,
                      }}>
                        →
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            )}

            {/* Action Links */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-v"
                >
                  <Globe size={15} />
                  Live Website
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <FaGithub size={15} />
                  Backend Repository
                </a>
              )}
              {project.githubClient && project.githubClient !== project.githubServer && (
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <GitBranch size={15} />
                  Frontend Repository
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Tech Stack Panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
            {/* Frontend Tech Stack Card */}
            {project.frontEnd && project.frontEnd.length > 0 && (
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: "linear-gradient(90deg, var(--vermillion), transparent)"
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Layers size={16} style={{ color: "var(--vermillion)" }} />
                  <h3 className="code-label" style={{ color: "var(--chalk)", fontWeight: 700 }}>Frontend Stack</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.frontEnd.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Backend Tech Stack Card */}
            {project.backEnd && project.backEnd.length > 0 && (
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: "linear-gradient(90deg, var(--vermillion), transparent)"
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Cpu size={16} style={{ color: "var(--vermillion)" }} />
                  <h3 className="code-label" style={{ color: "var(--chalk)", fontWeight: 700 }}>Backend Stack</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.backEnd.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Tech Stack Card */}
            {project.tools && project.tools.length > 0 && (
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: "linear-gradient(90deg, var(--vermillion), transparent)"
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Terminal size={16} style={{ color: "var(--vermillion)" }} />
                  <h3 className="code-label" style={{ color: "var(--chalk)", fontWeight: 700 }}>Tools & Deployment</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tools.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
