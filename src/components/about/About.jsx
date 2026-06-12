import { motion } from "framer-motion";
import {
  Server, Database, Cpu, Clock, CalendarDays,
} from "lucide-react";
import {
  SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiReact,
  SiDocker, SiAmazon, SiPrisma, SiPostgresql, SiStripe,
  SiSocketdotio, SiFirebase, SiGithub, SiPostman, SiRedis,
} from "react-icons/si";

const allSkills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "React.js", icon: SiReact },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "AWS S3", icon: SiAmazon },
  { name: "Firebase", icon: SiFirebase },
  { name: "Stripe", icon: SiStripe },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
];

const experience = [
  {
    role: "Jr. Backend Developer",
    company: "Sparktech Agency",
    period: "Jun 2025 – Present",
    current: true,
    bullets: [
      "Building scalable backend services with Node.js, Express.js, TypeScript & MongoDB",
      "Implementing JWT auth, RESTful APIs, and Mongoose models in production",
      "Working in an agile team on real client-facing business applications",
      "Contributing to CI/CD workflows and code review processes",
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT"],
  },
];

const services = [
  {
    icon: Server,
    title: "API Design & Development",
    desc: "Secure, well-documented RESTful APIs optimised for high-throughput production environments. Rate limiting, caching, versioning.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Efficient MongoDB and PostgreSQL schemas — proper indexing, aggregation pipelines, and Prisma ORM integrations.",
  },
  {
    icon: Cpu,
    title: "Real-time Systems",
    desc: "Bidirectional communication with Socket.io, event-driven architecture, and push notification systems at scale.",
  },
];

const About = () => {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="CC">

        {/* Page header */}
        <div style={{ marginBottom: 80, borderBottom: "1px solid var(--border)", paddingBottom: 64 }}>
          <div className="rule-label" style={{ marginBottom: 24 }}>
            About
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--chalk)",
              lineHeight: 0.9,
              letterSpacing: "0.01em",
              marginBottom: 32,
            }}
          >
            Engineering<br />
            <span style={{ color: "var(--vermillion)" }}>Excellence</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, lineHeight: 1.75 }}>
            Backend-focused Full Stack Developer with 2+ years of hands-on experience building
            production-grade systems — scalable APIs, real-time features, and modern React frontends.
          </p>
        </div>

        {/* Two column: photo + bio */}
        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 64, marginBottom: 80 }}
             className="about-grid">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-photo-wrapper"
          >
            <div style={{ position: "relative" }}>
              <div className="img-container" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://i.ibb.co.com/C5RnCvpF/ai-1.png"
                  alt="Md Mohosin Ali"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Caption strip */}
              <div style={{
                marginTop: 16,
                padding: "12px 16px",
                border: "1px solid var(--border)",
                borderRadius: 2,
                background: "var(--surface)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2 }}>
                    Md Mohosin Ali
                  </p>
                  <p className="code-label" style={{ marginTop: 4 }}>Backend / Full Stack</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ position: "relative", width: 8, height: 8 }}>
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34C759" }} />
                    <span className="status-dot-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(52,199,89,0.4)" }} />
                  </div>
                  <span className="code-label" style={{ color: "#34C759" }}>Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Stats row */}
            <div className="about-stats-grid">
              {[
                { val: "2+", label: "Years experience" },
                { val: "10+", label: "Projects shipped" },
                { val: "30+", label: "APIs built" },
              ].map((s, i) => (
                <div key={i} className="about-stat-item">
                  <div className="font-display" style={{ fontSize: 44, color: "var(--chalk)", lineHeight: 1 }}>
                    {s.val}
                  </div>
                  <p className="code-label" style={{ marginTop: 6 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Bio text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)" }}>
                I&apos;m a <span style={{ color: "var(--chalk)", fontWeight: 600 }}>Backend-focused Full Stack Developer</span> with
                2+ years building production systems. Currently working as a{" "}
                <span style={{ color: "var(--vermillion)", fontWeight: 600 }}>Jr. Backend Developer at Sparktech Agency</span>,
                architecting scalable services while delivering complete full-stack applications.
              </p>

              <blockquote style={{
                borderLeft: `2px solid var(--vermillion)`,
                paddingLeft: 20,
                color: "var(--muted)",
                fontSize: 14,
                lineHeight: 1.75,
                fontStyle: "italic",
              }}>
                &quot;I build both the engine and the dashboard — backend systems that are fast
                and secure, with frontends that feel alive.&quot;
              </blockquote>

              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)" }}>
                Strong in <span style={{ color: "var(--chalk)", fontWeight: 600 }}>Node.js, Express & MongoDB</span> on the backend,
                equally comfortable with <span style={{ color: "var(--chalk)", fontWeight: 600 }}>React, Redux & TanStack Query</span> on
                the frontend. I write clean, maintainable code and build complete end-to-end products.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What I do */}
        <div style={{ marginBottom: 80 }}>
          <div className="rule-label" style={{ marginBottom: 40 }}>What I Do</div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="service-card"
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <s.icon size={20} style={{ color: "var(--vermillion)", marginBottom: 16 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", marginBottom: 12, lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.75 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience + Education */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 80 }} className="exp-grid">
          {/* Experience */}
          <div>
            <div className="rule-label" style={{ marginBottom: 32 }}>Experience</div>
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  padding: "24px",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  background: "var(--surface)",
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2 }}>
                      {job.role}
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--vermillion)", fontWeight: 600, marginTop: 4 }}>
                      {job.company}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    {job.current && (
                      <span className="badge badge-green">Current</span>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={10} style={{ color: "var(--muted)" }} />
                      <span className="code-label">{job.period}</span>
                    </div>
                  </div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  {job.bullets.slice(0, 3).map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--muted)" }}>
                      <span style={{ color: "var(--vermillion)", flexShrink: 0, fontFamily: "monospace" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {job.stack.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="rule-label" style={{ marginBottom: 32 }}>Education</div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: 3,
                background: "var(--surface)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2, marginBottom: 6 }}>
                Diploma in Computer Technology
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
                Dinajpur Polytechnic Institute
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
                <CalendarDays size={12} style={{ color: "var(--muted)" }} />
                <span className="code-label">Completed Jan 2025</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <span className="tech-tag">Computer Technology</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills grid */}
        <div>
          <div className="rule-label" style={{ marginBottom: 32 }}>Core Tech Stack</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 8,
          }}>
            {allSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  cursor: "default",
                  transition: "border-color 0.2s",
                  background: "var(--surface)",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--vermillion)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <skill.icon size={16} style={{ color: "var(--muted)", flexShrink: 0 }} />
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--muted)",
                  letterSpacing: "0.04em",
                }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
