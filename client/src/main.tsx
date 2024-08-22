import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Layout from "./layout";
import Products from "./(routes)/products/products";
import ProductPage from "./(routes)/product-page/product-page";
import Dashboard from "./(routes)/dashboard/dashboard";
import CreateProduct from "./(routes)/dashboard/routes/create";
import DashMain from "./(routes)/dashboard/components/dash-main";
import Login from "./(routes)/login/login";
import Reset from "./(routes)/reset/reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/products/:genre",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/login",
        children: [
          {
            path: "",
            element: <Login />
          },
          {
            path: "reset",
            element: <Reset />,
          },
        ],
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashMain />,
          },
          {
            path: "create",
            element: <CreateProduct />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
