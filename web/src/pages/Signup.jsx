import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: number,
        password: password,
      }),
    });
    setLoading(false);
    const result = await response.json();
    if (result.status) {
      toast.success(result.message);
      navigate("/verify");
    } else {
      toast.error(result?.message);
    }
  }

  return (
    <div className="text-center">
      <form className="flex items-center flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border p-2 rounded"
          required
          onChange={(e) => setNumber(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="bg-green-500 text-white p-2 rounded"
        >
          {loading ? "loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
