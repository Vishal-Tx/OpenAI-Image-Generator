import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  bg-yellow-600">
      <div className="mx-4 py-4 flex items-center justify-between  text-white">
        <Link to="/" className="text-2xl font-bold">
          Image Generator
        </Link>
        <a
          href="https://github.com/Vishal-Tx/OpenAI-Image-Generator"
          target="_blank"
          className="text-xl hover:text-gray-300 hover:underline"
        >
          Github repo link
        </a>
      </div>
    </div>
  );
};

export default Navbar;
