import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="CContainer flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-all duration-300">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Mohosin
          </span>
        </NavLink>

        {/* Nav Links Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {ListItem.map((list, i) => (
            <NavLink
              key={i}
              to={`/${list?.location}`}
              className={({ isActive }) => `
                px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                ${isActive 
                  ? "text-white bg-white/5 shadow-inner shadow-white/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"}
              `}
            >
              {list?.Label}
            </NavLink>
          ))}
        </div>

        {/* Social Links Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { icon: FaGithub, href: "https://github.com/Mohosin075" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
            { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white border border-white/5 transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="CContainer py-8 flex flex-col gap-4">
              {ListItem.map((list, i) => (
                <NavLink
                  key={i}
                  to={`/${list?.location}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    px-6 py-4 text-lg font-bold rounded-2xl transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/20" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {list?.Label}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 mt-4 px-2">
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
                  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
