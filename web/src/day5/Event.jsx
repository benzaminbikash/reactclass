import React, { useState } from "react";

function Event() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("ream@gmail.com");
  function handlerButton(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill up the form.");
    } else {
      console.log(name, email);
      setName("");
      setEmail("");
    }
  }
  return (
    <div className="m-2">
      <form action="">
        <label htmlFor="">Name:</label> <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          className="border p-2"
        />{" "}
        <br />
        <label htmlFor="">Email:</label> <br />
        <input
          value={email}
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
      </form>
    </div>
  );
}

export default Event;
