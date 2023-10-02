"use client";

import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      console.log("Email:", email);
      console.log("Password:", password);
      let res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });
      let resp = await res.json();
      console.log(resp);
      toast("Logged In", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.reload;
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
      <h2 className=" text-2xl text-black  mb-4 font-bold">Login</h2>
      <form>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
