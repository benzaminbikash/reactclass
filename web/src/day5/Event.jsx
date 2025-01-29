import React, { useState } from "react";

function Event() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handlerButton() {
    if (!name || !email) {
      alert("Please fill up the form.");
    } else {
      console.log(name, email);
    }
  }
  return (
    <div className="m-2">
      <label htmlFor="">Name:</label> <br />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Your Name"
        className="border p-2"
      />{" "}
      <br />
      <label htmlFor="">Email:</label> <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Your Name"
        className="border p-2 mb-2"
      />
      <br />
      <button
        onClick={handlerButton}
        className="bg-red-500 px-10 py-1 rounded-md"
      >
        Submit{" "}
      </button>
    </div>
  );
}

export default Event;
