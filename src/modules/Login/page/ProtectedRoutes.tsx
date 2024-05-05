import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
import Login from ".";

export default function ProtectedRoute() {
  const { getUser } = useUserStore();
  const user = getUser();
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Login />;
}
