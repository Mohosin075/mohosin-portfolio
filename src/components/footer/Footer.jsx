import { Mail, Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100054670421189", label: "Facebook" },
  ];

  const stack = ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-slate-950/60 border-t border-slate-900">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="CContainer relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand — spans 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <NavLink to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-indigo-500/15">
                M
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Md Mohosin Ali
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Full Stack Developer
                </span>
              </div>
            </NavLink>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              Backend-focused Full Stack Developer with 2+ years of real-world
              production experience. Building scalable APIs, real-time systems,
              and modern React frontends.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                Open to freelance & opportunities
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-bold uppercase tracking-widest text-[9px]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className="text-slate-500 hover:text-indigo-400 font-bold transition-colors text-sm flex items-center gap-2 group w-fit"
                  >
                    <div className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Stack — 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold uppercase tracking-widest text-[9px]">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:mohosinali075@gmail.com"
                className="flex items-center gap-2.5 text-slate-500 hover:text-indigo-400 transition-colors group text-sm font-medium"
              >
                <Mail size={13} className="text-indigo-400 shrink-0" />
                mohosinali075@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                <FaLinkedin size={13} className="text-blue-400 shrink-0" />
                linkedin.com/in/md-mohosin
              </a>
              <a
                href="https://github.com/Mohosin075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors text-sm font-medium"
              >
                <FaGithub size={13} className="shrink-0" />
                github.com/Mohosin075
              </a>
            </div>
          </div>

          {/* Hire CTA — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-bold uppercase tracking-widest text-[9px]">
              Hire Me
            </h4>
            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/15 w-full"
                >
                  <Sparkles size={13} />
                  Get In Touch
                </NavLink>
              </motion.div>
              <a
                href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold hover:text-white hover:border-slate-700 transition-all w-full"
              >
                <ArrowUpRight size={13} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-bold">
            © {currentYear} Md Mohosin Ali. All rights reserved.
          </p>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/60">
            <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              Built with
            </span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              {stack.join(" · ")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;