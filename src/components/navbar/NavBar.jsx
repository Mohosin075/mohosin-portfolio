import { NavLink, useLocation } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { Menu, X, Briefcase } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-xl shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="CContainer flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Mohosin
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Backend Engineer
              </span>
            </div>
          </NavLink>

          {/* Nav Links Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {ListItem.map((list, i) => (
              <NavLink
                key={i}
                to={`/${list?.location}`}
                className={({ isActive }) => `
                  relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                  ${isActive
                    ? "text-white bg-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"}
                `}
              >
                {({ isActive }) => (
                  <>
                    {list?.Label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Social + Hire Me */}
          <div className="hidden md:flex items-center gap-3">
            {[
              { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
              { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189", label: "Facebook" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <social.icon size={15} />
              </motion.a>
            ))}

            {/* Hire Me CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <NavLink
                to="/contact"
                className="ml-1 flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
              >
                <Briefcase size={14} />
                Hire Me
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
            >
              <div className="CContainer py-6 flex flex-col gap-2">
                {ListItem.map((list, i) => (
                  <NavLink
                    key={i}
                    to={`/${list?.location}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      px-5 py-3.5 text-base font-bold rounded-xl transition-all duration-200
                      ${isActive
                        ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"}
                    `}
                  >
                    {list?.Label}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 text-white font-bold"
                >
                  <Briefcase size={16} />
                  Hire Me
                </NavLink>

                <div className="flex items-center gap-3 mt-2 pt-4 border-t border-white/5 px-1">
                  {[
                    { icon: FaGithub, href: "https://github.com/Mohosin075" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
                    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
