import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainPage from "./pages/mainPage/MainPage.js";

const router =createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement : <h1> Sorry .........................</h1>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


