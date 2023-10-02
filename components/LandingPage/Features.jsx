import React from "react";

function Features() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0c0a31] m-6 rounded-2xl p-6  ">
      <div className="text-[2.5rem] font-bold">
        Transform Your Story into a Masterpiece
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="max-w-sm  overflow-hidden shadow-lg mx-2 my-4 w-[75%] bg-[#17153f] rounded-lg border border-solid">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Customizable</div>
            <p className="text-gray-700">
              Choose from a variety of genres settings, and moods to customize
              your story
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg mx-2 my-4 w-[75%] bg-[#17153f] rounded-lg border border-solid ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dynamic</div>
            <p className="text-gray-700">
              Our AI creates a dynamic plot and intriguing characters tailored
              to your story prompt
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg mx-2 my-4 w-[75%] bg-[#17153f] rounded-lg border border-solid">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Realistic</div>
            <p className="text-gray-700">
              Enjoy realistic descriptions and lively dialogue that bring your
              story to life
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden shadow-lg mx-2 my-4 w-[75%] bg-[#17153f] rounded-lg border border-solid">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Interactive</div>
            <p className="text-gray-700">
              Our interactive features make sure that your story is engaging and
              keeps your readers on their toes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
