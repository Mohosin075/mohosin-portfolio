import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { ListItem } from "../../utils/constant";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const pathname = "home";
  return (
    <div className="CContainer drop-shadow-lg flex justify-between items-center py-3">
      {/* <div className="bgShadow inset-y-20 inset-x-0"></div> */}
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
      <div>
        <div className="my-6  w-10/12 mx-auto ">
                <ul className="flex space-x-8 items-center">
                    <li><a href="https://github.com/Mohosin075"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"><FaLinkedin /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100054670421189"><FaFacebook /></a></li>
                    {/* <li><a href="https://twitter.com/Mohosin075"><FaTwitter /></a></li> */}
                </ul>
            </div>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default Navbar;
