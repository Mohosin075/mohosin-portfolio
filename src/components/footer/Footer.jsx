import { Mail, Heart } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="CContainer">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">
                M
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Mohosin
              </span>
            </NavLink>
            <p className="text-sm text-gray-500 max-w-xs">
              Building high-performance backend systems and modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-end gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/Mohosin075" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
              { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189" },
              { icon: Mail, href: "mailto:mohosinali075@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-500">
            © {currentYear} Md Mohosin Ali. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            Made with <Heart size={14} className="text-accent-pink fill-accent-pink" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;