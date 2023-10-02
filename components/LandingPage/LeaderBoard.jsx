"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LeaderBoard() {
  const [leaderboard, setleaderboard] = useState(null);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/getStories");
    const data = await res.json();
    data.sort((a, b) => b.upvotes.length - a.upvotes.length);
    setleaderboard(data);
  };
  useEffect(() => {
    getData();
  }, []);
  {
  }

  return (
    <div className="p-12 flex flex-col justify-center items-center">
      <div className="text-[1.5rem] sm:text-[2.5rem] font-bold">
        Find Your Story on Our Leaderboard
      </div>
      <div className=" text-[0.7rem] hidden sm:block sm:text-[1rem]">
        Check out our leaderboard to see the most popular stories and their
        prompts.
      </div>
      <div className="border border-[#6450cf] rounded-xl p-4">
        <Link
          href={`/ParticularStory/${leaderboard&&leaderboard[0]?._id}`}
          className="cursor-pointer flex justify-between space-x-6"
        >
          <p className="text-[1rem]">1st Place</p>
          <div className="border-l-2 border-solid border-[#6450cf] "></div>
          <p className="text-[1rem] w-[13rem] sm:w-[22rem] ">
            {leaderboard && leaderboard[0]?.description}
          </p>
        </Link>
        <hr />
        <Link
          href={`/ParticularStory/${leaderboard&&leaderboard[1]?._id}`}
          className="cursor-pointer flex justify-between space-x-6"
        >
          <p className="text-[1rem]">2nd Place</p>
          <div className="border-l-2 border-solid border-[#6450cf] "></div>
          <p className="text-[1rem] w-[13rem] sm:w-[22rem] ">
            {leaderboard && leaderboard[1]?.description}
          </p>
        </Link>
        <hr />
        <Link
          href={`/ParticularStory/${leaderboard&&leaderboard[2]?._id}`}
          className="cursor-pointer flex justify-between space-x-6"
        >
          <p className="text-[1rem]">3rd Place</p>
          <div className="border-l-2 border-solid border-[#6450cf] "></div>
          <p className="text-[1rem] w-[13rem] sm:w-[22rem] ">
            {leaderboard && leaderboard[2]?.description}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LeaderBoard;
