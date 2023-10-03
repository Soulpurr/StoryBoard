// Assuming this is Sidebar.js
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function Sidebar({ setText, setLoad, setDesc }) {
  const [loading, setloading] = useState(false);
  const [description, setDescription] = useState("");
  const [wordLimit, setWordLimit] = useState("");
  const [language, setLanguage] = useState("english");

  const handleGenerate = async () => {
    // Add your generation logic here using the state values
    setLoad(true);
    const options = {
      method: "POST",
      url: "https://chatgpt-api8.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
      },
      data: [
        {
          role: "user",
          content: `"${description}" build me a story from this in ${wordLimit} words`,
        },
      ],
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setLoad(false);
      setText(response.data);
      setDescription(description);
    } catch (err) {
      console.log(err.message);
      setLoad(false);
    }
  };

  return (
    <div className="w-full md:w-[30%] p-4 border-r-2 sm:h-[100vh]">
      <div className="container mx-auto mt-8">
        <div className="mb-10">
          <p className="text-3xl text-[#ed7777] text-center">
            Generate Your Story
          </p>
        </div>
        {/* Description Input */}
        <div className="mb-4">
          <label
            className="block text-[#c64fc8] text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="resize-none border rounded-md w-full py-2 px-3 text-white bg-[#2f223e]"
            id="description"
            name="description"
            cols={20}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Word Limit Input */}
        <div className="mb-4">
          <label
            className="block text-[#c64fc8] text-sm font-bold mb-2"
            htmlFor="wordLimit"
          >
            Word Limit
          </label>
          <input
            type="number"
            className="border rounded-md w-full py-2 px-3 text-white bg-[#2f223e]"
            id="wordLimit"
            name="wordLimit"
            value={wordLimit}
            onChange={(e) => setWordLimit(e.target.value)}
          />
        </div>

        {/* Language Toggle */}
        <div className="mb-4">
          <label
            className="block text-[#c64fc8] text-sm font-bold mb-2"
            htmlFor="language"
          >
            Language
          </label>
          <select
            className="border rounded-md w-full py-2 px-3 text-white bg-[#2f223e]"
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            {/* Add more language options as needed */}
          </select>
        </div>

        {/* Generate Button */}
        <button
          className="bg-blue-500 text-[#c64fc8] flex py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          onClick={handleGenerate}
        >
          Generate
          {loading && <ReactLoading type={"spin"} height={20} width={20} />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
