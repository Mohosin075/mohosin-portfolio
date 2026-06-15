import { NavLink } from "react-router-dom";
import { ArrowRight, Download, Mail, MapPin, Server, Database, Layout, Cpu } from "lucide-react";
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
  { value: "2+", label: "Years of production experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "∞", label: "Lines of server-side code" },
];

const Home = () => {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: 80 }}>
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

          {/* Bottom row: description + actions & stats widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hero-bottom-grid"
          >
            {/* Left Column: Description, Actions & Socials */}
            <div>
              <p style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--muted)",
                fontWeight: 400,
                marginBottom: 28,
                maxWidth: 540,
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

            {/* Right Column: Stats console widget */}
            <div className="stats-pane">
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
