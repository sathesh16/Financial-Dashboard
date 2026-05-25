import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import PublicRoute from "./PublicRoute";
import Login from "@/pages/Login/Login"
import Register from "@/pages/Register/Register"
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);