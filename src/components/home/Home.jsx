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
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-accent-cyan text-[10px] sm:text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Available for new opportunities</span>
            </motion.div>

            <h1 className="mb-6 sm:mb-8 tracking-tighter leading-[0.9] 2xl:text-9xl">
              Crafting <span className="text-gradient">Scalable</span> <br />
              Digital Systems
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-300 mb-8 sm:mb-10 h-24 md:h-20 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Md Mohosin Ali",
                  2000,
                  "I build Robust Backend APIs",
                  2000,
                  "I specialize in MERN Stack",
                  2000,
                  "I scale with Docker & AWS",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-base sm:text-lg 2xl:text-2xl mb-10 sm:mb-12 max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Full-Stack Engineer <a className="text-accent-blue font-black hover:underline transition-all" href="https://www.linkedin.com/company/sparktechagency/about/">@SparkTech Agency</a>. 
              I design and implement high-performance, secure backend architectures for modern applications.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 2xl:gap-8 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/document/d/1mGw-bCWSsJmKqaa6fie0V_nAhk86dg5hZ79hFQDOTVo/edit?usp=sharingg"
                target="_blank"
                className="px-8 sm:px-10 2xl:px-14 py-4 sm:py-5 2xl:py-7 rounded-2xl bg-white text-black font-black flex items-center gap-3 transition-all text-sm sm:text-base 2xl:text-xl"
              >
                <Download size={20} />
                Get Resume
              </motion.a>
              
              <div className="flex items-center gap-3 sm:gap-4 2xl:gap-6">
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
                  { icon: Mail, href: "mailto:mohosinali075@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.1)" }}
                    href={social.href}
                    className="w-12 h-12 sm:w-14 sm:h-14 2xl:w-20 2xl:h-20 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon size={social.icon === Mail ? 20 : 24} className="2xl:scale-125" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative hidden lg:block"
          >
            <div ref={imageRef} className="relative z-10 w-full max-w-lg 2xl:max-w-2xl mx-auto aspect-square rounded-[3.5rem] 2xl:rounded-[5rem] overflow-hidden border border-white/10 shadow-2xl shadow-accent-purple/10">
              <img 
                src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 2xl:-top-12 2xl:-right-12 p-5 2xl:p-8 rounded-[2rem] 2xl:rounded-[3rem] glassify-dark border border-white/10 backdrop-blur-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-4 2xl:gap-6">
                <div className="w-10 h-10 2xl:w-16 2xl:h-16 rounded-xl 2xl:rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  <Sparkles size={20} className="2xl:scale-150" />
                </div>
                <div>
                  <p className="text-[10px] 2xl:text-xs text-gray-500 font-black uppercase tracking-widest">Experience</p>
                  <p className="text-lg 2xl:text-3xl font-black text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 2xl:-bottom-12 2xl:-left-12 p-5 2xl:p-8 rounded-[2rem] 2xl:rounded-[3rem] glassify-dark border border-white/10 backdrop-blur-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-4 2xl:gap-6">
                <div className="w-10 h-10 2xl:w-16 2xl:h-16 rounded-xl 2xl:rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  <ArrowRight size={20} className="2xl:scale-150" />
                </div>
                <div>
                  <p className="text-[10px] 2xl:text-xs text-gray-500 font-black uppercase tracking-widest">Projects</p>
                  <p className="text-lg 2xl:text-3xl font-black text-white">15+ Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding relative bg-black/40">
        <div className="CContainer">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16 sm:mb-20 text-center md:text-left">
            <div>
              <h2 className="section-title mb-4">Featured <span className="text-gradient">Systems</span></h2>
              <p className="text-gray-500 max-w-lg font-medium">A selection of high-performance backend architectures and full-stack solutions.</p>
            </div>
            <NavLink to="/projects" className="flex items-center gap-2 text-accent-blue font-black uppercase tracking-widest text-xs hover:gap-4 transition-all duration-300">
              Explore Portfolio <ArrowRight size={16} />
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
