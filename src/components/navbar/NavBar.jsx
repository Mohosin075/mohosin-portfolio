import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="CContainer drop-shadow-lg flex justify-between items-center py-3 sticky top-4 z-40 glass rounded-lg border border-white/5">
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
                  `flex items-center px-4 py-2 text-sm md:text-lg capitalize rounded-md transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[" +
                        "--accent-from" +
                        "] to-[" +
                        "--accent-to" +
                        "] text-white"
                      : "text-muted hover:text-white hover:bg-white/3"
                  }`
                }
              >
                {list?.Label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Navbar right */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Mohosin075"
          className="text-xl hover:text-white/80"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"
          className="text-xl hover:text-white/80"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100054670421189"
          className="text-xl hover:text-white/80"
        >
          <FaFacebook />
        </a>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default Navbar;
