import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import React from "react";

const router =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <h1> Sorry .........................</h1>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


