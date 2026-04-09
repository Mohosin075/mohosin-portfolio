import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { Menu } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full glassify-dark border-b border-white/10 backdrop-blur-lg"
    >
      <div className="CContainer flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            M
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Mohosin
          </span>
        </NavLink>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {ListItem.map((list, i) => (
            <NavLink
              key={i}
              to={`/${list?.location}`}
              className={({ isActive }) => `
                px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"}
              `}
            >
              {list?.Label}
            </NavLink>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
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
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-400 hover:text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
