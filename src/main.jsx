import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/about',
        element : <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto w-[95%] md:w-[90%] max-w-[1700px]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
