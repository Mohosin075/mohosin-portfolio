import ProjectImage from "./ProjectImage";
import { projectName } from "../../utils/projectName";
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
  const [nextProject, setNextProject] = useState(null);
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
        const index = data.findIndex((p) => String(p.id) === String(id));
        setProject(data[index]);
        setNextProject(index >= 0 && data.length > 1 ? data[(index + 1) % data.length] : null);
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
    <div className="CC page-shell"><div className="state-panel" role="alert">
      <h1>Could not load this case study.</h1>
      <p>Check your connection and try again.</p>
      <button className="btn-v" onClick={() => setAttempt((value) => value + 1)}>Try again</button>
    </div></div>
  );

  if (loading) return (
    <div className="CC page-shell" role="status" aria-label="Loading case study">
      <span className="sr-only">Loading case study</span>
      <div className="work-skeleton" aria-hidden="true"><span /><span /><div style={{ marginTop: 32, height: 360 }} /></div>
    </div>
  );

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
      className="case-study-page page-shell"
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

        <section style={{ marginBottom: 32 }} aria-label="Contribution">
          <h2 className="code-label" style={{ marginBottom: 12 }}>My contribution</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{project.role}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-v">Live Website <ArrowUpRight size={14} /></a>}
            {project.githubServer && <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="btn-ghost">Backend Repository <FaGithub size={14} /></a>}
            {project.githubClient && project.githubClient !== project.githubServer && <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="btn-ghost">Frontend Repository <GitBranch size={14} /></a>}
          </div>
          {!project.demo && !project.video && <p style={{ color: "var(--muted)", marginTop: 12 }}>A public demo is not currently linked. Contact me to discuss the implementation and available walkthrough options.</p>}
          {!project.githubServer && !project.githubClient && <p style={{ color: "var(--muted)", marginTop: 12 }}>Source code is not publicly linked.</p>}
        </section>
        <ProjectImage key={project.id} src={project.image} title={project.title} />

        <nav className="case-study-navigation" aria-label="Case study sections">
          <a href="#case-context">Context</a><a href="#implementation-heading">Implementation</a><a href="#case-contributions">Contributions</a><a href="#case-stack">Technologies</a>
        </nav>
        {/* Content Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 64,
          alignItems: "start"
        }} className="featured-grid">
          
          {/* Left Column: Details */}
          <div>
            <section id="case-context" style={{ marginBottom: 48 }}>
              <h2 className="font-display" style={{ fontSize: 24, color: "var(--chalk)", marginBottom: 20 }}>
                  Product context
              </h2>
              <p style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--muted)",
                marginBottom: 24,
                textAlign: "left"
              }}>
                {project.description}
              </p>
              {project.problem && <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)" }}>{project.problem}</p>}
            </section>

            {project.focus?.length > 0 && (
              <section aria-labelledby="implementation-heading" style={{ marginBottom: 48 }}>
                <h2 id="implementation-heading" className="font-display" style={{ fontSize: 24, marginBottom: 24 }}>
                  Implementation focus
                </h2>
                <div className="case-study-focus">
                  {project.focus.map((item, index) => (
                    <div key={item.title} className="case-study-focus-item">
                      <span aria-hidden="true" className="code-label">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{item.title}</h3>
                        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section id="case-contributions" style={{ marginBottom: 48 }}>
                <h2 className="font-display" style={{ fontSize: 24, color: "var(--chalk)", marginBottom: 20 }}>
                  Contribution summary
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
          <aside id="case-stack" className="case-stack" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
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
                  <h3 className="code-label" style={{ color: "var(--chalk)", fontWeight: 700 }}>Client technologies & integration</h3>
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
                  <h3 className="code-label" style={{ color: "var(--chalk)", fontWeight: 700 }}>Core backend technologies</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {(project.primaryStack || project.backEnd).map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.primaryStack && (
                  <details style={{ marginTop: 20, color: "var(--muted)", fontSize: 14 }}>
                    <summary style={{ cursor: "pointer", padding: "8px 0" }}>All backend libraries & services</summary>
                    <p style={{ marginTop: 12, lineHeight: 1.8 }}>{project.backEnd.join(", ")}</p>
                  </details>
                )}
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
          </aside>

        </div>
      </div>
      {nextProject && <div className="CC"><Link className="next-project" to={"/projects/" + nextProject.id}><span className="eyebrow">Continue exploring</span><span>{projectName(nextProject.title)}</span><ArrowUpRight size={28} /></Link></div>}
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
