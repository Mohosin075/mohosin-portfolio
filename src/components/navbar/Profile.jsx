import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <NavLink to="/sign-in">
        <Button variant="outline" size="md">
          Sign in
        </Button>
      </NavLink>
      <NavLink to="/sign-in">
        <Button variant="primary" size="md">
          Get Started Free
        </Button>
      </NavLink>

      <label
        htmlFor="my-drawer-2"
        className="drawer-button lg:hidden btn bg-primaryGray text-xl"
      >
        <FaBars />
      </label>
    </div>
  );
};

export default Profile;
