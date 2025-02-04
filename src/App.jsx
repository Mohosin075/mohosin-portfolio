import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <div>
      <div className="md:py-5">
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content min-h-screen">
            {/* Page content here */}
            <Navbar />
            <Outlet />
            <Footer />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
