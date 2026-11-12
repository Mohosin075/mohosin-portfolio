import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./redesign.css";
import "./polish.css";
import "./responsive.css";
import "./typography.css";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
const lazyPage = (load) => async () => ({ Component: (await load()).default });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      { path: "*", element: <NotFound /> },
      {
        path : '/',
        lazy: lazyPage(() => import("./components/home/Home.jsx"))
      },
      {
        path : '/about',
        loader: () => redirect('/')
      },
      {
        path : '/contact',
        loader: () => redirect('/#contact')
      },
      {
        path : '/projects',
        loader: () => redirect('/#projects')
      },
      {
        path : '/projects/:id',
        lazy: lazyPage(() => import("./components/projects/ProjectDetails.jsx"))
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p role="status" className="CC" style={{ paddingTop: 120 }}>Loading page...</p>} />
  </React.StrictMode>
);
