import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className="flex justify-between bg-red-500 px-10 py-5">
      <div>Logo</div>
      <div className="flex gap-10 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
