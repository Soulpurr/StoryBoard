import React from "react";
import Link from "next/link";

export default async function Page() {
  const data = await getData();
  console.log(data);
  data.sort((a, b) => b.upvotes.length - a.upvotes.length);
  return (
    <div className=" bg-[#22172f] min-h-screen max-h-fit p-16 ">
      <p className="text-4xl sm:text-6xl  text-[#FF726D] font-bold mb-8">
        LeaderBoard
      </p>
      <div className="flex flex-wrap  ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#2f223e] w-[100%] sm:w-[40%] p-4 rounded-lg flex flex-col space-y-4 m-4"
            >
              <span className="relative w-10 h-10 top-0 right-0 bg-yellow-500 text-gray-800 px-2 py-1 rounded-full text-xl font-semibold">
                {index+1}
              </span>

              <p className="text-3xl text-[#be4cd0] font-serif ">
                {item.title}
              </p>
              <p className="text-xl">{item.description.slice(0, 150)}...</p>

              <button
                type="button"
                className="text-white mt-2 w-[50%] bg-[#be4cd0] sm:w-[25%] hover:bg-[#FF726D] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                <Link href={`/ParticularStory/${item._id}`}>Read More</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/getStories");

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
