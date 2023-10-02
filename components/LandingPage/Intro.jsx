import React from "react";

function Intro() {
  return (
    <div
      className="p-14 sm:p-24 flex flex-col space-y-14 bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1519791883288-dc8bd696e667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTgwNzN8MHwxfHNlYXJjaHwxfHxzdG9yeXRlbGxpbmd8ZW58MXx8fHwxNjk2MDc5MDUyfDA&ixlib=rb-4.0.3&q=80&w=1000")`,
        
      }}
    >
      <p className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-center ">
        Enter the world of storytelling evolution. Your words, enhanced by AI
        magic.
      </p>
      <p className="text-center text-sm md:text-xl font-semibold">
        Welcome to the ultimate story board project! We're here to help you
        unleash your creativity.
      </p>
      <p className="text-center font-semibold sm:block hidden">
        Let our AI generate captivating tales. Save your story and share it with
        your friends and family.
      </p>
    </div>
  );
}

export default Intro;
