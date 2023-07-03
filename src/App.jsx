import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;