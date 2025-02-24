import React from "react";
import { Navigate, Outlet } from "react-router";

function ProtectRouter() {
  let isLoggin = localStorage.getItem("token");
  return isLoggin ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectRouter;
