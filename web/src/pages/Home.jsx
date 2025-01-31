import React from "react";
import { Link, NavLink } from "react-router";

function Home() {
  return (
    <div>
      Home
      <a href="/about">Go to about page through anchor tag </a>
      <NavLink to="/about">Go to About Page</NavLink>
    </div>
  );
}

export default Home;
