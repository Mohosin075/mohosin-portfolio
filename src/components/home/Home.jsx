import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail } from "lucide-react";
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
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <section className="CContainer min-h-[90vh] flex flex-col justify-center relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-purple text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <h1 className="mb-6 leading-tight">
              Designing <span className="text-gradient">Scalable</span> <br />
              Backend Systems
            </h1>

            <div className="text-xl md:text-2xl font-medium text-gray-300 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Md Mohosin Ali",
                  2000,
                  "I build Robust Backend APIs",
                  2000,
                  "I specialize in Node.js & Express",
                  2000,
                  "I scale with Docker & AWS",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Backend Developer <a className="text-accent-blue hover:underline" href="https://www.linkedin.com/company/sparktechagency/about/">@SparkTech Agency</a>. 
              I craft high-performance, secure, and maintainable backend architectures using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/document/d/1mGw-bCWSsJmKqaa6fie0V_nAhk86dg5hZ79hFQDOTVo/edit?usp=sharingg"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold flex items-center gap-2 shadow-lg shadow-accent-purple/20"
              >
                <Download size={20} />
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
                    whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
                    href={social.href}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Rings */}
              <div className="absolute inset-[-20px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-40px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
              
              <div ref={imageRef} className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl glassify">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
                  alt="Md Mohosin Ali"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 z-20 glassify px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2"
              >
                <span className="text-2xl">🚀</span>
                <div className="text-xs">
                  <p className="font-bold text-white">2+ Years</p>
                  <p className="text-gray-400">Experience</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 glassify px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2"
              >
                <span className="text-2xl">💻</span>
                <div className="text-xs">
                  <p className="font-bold text-white">Full Stack</p>
                  <p className="text-gray-400">Developer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="CContainer">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="mb-4">Featured <span className="text-gradient">Projects</span></h2>
              <p className="text-gray-400">Some of my recent work that showcases my skills.</p>
            </div>
            <NavLink
              to="/projects"
              className="group flex items-center gap-2 text-white font-medium hover:text-accent-purple transition-colors"
            >
              View all projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
          <Projects limit={3} />
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
