import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

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
    </>
  );
}

export default About;
