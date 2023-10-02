"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCookies } from "cookies-next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setlogin] = useState(null);
  useEffect(() => {
    setlogin(getCookies("token").token);
  }, []);

  const pathname = usePathname();
  const getNavbarColor = () => {
    switch (pathname) {
      case "/":
        return "#140d45";
      case "/AllStories":
        return "#20172d";
      case "/ParticularStory":
        return "#20172d";
      case "/StoryGenerate":
        return "#20172d";
      case "/Login":
        return "#20172d";
      case "/LeaderBoard":
        return "#20172d";
      default:
        return "#20172d";
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`p-4`} style={{ backgroundColor: getNavbarColor() }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-500 text-xl font-bold ">StoryBiz</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white py-2">
            Home
          </a>
          <a href="/AllStories" className="text-white py-2">
            Stories
          </a>
          <a href="/LeaderBoard" className="text-white py-2">
            LeaderBoard
          </a>
          <a href="/StoryGenerate" className="text-white py-2">
            Generate
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-[13rem]  bg-gray-800 flex flex-col items-center w-[45%] ">
            <a href="/" className="text-white py-2">
              Home
            </a>
            <a href="/AllStories" className="text-white py-2">
              Stories
            </a>
            <a href="/LeaderBoard" className="text-white py-2">
              LeaderBoard
            </a>
            <a href="/StoryGenerate" className="text-white py-2">
              Generate
            </a>
          </div>
        )}

        {/* Login Button */}
        {login == null && (
          <div className="hidden md:flex items-center space-x-4">
            <a href="/Login" className="text-white">
              Login
            </a>
            {/* Add your login logic or link here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
