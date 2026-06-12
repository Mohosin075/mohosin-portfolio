import { motion } from "framer-motion";
import {
  Code2, Database, Globe, Server, Cpu, Cloud, Terminal,
  Shield, Award, Rocket, CheckCircle2, Zap, GitBranch,
  Layers, Brain, Clock, CalendarDays,
} from "lucide-react";
import { SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiReact, SiDocker, SiAmazon, SiPrisma, SiPostgresql, SiStripe, SiSocketdotio, SiFirebase, SiGithub, SiPostman } from "react-icons/si";

const skillCategories = [
  {
    label: "Backend Core",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-slate-300" },
    ],
  },
  {
    label: "Frontend",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Redux Toolkit", icon: Layers, color: "text-purple-400" },
      { name: "TanStack Query", icon: Zap, color: "text-red-400" },
      { name: "Tailwind CSS", icon: Globe, color: "text-sky-400" },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "AWS S3", icon: SiAmazon, color: "text-orange-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Vercel", icon: Cloud, color: "text-white" },
    ],
  },
  {
    label: "Integrations",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    skills: [
      { name: "Stripe", icon: SiStripe, color: "text-indigo-400" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
      { name: "OpenAI", icon: Brain, color: "text-green-400" },
      { name: "JWT / OAuth", icon: Shield, color: "text-yellow-400" },
    ],
  },
];

const stats = [
  { label: "Experience", value: "2+", icon: Rocket, suffix: "Years", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { label: "Projects", value: "10+", icon: CheckCircle2, suffix: "Completed", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "APIs Built", value: "30+", icon: Server, suffix: "Endpoints", color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "Uptime", value: "99%", icon: Shield, suffix: "Reliable", color: "text-orange-400", bg: "bg-orange-500/10" },
];

const whatIDo = [
  {
    icon: Server,
    title: "API Design & Development",
    desc: "Building RESTful APIs that are secure, well-documented, versioned, and optimized for high-throughput production environments.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Designing efficient MongoDB and PostgreSQL schemas with proper indexing, aggregation pipelines, and Prisma ORM integrations.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Cpu,
    title: "Real-time Systems",
    desc: "Implementing bidirectional communication with Socket.io, event-driven architectures, and push notification systems at scale.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const experience = [
  {
    role: "Jr. Backend Developer",
    company: "Sparktech Agency",
    period: "Jun 2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    current: true,
    bullets: [
      "Building and maintaining scalable backend services using Node.js, Express.js, TypeScript & MongoDB",
      "Implementing secure authentication, JWT, RESTful APIs and Mongoose models",
      "Collaborating with an agile team on client-aligned business solutions",
      "Improving code quality through validation, error handling, and best practices",
      "Contributing to CI/CD workflows and project planning discussions",
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "Mongoose"],
  },
];

const About = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-mesh min-h-screen pt-32">
      <div className="CContainer">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-5 uppercase tracking-widest"
          >
            <Rocket size={12} />
            About Me
          </motion.div>
          <h2 className="section-title text-center">
            Engineering <span className="text-gradient">Excellence</span>
          </h2>
          <p className="section-subtitle text-center">
            Backend Architect focused on performance, security, and scalability — with 2+ years of real-world experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-hover-glow glassify-dark p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 text-center"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} mx-auto mb-4`}>
                <stat.icon size={20} />
              </div>
              <h4 className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-bold leading-tight">
                {stat.label} <br />
                <span className="text-slate-600">{stat.suffix}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-20">
          {/* ── Left: Image + Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl group mb-8 neon-indigo">
              <img
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://i.ibb.co.com/C5RnCvpF/ai-1.png"
                alt="Md Mohosin Ali — Backend Systems Engineer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-8 right-8">
                <p className="text-white font-bold text-2xl mb-1 tracking-tight">Md Mohosin Ali</p>
                <p className="text-indigo-400 font-bold uppercase tracking-[0.15em] text-[10px]">Backend Systems Engineer</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Available for hire</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                I&apos;m a <span className="text-white font-bold">Backend-focused MERN Stack Developer</span> with
                2+ years of hands-on experience building production-grade systems. Currently working as a{" "}
                <span className="text-indigo-400 font-bold">Jr. Backend Developer at Sparktech Agency</span>, where
                I architect and maintain scalable services for real clients.
              </p>
              <div className="pl-5 border-l-2 border-indigo-500/40 italic text-slate-500">
                &quot;I engineer backend systems that are not just functional, but optimized for scale, performance, and maintainability.&quot;
              </div>
              <p>
                My focus is on writing <span className="text-white font-bold">clean, maintainable code</span> — building
                robust REST APIs, microservices, real-time apps, and implementing{" "}
                <span className="text-white font-bold">secure authentication & payment systems</span> for production environments.
              </p>
            </div>
          </motion.div>

          {/* ── Right: What I Do + Experience ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* What I Do */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-indigo-500" />
                What I Do
              </h3>
              <div className="space-y-4">
                {whatIDo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-5 rounded-2xl bg-slate-900/50 border ${item.border} hover:bg-slate-900/70 transition-all group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience Timeline */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-indigo-500" />
                Work Experience
              </h3>
              <div className="space-y-4">
                {experience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-5 border-l-2 border-indigo-500/30 hover:border-indigo-500/60 transition-colors"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                    <div className="glassify-dark rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-white font-bold text-sm">{job.role}</h4>
                          <p className="text-indigo-400 text-xs font-bold">{job.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {job.current && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                              Current
                            </span>
                          )}
                          <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold">
                            <Clock size={10} />
                            {job.period}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {job.bullets.slice(0, 3).map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-500 text-xs">
                            <CheckCircle2 size={11} className="text-indigo-400 mt-0.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((t, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-5 border-l-2 border-slate-800"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-950" />
                  <div className="glassify-dark rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-white font-bold text-sm">Diploma in Computer Technology</h4>
                        <p className="text-slate-400 text-xs font-bold">Dinajpur Polytechnic Institute</p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold">
                        <CalendarDays size={10} />
                        Completed Jan 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Award size={12} className="text-yellow-500" />
                      <span className="text-slate-500 text-xs">Computer Technology</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tech Stack Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-3">
            <div className="w-8 h-px bg-indigo-500" />
            Core Technology Stack
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
                viewport={{ once: true }}
                className={`p-5 rounded-2xl bg-slate-900/40 border ${cat.border} hover:bg-slate-900/60 transition-all`}
              >
                <h4 className={`text-[9px] font-black uppercase tracking-widest ${cat.color} mb-4`}>
                  {cat.label}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill, si) => (
                    <div
                      key={si}
                      className="skill-pill flex items-center gap-2 px-2.5 py-2 rounded-xl bg-slate-950/50 border border-slate-800/60"
                    >
                      <skill.icon size={14} className={skill.color} />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Tools ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-3 items-center"
        >
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Tools:</span>
          {[
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: SiGithub },
            { name: "Postman", icon: SiPostman },
            { name: "VS Code", icon: Code2 },
            { name: "npm / yarn", icon: Terminal },
          ].map((tool, i) => (
            <div key={i} className="skill-pill flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-300">
              <tool.icon size={12} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
