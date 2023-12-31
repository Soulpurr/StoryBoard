"use client";

import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    try {
      setloading(true);

      let res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });
      let resp = await res.json();

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
      setloading(false);
      window.location.reload();
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
      setloading(false);
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
        <div className="mb-4 flex justify-center items-center space-x-6">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          {loading && (
            <ReactLoading color="red" type={"spin"} height={30} width={30} />
          )}
        </div>
      </form>
    </div>
  );
}

export default SignIn;
