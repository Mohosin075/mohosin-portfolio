import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="cursor-pointer flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]">
          Mohosin Ali
        </span>
        <small className="text-xs text-muted">Backend Developer</small>
      </div>
    </NavLink>
  );
}

export default Logo;
