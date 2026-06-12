import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, Sparkles, MapPin, Building2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const techStack = [
  "Node.js", "Express.js", "TypeScript", "MongoDB", "React.js",
  "PostgreSQL", "Docker", "AWS S3", "Socket.io", "Prisma",
  "Redis", "REST APIs", "JWT", "Stripe", "OpenAI", "Zod",
];

const Home = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 18,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-mesh min-h-screen">
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="CContainer min-h-[95vh] flex flex-col justify-center relative pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/8 blur-[120px] rounded-full animate-slow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/8 blur-[120px] rounded-full animate-slow-pulse" style={{ animationDelay: "2s" }} />

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 2xl:gap-32 items-center">
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            {/* Status badges row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-6"
            >
              {/* Available badge */}
              <div className="available-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </div>
              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} className="animate-pulse" />
                Backend Engineer
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 tracking-tight leading-[1.1] 2xl:text-6xl">
              Building{" "}
              <span className="animate-gradient-text">Scalable</span>{" "}
              <br className="hidden sm:block" />& Reliable Systems
            </h1>

            {/* Type animation */}
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 mb-5 h-16 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Md Mohosin Ali 👋",
                  2500,
                  "Jr. Backend Systems Engineer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "REST API & DevOps Explorer",
                  2000,
                  "Real-time App Developer",
                  2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Passionate about building high-performance, secure, and scalable
              server-side solutions. Specializing in Node.js, TypeScript &
              MongoDB architectures.
            </p>

            {/* Currently at */}
            <motion.a
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://www.linkedin.com/company/sparktechagency/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all mb-8 group"
            >
              <Building2 size={13} className="text-indigo-400" />
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Currently at</span>
              <span className="text-indigo-400 text-xs font-bold">@Sparktech Agency</span>
              <MapPin size={11} className="text-slate-600 ml-1" />
              <span className="text-slate-600 text-[10px]">Dhaka, BD</span>
            </motion.a>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: "#4f46e5" }}
                whileTap={{ scale: 0.97 }}
                href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-bold flex items-center gap-3 transition-all text-sm shadow-lg shadow-indigo-600/25"
              >
                <Download size={17} />
                Download CV
              </motion.a>

              <div className="flex items-center gap-2">
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:mohosinali075@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.4)" }}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Content — Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div
              ref={imageRef}
              className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[3rem] overflow-hidden border border-slate-800/80 shadow-2xl neon-indigo"
            >
              <img
                src="https://i.ibb.co.com/C5RnCvpF/ai-1.png"
                alt="Md Mohosin Ali — Backend Engineer"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>

            {/* Floating Stat — Experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl glassify-dark border border-slate-800 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Experience</p>
                  <p className="text-base font-bold text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat — Projects */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl glassify-dark border border-slate-800 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Projects</p>
                  <p className="text-base font-bold text-white">10+ Built</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Tech Stack Marquee ────────────────────────── */}
      <div className="relative py-8 border-y border-slate-900 bg-slate-950/40 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-2 mx-3 rounded-full bg-slate-900/60 border border-slate-800/60 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-indigo-400 hover:border-indigo-500/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Selected Projects Preview ─────────────────── */}
      <section className="section-padding relative bg-slate-950/30">
        <div className="CContainer">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16 text-center md:text-left">
            <div>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="section-title">
                Selected <span className="text-gradient">Projects</span>
              </h2>
              <p className="section-subtitle lg:mx-0 mb-0">
                Highlighting my work in system architecture and full-stack development.
              </p>
            </div>
            <NavLink
              to="/projects"
              className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-[10px] hover:text-indigo-300 transition-colors border border-indigo-500/20 px-4 py-2 rounded-lg hover:bg-indigo-500/5"
            >
              All Projects <ArrowRight size={14} />
            </NavLink>
          </div>
          <Projects limit={3} />
        </div>
      </section>

      {/* ─── Contact ───────────────────────────────────── */}
      <Contact />
    </div>
  );
};

export default Home;
