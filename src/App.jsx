import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./modules/Layout/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
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
