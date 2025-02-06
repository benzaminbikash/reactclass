import React from "react";
import { Link, Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navlink";

function About() {
  const navigate = useNavigate();
  return (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
      impedit ab! Ipsum fugiat perferendis at enim illum officiis cupiditate
      voluptate modi explicabo. Voluptate culpa hic a corporis, consectetur,
      repellat dicta quaerat eum magni officiis officia excepturi maiores
      accusamus, atque libero. <br />
      <button onClick={() => navigate("/")}>Go to Home Page</button>
      <Link to="/">Go to home page</Link>
      {/* do it */}
      <br />
      <Link to="user">User</Link>
      <br />
      <Link to="/">Company</Link>
      <Outlet />
    </>
  );
}

export default About;
