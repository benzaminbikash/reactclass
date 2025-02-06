import React from "react";
import { Navigate, Outlet } from "react-router";

function ProtectRouter() {
  let isLoggin = true;
  return isLoggin ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectRouter;
