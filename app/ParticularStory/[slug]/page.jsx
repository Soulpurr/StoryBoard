"use client";

import { getCookies } from "cookies-next";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page({ params }) {
  const [story, setstory] = useState(null);
  const [loading, setloading] = useState(false);
  const [loading1, setloading1] = useState(false);
  const handleStory = async () => {
    setloading(true);
    let res = await fetch(`http://localhost:3000/api/getStory/${params.slug}`);
    let data = await res.json();
    setstory(data);
    setloading(false);
  };
  const handlelike = async () => {
    setloading1(true);
    let res = await fetch(
      `http://localhost:3000/api/likeStory/${params.slug}`,
      {
        method: "POST",
        headers: {
          auth: getCookies("token").token,
        },
      }
    );
    let data = await res.json();
    console.log(data);
    setloading1(false);
    toast(`Liked`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    handleStory();
  }, []);

  return (
    <div className=" bg-[#22172f] min-h-screen max-h-fit p-4 sm:p-16 ">
      <div className=" flex flex-col space-y-4 m-4">
        <p className="text-6xl text-[#be4cd0] font-serif ">{story?.title}</p>
        {loading && <ReactLoading type={"spin"} height={40} width={40} />}
        <p className="text-xl">{story?.story}</p>
        <button
          onClick={handlelike}
          type="button"
          className="text-white mt-2 w-[5rem] flex bg-[#be4cd0]  hover:bg-[#FF726D] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          <p>Like</p>
          {loading1 && <ReactLoading type={"spin"} height={20} width={20} />}
        </button>
      </div>
    </div>
  );
}
