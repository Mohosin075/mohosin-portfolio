import { NavLink } from "react-router-dom";
import { ArrowRight, Download, Mail, MapPin, Server, Database, Layout, Cpu, Clock } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
  { value: "1+", label: "Years of production experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "∞", label: "Lines of server-side code" },
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
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", paddingTop: 80 }}>
        <div className="CC">

          {/* Top metadata row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40, flexWrap: "wrap" }}
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

            <div style={{ height: 1, width: 1, background: "var(--border)", flexShrink: 0, alignSelf: "stretch" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={11} style={{ color: "var(--muted)" }} />
              <span className="code-label">Dhaka, Bangladesh</span>
            </div>

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

          {/* HERO HEADLINE — big Bebas Neue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
                lineHeight: 0.92,
                letterSpacing: "0.01em",
                color: "var(--chalk)",
                marginBottom: 32,
              }}
            >
              Backend-focused<br />
              <span style={{ color: "var(--vermillion)" }}>Full Stack</span><br />
              Developer
              <span className="cursor-blink" />
            </h1>
          </motion.div>

          {/* Bottom row: description + actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            style={{
              paddingBottom: 56,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ maxWidth: 600 }}>
              <p style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--muted)",
                fontWeight: 400,
                marginBottom: 28,
              }}>
                Md Mohosin Ali — building scalable REST APIs, real-time systems,
                and modern React frontends. 2+ years of production-grade code shipped.
                Specialising in Node.js, TypeScript & MongoDB.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-v"
                >
                  <Download size={14} />
                  Resume
                </a>
                <NavLink to="/projects" className="btn-ghost">
                  View Work
                  <ArrowRight size={14} />
                </NavLink>
              </div>

              {/* Horizontal Socials */}
              <div className="hero-socials-horizontal">
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:mohosinali075@gmail.com", label: "Email" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                  >
                    <s.icon size={15} />
                    <span style={{ fontFamily: "'Space Mono', monospace" }}>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section style={{ padding: "80px 0" }}>
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
                  <div className="tech-card-skills">
                    {category.skills.map((s, i) => (
                      <span key={i} className="skill-tag">
                        {s}
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
      <section style={{ padding: "80px 0" }}>
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

            {/* Right: System Metrics console card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stats-pane"
            >
              <div className="stats-pane-header">
                <span className="code-label">System Metrics</span>
                <div className="status-indicator">
                  <span className="status-dot">
                    <span className="status-dot-ring" style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "rgba(52,199,89,0.4)" }} />
                  </span>
                  <span>Online</span>
                </div>
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
      <section style={{ padding: "80px 0" }}>
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

      {/* ═══════════════ CONTACT ═══════════════ */}
      <Contact />

    </div>
  );
};

export default Home;
