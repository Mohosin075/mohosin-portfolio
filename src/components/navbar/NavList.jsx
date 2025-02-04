/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavList = ({ Lists }) => {
  const pathname = "home";
  return (
    <ul className="menu min-h-full  p-4 space-y-1 md:space-y-2 flex">
      {Lists.map((list, i) => (
        <li
          key={i}
          className={`rounded bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF]  hover:text-white active:from-[#0035F5] active:to-[#A600F5]  ${
            pathname === `/${list?.location}`
              ? "from-[#2B59FF] to-[#BB2BFF] text-white"
              : ""
          }`}
        >
          <NavLink
            to={`/${list?.location}`}
            className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
          >
            <span className="mr-2 text-lg md:text-xl">{list?.icon}</span>
            {list?.Label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
