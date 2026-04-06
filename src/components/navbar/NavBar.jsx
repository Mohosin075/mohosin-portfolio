import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      data-animate="reveal"
      className="CContainer drop-shadow-lg flex justify-between items-center py-3 sticky top-4 z-40 glass rounded-lg border border-white/5 bg-gradient-to-r from-[var(--accent-from)]/5 to-[var(--accent-to)]/5 backdrop-blur-sm"
    >
      {/* <div className="bgShadow inset-y-20 inset-x-0"></div> */}
      {/* Navbar Left */}
      <Logo />
      <div className="flex items-center md:gap-8 lg:gap-14">
        <ul className="min-h-full hidden lg:flex items-center gap-4">
          {ListItem.map((list, i) => (
            <li key={i}>
              <NavLink
                to={`/${list?.location}`}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm md:text-lg capitalize rounded-md transition-all ${isActive ? "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white" : "text-muted hover:text-white hover:bg-white/10"}`
                }
              >
                {list?.Label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Navbar right */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Mohosin075"
          className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] hover:scale-105 transition text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"
          className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] hover:scale-105 transition text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100054670421189"
          className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] hover:scale-105 transition text-xl"
        >
          <FaFacebook />
        </a>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default Navbar;
