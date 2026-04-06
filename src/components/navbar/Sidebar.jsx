import Logo from "./Logo";
import NavList from "./NavList";
import { ListItem } from "../../utils/constant";

const Sidebar = () => {
  return (
    <div className="min-h-full px-5 py-10 w-64 md:w-72 lg:w-80 bg-gradient-to-b from-[var(--bg)]/60 to-transparent">
      <div className="bgShadow" />
      <div className="min-h-[90vh] rounded-lg py-4 lg:py-0 glass border border-white/3">
        <div className="lg:hidden px-4 flex justify-center">
          <Logo />
        </div>
        <NavList Lists={ListItem} />
      </div>
    </div>
  );
};

export default Sidebar;
