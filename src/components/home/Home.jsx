import { NavLink } from "react-router-dom";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";

const skills = [
  "Node.js", "Express.js", "TypeScript", "MongoDB", "React.js",
  "PostgreSQL", "Docker", "AWS S3", "Socket.io", "Prisma",
  "Redis", "REST API", "JWT", "Stripe", "OpenAI", "Zod",
];

const stats = [
  { value: "2+", label: "Years of production experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "∞", label: "Lines of server-side code" },
];

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: 120 }}>
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
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "flex-end",
              paddingBottom: 56,
              borderBottom: "1px solid var(--border)",
            }}
            className="flex-col-mobile"
          >
            <div style={{ maxWidth: 480 }}>
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
            </div>

            {/* Socials — vertical stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                >
                  <s.icon size={16} />
                  <span style={{ fontFamily: "'Space Mono', monospace" }}>{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="CC"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", paddingTop: 32, paddingBottom: 80, gap: 0 }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "0 32px 0 0",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                marginRight: i < stats.length - 1 ? 32 : 0,
              }}
            >
              <div className="font-display" style={{ fontSize: 48, color: "var(--chalk)", lineHeight: 1 }}>
                {s.value}
              </div>
              <p className="code-label" style={{ marginTop: 8, lineHeight: 1.4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
        <div className="CC">
          <div className="rule-label" style={{ marginBottom: 32 }}>
            Technical Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((s, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="skill-tag"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS PREVIEW ═══════════════ */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
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
