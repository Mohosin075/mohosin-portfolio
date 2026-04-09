import { Mail, Heart, Sparkles } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden bg-black/40 border-t border-white/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-purple/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-blue/10 blur-[100px] rounded-full" />

      <div className="CContainer relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <NavLink to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-black text-2xl group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-accent-purple/20">
                M
              </div>
              <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Mohosin
              </span>
            </NavLink>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">
              Engineering high-performance backend systems and crafting 
              seamless digital experiences with precision and passion.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/Mohosin075" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/" },
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white font-bold transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Let&apos;s Connect</h4>
            <div className="space-y-6">
              <a href="mailto:mohosinali075@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <span className="text-gray-500 group-hover:text-white font-bold transition-colors">mohosinali075@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-pink">
                  <Sparkles size={18} />
                </div>
                <span className="text-gray-500 font-bold tracking-tight">Open for Collaborations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Footer Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm font-bold tracking-tight">
            © {currentYear} Md Mohosin Ali. Engineered with Precision.
          </p>
          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-gray-500 text-xs font-black uppercase tracking-widest">Built with</span>
            <Heart size={14} className="text-accent-pink fill-accent-pink animate-pulse" />
            <span className="text-white text-xs font-black uppercase tracking-widest">React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;