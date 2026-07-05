import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import FloatingWhatsApp from "./components/contact/FloatingWhatsApp";

const App = () => {
  return (
    <div className="min-h-screen grid-bg" style={{ background: "var(--ink)" }}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
