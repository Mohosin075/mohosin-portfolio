import { experience, profile } from "../../data/profile";
import ProfileImage from "../ProfileImage";
import { motion } from "framer-motion";
import {
  Server, Database, Cpu, Clock, CalendarDays, Layout, Code2,
} from "lucide-react";
const skillCategories = [
  { title: "Languages", icon: Code2, skills: ["JavaScript (ES6+)","TypeScript","SQL"] },
  { title: "Backend & APIs", icon: Server, skills: ["Node.js","Express.js","Socket.io","REST APIs","Passport.js","JWT","Zod"] },
  { title: "Databases & Caching", icon: Database, skills: ["MongoDB","Mongoose","PostgreSQL","Prisma","Redis"] },
  { title: "Frontend & Mobile", icon: Layout, skills: ["React.js","Next.js","Redux Toolkit","Tailwind CSS","TanStack Query","Flutter","Dart"] },
  { title: "Cloud & Deployment", icon: Cpu, skills: ["AWS S3","AWS EC2","Docker","NGINX","PM2","CI/CD","Vercel"] },
  { title: "Tools & Integrations", icon: Server, skills: ["Git","GitHub","Postman","npm","Yarn","Stripe","SSLCommerz","Firebase Authentication","OpenAI API"] },
];



const services = [
 { icon: Layout, title: "Full-stack Applications", desc: "React and Next.js interfaces backed by Node.js, Express.js and TypeScript APIs, from application architecture to delivery." },
 { icon: Database, title: "APIs & Database Design", desc: "REST APIs, authentication and database models using MongoDB, PostgreSQL and Prisma, with validation and integration support." },
 { icon: Cpu, title: "Integrations & Deployment", desc: "OpenAI, payment and Firebase integrations, plus application deployment with AWS, Docker, NGINX and PM2." },
];

const About = () => {
  return (
    <div className="about-page page-shell" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="CC">

        {/* Page header */}
        <div className="page-heading interior-heading" style={{ marginBottom: 80, borderBottom: "1px solid var(--border)", paddingBottom: 64 }}>
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
            The person behind<br />
            <span style={{ color: "var(--vermillion)" }}>the work.</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, lineHeight: 1.75 }}>
            {profile.summary}
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
                <ProfileImage sizes="(max-width: 388px) calc(100vw - 48px), 340px" />
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
                  <p className="code-label" style={{ marginTop: 4 }}>Full Stack Developer</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ position: "relative", width: 8, height: 8 }}>
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34C759" }} />
                    <span className="status-dot-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(52,199,89,0.4)" }} />
                  </div>
                  <span className="code-label" style={{ color: "#2c603c" }}>Open to roles</span>
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
                { val: "2025", label: "At Sparktech since June" },
                { val: "6", label: "Selected projects" },
                { val: "MERN", label: "Core stack" },
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
                I&apos;m a <span style={{ color: "var(--chalk)", fontWeight: 600 }}>Full Stack Developer</span> building
                production systems. Since June 2025, I have worked as a{" "}
                <span style={{ color: "var(--vermillion)", fontWeight: 600 }}>Backend Developer at Sparktech Agency</span>,
                building APIs, React and Next.js applications, and integrations for international clients.
              </p>

              <blockquote style={{
                borderLeft: `2px solid var(--vermillion)`,
                paddingLeft: 20,
                color: "var(--muted)",
                fontSize: 14,
                lineHeight: 1.75,
                fontStyle: "italic",
              }}>
                I work across the product lifecycle: architecture, database design, development, code review and cloud deployment.
              </blockquote>

              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)" }}>
                My backend work uses Node.js, Express.js and TypeScript with MongoDB, PostgreSQL and Prisma. On the frontend, I build with React, Next.js and Redux Toolkit. I integrate OpenAI, Stripe and Firebase, and manage deployments with AWS, Docker, NGINX and PM2.
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
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}>{s.desc}</p>
              </motion.div>
            ))}
            </div>
          </div>
        {/* Experience + Education */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 80 }} className="exp-grid editorial-history">
          {/* Experience */}
          <div>
            <div className="rule-label" style={{ marginBottom: 32 }}>Experience</div>
            <div className="experience-timeline editorial-panels">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  padding: "24px",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  background: "var(--surface)",
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2 }}>
                      {job.role}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--vermillion)", fontWeight: 600, marginTop: 4 }}>
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
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--muted)" }}>
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
          </div>

          {/* Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="rule-label" style={{ marginBottom: 16 }}>Education</div>

            {/* Bachelor's */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                background: "var(--surface)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2 }}>
                    B.Sc. in Computer Science and Engineering (CSE)
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--vermillion)", fontWeight: 600, marginTop: 4 }}>
                    Northern University Bangladesh (NUB)
                  </p>
                </div>
                <span className="badge badge-green">Current</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
                <CalendarDays size={12} style={{ color: "var(--muted)" }} />
                <span className="code-label">Present</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <span className="tech-tag">Software Engineering</span>
              </div>
            </motion.div>

            {/* Diploma */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                background: "var(--surface)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--chalk)", lineHeight: 1.2, marginBottom: 6 }}>
                Diploma in Computer Technology
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", fontWeight: 600 }}>
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

        <section className="profile-languages" aria-labelledby="spoken-languages-heading"><h2 id="spoken-languages-heading" className="rule-label">Languages</h2><dl><div><dt>Bangla</dt><dd>Native</dd></div><div><dt>English</dt><dd>Basic</dd></div></dl></section>

        {/* Skills grid */}
        <div>
          <div className="rule-label" style={{ marginBottom: 40 }}>Core Tech Stack</div>
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
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag-icon">{skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
