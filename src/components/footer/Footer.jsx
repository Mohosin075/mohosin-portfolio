import { ArrowUp, ArrowUpRight } from "lucide-react";
import BrandLogo from "../BrandLogo";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="CC">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo />
            <p>Full-stack development.<br />Architecture to deployment.</p>
          </div>
          <nav className="footer-socials" aria-label="Social and contact links">
            <a href="https://github.com/Mohosin075" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/mohosin075/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="mailto:mohosinali075@gmail.com">Email <ArrowUpRight size={16} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">&copy; {new Date().getFullYear()} Mohosin Ali</span>
          <span className="footer-location">Dhaka, Bangladesh</span>
          <a className="footer-back-top" href="#root">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
