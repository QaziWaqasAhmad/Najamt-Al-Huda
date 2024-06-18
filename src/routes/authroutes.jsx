import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData ? <Outlet /> : <Navigate to="admin/login" />;
};
