import { NavLink } from "react-router-dom";
import "./BrandLogo.css";

export default function BrandLogo() {
  return (
    <NavLink to="/" className="brand-logo" aria-label="Mohosin Ali home">
      <svg className="brand-mark" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <rect width="52" height="52" rx="14" fill="currentColor" />
        <path d="M12 34V20C12 15.6 14.8 13 19 13C23.2 13 26 15.6 26 20V34M26 20C26 15.6 28.8 13 33 13C37.2 13 40 15.6 40 20V34" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="40" cy="41" r="2" fill="#b7d0ff" />
      </svg>
      <span className="brand-lockup">
        <span className="brand-wordmark">mohosin<span className="brand-period">.</span></span>
        <span className="brand-descriptor">Full stack developer</span>
      </span>
    </NavLink>
  );
}
