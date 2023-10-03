
import React from "react"
import Link from "next/link";
import Story from "@/models/Story";

export default async function Page() {
  const data = await getData()
  console.log(data)
 
  return (
    
      <div className=" bg-[#22172f] min-h-screen max-h-fit p-16 ">
        <p className="text-4xl sm:text-6xl  text-[#FF726D] font-bold mb-8">StoryBoard</p>
        <div className="flex flex-wrap  ">
        {data.map((item,index)=>{
          return (<div key={index} className="bg-[#2f223e] w-[100%] sm:w-[40%] p-4 rounded-lg flex flex-col space-y-4 m-4">
            <p className="text-3xl text-[#be4cd0] font-serif ">{item.title}</p>
            <p className="text-xl">
              {item.story.slice(0, 150)}...
            </p>
            <button
              type="button"
              className="text-white mt-2 w-[50%] bg-[#be4cd0] sm:w-[25%] hover:bg-[#FF726D] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <Link href={`/ParticularStory/${item._id}`}>
              Read More
              </Link>
            </button>
          </div>);
        })}
       
        </div>
      </div>
      
   
  );
}




async function getData() {
  let res =await Story.find()
  //const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getStories`)
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  
 
  return res
}
