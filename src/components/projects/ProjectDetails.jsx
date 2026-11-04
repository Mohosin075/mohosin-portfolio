import { loadProjects } from "../../utils/loadProjects";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Globe, ArrowLeft, ArrowUpRight, GitBranch, Terminal, Layers, Cpu, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on page render
    window.scrollTo(0, 0);

    const controller = new AbortController();
    setLoading(true);
    setError(false);
    loadProjects(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;
        setProject(data.find((p) => String(p.id) === String(id)));
        setLoading(false);
      })
      .catch(() => {
        if (controller.signal.aborted) return;
        setError(true);
        setLoading(false);
      });
    return () => controller.abort();
  }, [id, attempt]);

  if (error) return (
    <div className="CC" role="alert" style={{ paddingTop: 140, paddingBottom: 80 }}>
      <p>Projects could not be loaded. Check your connection and try again.</p>
      <button className="btn-v" style={{ marginTop: 20 }} onClick={() => setAttempt((value) => value + 1)}>Try again</button>
    </div>
  );

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
            fontSize: "clamp(2rem, 6vw, 5rem)",
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="img-container" 
          style={{
            width: "100%",
            position: "relative",
            marginBottom: 64,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(230, 57, 70, 0.15)"
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 20%, rgba(10,10,10,0) 100%)",
            pointerEvents: "none"
          }} />
          {/* Subtle top glare effect */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, height: "15%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
            pointerEvents: "none"
          }} />
        </motion.div>

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
              {project.video && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-ghost"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <Play size={15} fill="currentColor" />
                  Video Overview
                </button>
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
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={project.video}
        projectTitle={project.title}
      />
    </motion.div>
  );
};

export default ProjectDetails;
