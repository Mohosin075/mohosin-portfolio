import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import Profile from "./Profile";

const Navbar = () => {
  const pathname = "home";
  return (
    <div className="CContainer drop-shadow-lg flex justify-between items-center py-3">
      <div className="bgShadow inset-y-20 inset-x-0"></div>
      {/* Navbar Left */}
      <Logo />
      <div className="flex items-center md:gap-8 lg:gap-14">
        <ul className="min-h-full hidden lg:flex items-center gap-2">
          {ListItem.map((list, i) => (
            <li
              key={i}
              className={`rounded bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF]  hover:text-white ${
                pathname === `/${list?.location}`
                  ? "from-[#2B59FF] to-[#BB2BFF] text-white"
                  : ""
              }`}
            >
              <NavLink
                to={`/${list?.location}`}
                className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
              >
                {list?.Label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Navbar right */}
      <Profile />
    </div>
  );
};

export default Navbar;
