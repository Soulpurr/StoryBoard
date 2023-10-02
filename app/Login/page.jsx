// pages/index.js
"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setislogin] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (getCookies("token").token) router.push("/");
  }, []);

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md overflow-hidden sm:flex-row w-[80%] lg:max-w-2xl h-fit sm:h-[28rem] flex flex-col justify-between ">
        {/* Left Part - Image */}
        <div
          className={` bg-orange-500  lg:flex w-full sm:w-1/2 bg-cover bg-center flex flex-col sm:flex sm:flex-col py-4 sm:p-4 items-center justify-center ${
            !islogin ? "duration-300  sm:translate-x-full" : "duration-300"
          }`}
        >
          <p className="text-2xl font-bold text-white">
            {islogin ? "Dont Have An Account?" : "Have An Account?"}
          </p>

          <button
            type="button"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 border border-solid border-white focus:outline-none focus:bg-blue-600"
            onClick={() => {
              setislogin(!islogin);
            }}
          >
            {islogin ? "Create Account" : "Sign In"}
          </button>
        </div>

        {/* Right Part - Login Fields */}
        <div
          className={` p-8 w-full sm:w-1/2 flex flex-col justify-center items-center ${
            !islogin ? "duration-300  sm:-translate-x-full " : "duration-300"
          }`}
        >
          {islogin && <SignIn />}
          {!islogin && <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default Login;
