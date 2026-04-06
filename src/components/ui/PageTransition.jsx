import { Outlet, useLocation } from "react-router-dom";

const PageTransition = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fadeup">
      <Outlet />
    </div>
  );
};

export default PageTransition;
