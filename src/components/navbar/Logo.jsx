import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="cursor-pointer flex items-center gap-2">
      {/* <img
        className="object-cover w-14"
        src=""
        alt="Logo"
      /> */}
      <h2 className="text-3xl">Mohosin</h2>
    </NavLink>
  );
}

export default Logo;
