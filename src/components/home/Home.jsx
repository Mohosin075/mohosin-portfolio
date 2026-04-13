import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-mesh min-h-screen">
      <section className="CContainer min-h-[95vh] flex flex-col justify-center relative pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent-purple/10 blur-[100px] rounded-full animate-slow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent-blue/10 blur-[100px] rounded-full animate-slow-pulse" style={{ animationDelay: '2s' }} />

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 2xl:gap-32 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-center lg:text-left z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} className="animate-pulse" />
                
              <span>Backend Engineer</span>
            </motion.div>

            <h1 className="mb-6 tracking-tight leading-[1.1] 2xl:text-6xl">
              Building Scalable <span className="text-gradient">& Reliable </span> 
              Systems
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 mb-8 h-20 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Md Mohosin Ali",
                  2000,
                  "Backend Systems Engineer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "DevOps & Cloud Explorer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Passionate about building high-performance, secure, and scalable server-side solutions. 
              Currently crafting digital experiences <a className="text-indigo-400 font-bold hover:underline" href="https://www.linkedin.com/company/sparktechagency/about/">@SparkTech Agency</a>.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "#4f46e5" }}
                whileTap={{ scale: 0.98 }}
                href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
                target="_blank"
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold flex items-center gap-3 transition-all text-sm shadow-lg shadow-indigo-600/20"
              >
                <Download size={18} />
                Download CV
              </motion.a>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
                  { icon: Mail, href: "mailto:mohosinali075@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, backgroundColor: "rgba(99, 102, 241, 0.1)", borderColor: "rgba(99, 102, 241, 0.2)" }}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative hidden lg:block"
          >
            <div ref={imageRef} className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://i.ibb.co.com/C5RnCvpF/ai-1.png" 
                alt="Profile" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-5 rounded-2xl glassify-dark border border-slate-800 shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Experience</p>
                  <p className="text-base font-bold text-white">1+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-5 rounded-2xl glassify-dark border border-slate-800 shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Projects</p>
                  <p className="text-base font-bold text-white">5+ Built</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section Preview */}
      <section className="section-padding relative bg-slate-950/30">
        <div className="CContainer">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16 text-center md:text-left">
            <div>
              <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
              <p className="section-subtitle lg:mx-0 mb-0">Highlighting my work in system architecture and full-stack development.</p>
            </div>
            <NavLink to="/projects" className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-[10px] hover:text-indigo-300 transition-colors">
              All Projects <ArrowRight size={14} />
            </NavLink>
          </div>
          <Projects limit={3} />
        </div>
      </section>

      {/* Contact Section Preview */}
      <Contact />
    </div>
  );
};

export default Home;
