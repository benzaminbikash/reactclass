import React from "react";

function Login() {
  return (
    <div className="text-center">
      <form className="flex items-center flex-col gap-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
