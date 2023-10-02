"use client";
import Generated from "@/components/StoryPage/Generated";
import Sidebar from "@/components/StoryPage/Sidebar";
import React, { useEffect, useState } from "react";

function StoryGenerate() {
  const [generatedText, setgeneratedText] = useState(null);
  const [description, setdescription] = useState(null);
  const [loading, setloading] = useState(false);
  const setText = (text) => {
    setgeneratedText(text);
  };
  const setLoad = (load) => {
    setloading(load);
  };
  const setDesc = (desc) => {
    setdescription(desc);
  };
  console.log(generatedText);

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between bg-[#22172f] min-h-screen h-fit ">
      <Sidebar setText={setText} setLoad={setLoad} setDesc={setDesc} />
      <Generated
        generatedText={generatedText}
        loading={loading}
        description={description}
      />
    </div>
  );
}

export default StoryGenerate;
