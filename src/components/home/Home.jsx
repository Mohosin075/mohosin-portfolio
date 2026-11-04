import ProfileImage from "../ProfileImage";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download, MapPin, Server, Database, Layout, Cpu, Clock } from "lucide-react";

import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "Socket.io", "REST API", "JWT", "Zod"]
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"]
  },
  {
    title: "Frontend & Client",
    icon: Layout,
    skills: ["React.js", "TypeScript"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cpu,
    skills: ["Docker", "AWS S3", "Stripe", "OpenAI"]
  }
];

const stats = [
  { value: "2025", label: "At Sparktech since June" },
  { value: "6", label: "Selected projects" },
];

const experience = [
  {
    role: "Jr. Backend Developer",
    company: "Sparktech Agency",
    period: "Jun 2025 – Present",
    bullets: [
      "Building and maintaining scalable backend services using Node.js, Express.js, TypeScript, and MongoDB",
      "Collaborating with a small, agile team to deliver solutions aligned with the client's business needs",
      "Implementing secure authentication, RESTful APIs, and efficient database models with Mongoose",
      "Actively improving code quality with validation, error handling, and best practices",
      "Contributing to team discussions, project planning, and continuous integration workflows",
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT"],
  },
];

const Home = () => {
  return (
    <div className="home-page" style={{ overflowX: "hidden", width: "100%" }}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="home-hero">
        <div className="CC">
          <div className="hero-grid-layout">

            {/* Left Column: Text Content */}
            <div className="hero-text-column">
              {/* Top metadata row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hero-metadata-row"
                style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ position: "relative", width: 8, height: 8 }}>
                    <span style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      background: "#34C759",
                    }} />
                    <span className="status-dot-ring" style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      background: "rgba(52,199,89,0.4)",
                    }} />
                  </div>
                  <span className="code-label">Available for work</span>
                </div>

                <div style={{ height: 12, width: 1, background: "var(--border)", flexShrink: 0 }} />

                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={11} style={{ color: "var(--muted)" }} />
                  <span className="code-label">Dhaka, Bangladesh</span>
                </div>

                <div style={{ height: 12, width: 1, background: "var(--border)", flexShrink: 0 }} />

                <a
                  href="https://www.linkedin.com/company/sparktechagency/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-label underline-reveal"
                  style={{ textDecoration: "none", color: "var(--muted)" }}
                >
                  @Sparktech Agency
                </a>
              </motion.div>

              {/* HERO HEADLINE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%" }}
              >
                <p className="hero-introduction">Hi, I&apos;m Mohosin Ali</p>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.15rem, 5vw, 4.25rem)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.01em",
                    color: "var(--chalk)",
                    marginBottom: 24,
                  }}
                >
                  Backend-focused <br />
                  <span style={{ color: "var(--vermillion)" }}>Full Stack</span> Developer

                </h1>
              </motion.div>

              {/* Bio description, actions, and socials */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                style={{ width: "100%" }}
              >
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  fontWeight: 400,
                  marginBottom: 28,
                  maxWidth: 580,
                }}>
                  I build reliable APIs, real-time systems, and React applications.
                  Working at Sparktech Agency since June 2025 with Node.js, TypeScript & MongoDB.
                </p>

                <div className="hero-actions-row">
                  <NavLink to="/projects" className="btn-v">
                    View Work <ArrowRight size={16} />
                  </NavLink>
                  <a
                    href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
                    target="_blank" rel="noopener noreferrer" className="btn-ghost"
                  >
                    <Download size={16} /> Resume
                  </a>
                </div>

              </motion.div>
            </div>

            {/* Right Column: Profile Image */}
            <motion.div
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-image-wrapper"
            >
              <div className="hero-image-container">
                <div className="hero-image-frame">
                  <ProfileImage sizes="(min-width: 900px) 280px, (min-width: 640px) 200px, 180px" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="CC">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="rule-label" style={{ marginBottom: 16 }}>
                Selected Work
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--chalk)", lineHeight: 0.95 }}>
                Projects
              </h2>
            </div>
            <NavLink
              to="/projects"
              style={{
                display: "flex",
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
              onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              All projects <ArrowRight size={14} />
            </NavLink>
          </div>
          <Projects limit={3} />
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section className="home-section">
        <div className="CC">
          <div className="rule-label" style={{ marginBottom: 40 }}>
            Technical Stack
          </div>
          <div className="tech-stack-grid">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="tech-card"
                >
                  <div className="tech-card-header">
                    <Icon size={18} style={{ color: "var(--vermillion)" }} />
                    <h3 className="tech-card-title">{category.title}</h3>
                  </div>
                  <div className="tech-card-skills-clean">
                    {category.skills.map((s, i) => (
                      <span key={i} className="skill-text-item">
                        {s}
                        {i < category.skills.length - 1 && (
                          <span className="skill-divider">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERIENCE ═══════════════ */}
      <section className="home-section">
        <div className="CC">
          <div className="rule-label" style={{ marginBottom: 40 }}>
            Experience
          </div>
          <div className="experience-grid">
            {/* Left: Job experience details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: 32,
                    background: "var(--surface)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "linear-gradient(90deg, var(--vermillion), transparent)"
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2 }}>
                        {job.role}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--vermillion)", fontWeight: 600, marginTop: 4 }}>
                        {job.company}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Clock size={12} style={{ color: "var(--muted)" }} />
                      <span className="code-label">{job.period}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--vermillion)", flexShrink: 0, fontFamily: "monospace" }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {job.stack.map((t, j) => (
                      <span key={j} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Experience at a glance console card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stats-pane"
            >
              <div className="stats-pane-header">
                <span className="code-label">Experience at a glance</span>

              </div>
              <div className="stats-pane-grid">
                {stats.map((s, i) => (
                  <div key={i} className="stat-pane-item">
                    <span className="stat-pane-value">{s.value}</span>
                    <span className="stat-pane-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS PREVIEW ═══════════════ */}


      {/* ═══════════════ CONTACT ═══════════════ */}
      <Contact />

    </div>
  );
};

export default Home;
