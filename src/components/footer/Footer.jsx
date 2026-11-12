import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../BrandLogo";
import { contact } from "../../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="editorial-footer site-footer">
      <div className="CC">
        <div className="footer-intro-line"><span className="footer-availability"><i aria-hidden="true" />Open to Full Stack & Backend roles</span><span className="footer-based"><MapPin size={16} aria-hidden="true" />Dhaka, Bangladesh</span></div>
        <div className="footer-main-grid">
          <div className="footer-intro">
            <BrandLogo />
            <p>Turning complex ideas into reliable digital products — from architecture and APIs to the experience on your screen.</p>
            <a className="footer-resume" href="/mohosin-ali-resume.pdf" download>Download my resume <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <nav className="footer-link-group" aria-label="Footer navigation">
            <h2>Explore</h2>
            <NavLink to="/" end>Home</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/contact">Contact</NavLink>
          </nav>
          <nav className="footer-link-group" aria-label="Social links">
            <h2>Connect</h2>
            <a href="https://github.com/Mohosin075" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
          </nav>
          <div className="footer-link-group footer-direct">
            <h2>Get in touch</h2>
            <p>Have a project or an opportunity?<br />I&apos;d love to hear about it.</p>
            <a href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
          </div>
        </div>
        <div className="footer-signature" aria-hidden="true">mohosin<span>.</span></div>
        <div className="footer-legal">
          <span>&copy; {new Date().getFullYear()} Mohosin Ali. All rights reserved.</span>
          <a href="#root">Back to top <ArrowUp size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
