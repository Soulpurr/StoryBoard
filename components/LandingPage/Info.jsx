import React from "react";

function Info() {
  return (
    <div className="flex flex-col pt-4 pb-10 bg-[#100b3b]">
      <p className="text-xl sm:text-4xl font-bold text-center">
        Gather Inspiration and Build Your Own Story Board
      </p>
      <div className="flex flex-col sm:flex-row justify-center  items-center sm:space-x-6 mt-4">
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./book.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Read Widely</div>
            <p className="text-colorful">
              Read widely in your genre to find inspiration for your story.
            </p>
          </div>
        </div>
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./book.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Take Notes</div>
            <p className="text-colorful">
              Write down your sparks of inspiration as they come to you. You
              never know when a random idea might turn into a great story.
            </p>
          </div>
        </div>
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./book.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">
              Find Your Writer's Spot
            </div>
            <p className="text-colorful">
              Find your writer's spot, where you feel relaxed and inspired.
              Whether it's a coffee shop, a park, or a desk, make it yours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;