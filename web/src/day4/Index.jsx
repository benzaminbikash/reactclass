import React, { useState } from "react";
import Home from "../components/Home";

function Index() {
  const [index, setIndex] = useState(0);
  return (
    <div className="m-3">
      {/* button */}
      <div className="flex gap-11">
        <button
          className="bg-blue-500 text-white px-10 py-2"
          onClick={() => setIndex(0)}
        >
          Home
        </button>
        <button
          className="bg-blue-500 text-white px-10 py-2"
          onClick={() => setIndex(1)}
        >
          About
        </button>
        <button
          className="bg-blue-500 text-white px-10 py-2"
          onClick={() => setIndex(2)}
        >
          Contact
        </button>
      </div>
      {/* description */}
      <div>
        {index == 0 && <Home />}
        {index == 1 && (
          <p>
            About Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            ducimus possimus saepe repellat nostrum illo? Odio quae error natus
            ipsam corrupti incidunt facilis eum libero tempore necessitatibus
            iure maxime aliquam ipsum fugiat consequatur est, rem ullam. Ipsum
            vitae iste placeat est ducimus perferendis repellat, aperiam
            explicabo eius assumenda nobis aut.
          </p>
        )}
        {index == 2 && (
          <p>
            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            ducimus possimus saepe repellat nostrum illo? Odio quae error natus
            ipsam corrupti incidunt facilis eum libero tempore necessitatibus
            iure maxime aliquam ipsum fugiat consequatur est, rem ullam. Ipsum
            vitae iste placeat est ducimus perferendis repellat, aperiam
            explicabo eius assumenda nobis aut.
          </p>
        )}
      </div>
    </div>
  );
}

export default Index;
