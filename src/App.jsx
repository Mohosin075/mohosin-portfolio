import useSiteMotion from "./utils/useSiteMotion";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import FloatingWhatsApp from "./components/contact/FloatingWhatsApp";
import PageMetadata from "./components/PageMetadata";
import { MotionConfig } from "framer-motion";

const App = () => {
  const root = useSiteMotion();
  return (
    <MotionConfig reducedMotion="user">
    <div ref={root} className="portfolio-shell editorial-theme min-h-screen" style={{ background: "var(--ink)" }}>
      <PageMetadata />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
    </MotionConfig>
  );
};

export default App;
