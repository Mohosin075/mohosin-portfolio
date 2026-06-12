import { Mail, ExternalLink } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

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

  return (
    <footer style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      paddingTop: 64,
      paddingBottom: 32,
    }}>
      <div className="CC">
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          alignItems: "start",
          paddingBottom: 48,
          borderBottom: "1px solid var(--border)",
          flexWrap: "wrap",
        }}>
          {/* Left: brand + desc + availability */}
          <div>
            <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16, width: "fit-content" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700, color: "var(--chalk)" }}>
                M<span style={{ color: "var(--vermillion)" }}>.</span>
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.04em" }}>
                Mohosin Ali
              </span>
            </NavLink>

            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", maxWidth: 360, marginBottom: 20 }}>
              Backend-focused Full Stack Developer building scalable APIs,
              real-time systems, and modern React frontends.
            </p>

            {/* Availability */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34C759" }} />
              </div>
              <span className="code-label">Open to freelance & full-time roles</span>
            </div>
          </div>

          {/* Right: nav + contact */}
          <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: 48 }}>
            <div>
              <p className="code-label" style={{ marginBottom: 16 }}>Navigation</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {navItems.map(item => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      className="underline-reveal"
                      style={{ textDecoration: "none", fontSize: 13, fontWeight: 600, color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="code-label" style={{ marginBottom: 16 }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:mohosinali075@gmail.com"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--muted)", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                >
                  <Mail size={13} />
                  mohosinali075@gmail.com
                </a>
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--muted)", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >
                    <s.icon size={13} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p className="code-label">
            © {year} Md Mohosin Ali — All rights reserved.
          </p>
          <a
            href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
          >
            Resume <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;