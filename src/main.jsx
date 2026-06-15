import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import Home from "./components/home/Home.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/projects',
        element : <Projects></Projects>
      },
      {
        path : '/projects/:id',
        element : <ProjectDetails></ProjectDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
