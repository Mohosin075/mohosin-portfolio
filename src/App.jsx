import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/Sidebar";
import BackToTop from "./components/ui/BackToTop";
import PageTransition from "./components/ui/PageTransition";

const App = () => {
  return (
    <div>
      <div className="md:py-5">
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content min-h-screen">
            {/* Page content here */}
            <Navbar />
            <PageTransition />
            <Footer />
            <BackToTop />
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
