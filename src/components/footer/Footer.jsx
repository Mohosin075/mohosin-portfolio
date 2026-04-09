import { Mail, Heart, Sparkles } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-slate-950/50 border-t border-slate-900">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="CContainer relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-6">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                M
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Mohosin
              </span>
            </NavLink>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              Engineering robust backend architectures and crafting 
              seamless digital experiences with modern technology.
            </p>
            <div className="flex gap-3">
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
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-indigo-400 font-bold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:mohosinali075@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform border border-slate-800">
                  <Mail size={14} />
                </div>
                <span className="text-slate-500 group-hover:text-slate-300 text-sm font-bold transition-colors">mohosinali075@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-emerald-400 border border-slate-800">
                  <Sparkles size={14} />
                </div>
                <span className="text-slate-500 text-sm font-bold tracking-tight">Open for Collaborations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Footer Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold tracking-tight">
            © {currentYear} Md Mohosin Ali. Built with Precision.
          </p>
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-slate-800">
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Built with</span>
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;