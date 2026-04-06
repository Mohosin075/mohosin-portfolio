import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="cursor-pointer flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">
          Mohosin Ali
        </span>
        <small className="text-xs text-muted">Backend Developer</small>
      </div>
    </NavLink>
  );
}

export default Logo;
