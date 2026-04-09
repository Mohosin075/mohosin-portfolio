import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";

const App = () => {
  return (
    <div className="min-h-screen bg-mesh selection:bg-indigo-500/30 selection:text-white">
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
      
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-slow-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] animate-slow-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default App;
