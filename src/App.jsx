import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./modules/Layout/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to='/home' />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />
      },
      {
        path: "home",
        index: true,
        async lazy() {
          const component = await import("./modules/Home/page");
          return { Component: component.default };
        },
      },
      {
        path: "candystore",
        async lazy() {
          const component = await import("./modules/CandyStore/page");
          return { Component: component.default };
        },
      },
      {
        path: "login",
        async lazy() {
          const component = await import(
            "./modules/Login/page/ProtectedRoutes"
          );
          return { Component: component.default };
        },
      },
      {
        path: "checkout",
        async lazy() {
          const component = await import("./modules/Checkout/page");
          return { Component: component.default };
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
