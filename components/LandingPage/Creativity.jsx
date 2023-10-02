import React from "react";

function Creativity() {
  return (
    <div className="flex flex-col pt-4 pb-10 bg-[#100b3b]">
      <p className="text-xl sm:text-4xl font-bold text-center">Unleash Your Creativity Colorful</p>
      <div className="flex flex-col sm:flex-row justify-center  items-center sm:space-x-6 mt-4">
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./color.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Colorful</div>
            <p className="text-colorful">
              Let your creativity shine with our vivid and fun interface.
            </p>
          </div>
        </div>
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./color.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Colorful</div>
            <p className="text-colorful">
              Let your creativity shine with our vivid and fun interface.
            </p>
          </div>
        </div>
        <div className="max-w-[18rem] rounded overflow-hidden shadow-lg mx-2 my-4 border border-solid flex flex-col justify-center items-center">
          <img className="w-full" src={"./color.jpg"} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Colorful</div>
            <p className="text-colorful">
              Let your creativity shine with our vivid and fun interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creativity;
