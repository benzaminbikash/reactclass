import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className="bg-red-500 flex  justify-between p-5 ">
      <h1>Logo</h1>
      <div className="flex  gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
