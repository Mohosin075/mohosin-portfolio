import { NavLink, useLocation } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scroll-bar"
        style={{ scaleX, width: "100%" }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10,10,10,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="CC" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 56 : 72, transition: "height 0.3s" }}>

          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--chalk)",
              letterSpacing: "0.02em",
            }}>
              M<span style={{ color: "var(--vermillion)" }}>.</span>
            </span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--muted)",
              letterSpacing: "0.06em",
            }}>
              Mohosin Ali
            </span>
          </NavLink>

          {/* Desktop nav links */}
          <div style={{ alignItems: "center", gap: 32 }} className="hidden md:flex">
            {ListItem.map((list, i) => (
              <NavLink
                key={i}
                to={`/${list?.location}`}
                className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              >
                {list?.Label}
              </NavLink>
            ))}
          </div>

          {/* Right: socials + hire */}
          <div style={{ alignItems: "center", gap: 16 }} className="hidden md:flex">
            {[
              { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  color: "var(--muted)",
                  transition: "color 0.2s",
                  display: "flex",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <s.icon size={17} />
              </a>
            ))}

            <div style={{ width: 1, height: 20, background: "var(--border)" }} />

            <NavLink to="/contact" className="btn-v" style={{ padding: "8px 20px", fontSize: 11 }}>
              Hire Me
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--chalk)",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mobile-menu"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "none",
                border: "none",
                color: "var(--chalk)",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>

            <div style={{ marginBottom: 48 }}>
              <span className="code-label">Navigation</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ListItem.map((list, i) => (
                <NavLink
                  key={i}
                  to={`/${list?.location}`}
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 56,
                      lineHeight: 1.1,
                      color: (location.pathname === `/${list?.location}` || (list?.location === "" && location.pathname === "/"))
                        ? "var(--vermillion)"
                        : "var(--muted)",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                    onMouseLeave={e => {
                      const isActive = (location.pathname === `/${list?.location}` || (list?.location === "" && location.pathname === "/"));
                      e.currentTarget.style.color = isActive ? "var(--vermillion)" : "var(--muted)";
                    }}
                  >
                    {list?.Label}
                  </motion.div>
                </NavLink>
              ))}
            </div>

            <div style={{ marginTop: 48, display: "flex", gap: 16 }}>
              <a href="https://github.com/Mohosin075" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/md-mohosin-5b34a0278/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
