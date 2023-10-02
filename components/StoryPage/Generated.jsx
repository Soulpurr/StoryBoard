import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";
import ReactLoading from "react-loading";
function Generated({ generatedText, loading, description }) {
  const router = useRouter();
  const handlePublish = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/addStory", {
        method: "POST",
        headers: {
          auth: getCookies("token").token,
        },
        body: JSON.stringify({
          title: "Story",
          description: description,
          story: generatedText?.text,
        }),
      });
      let resp = await res.json();
      router.push("/")
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full sm:w-[70%]">
      <p className="text-4xl text-center text-[#ed7777] font-bold">
        Generated Story
      </p>
      <p className="text-2xl font-semibold text-center sm:text-left">Heading</p>
      <p>{generatedText?.text}</p>
      {loading && <ReactLoading type={"spin"} height={60} width={60} />}
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handlePublish}
      >
        Publish
      </button>
    </div>
  );
}

export default Generated;
