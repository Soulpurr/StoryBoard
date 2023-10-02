// pages/sign-up.js
"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Add your sign-up logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add API calls or other sign-up logic as needed
    try {
      let res = await fetch("http://localhost:3000/api/addUser", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      let resp = await res.json();
      console.log(resp);
      toast(`Account Created`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-black mb-4 font-bold">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-black text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4 flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
