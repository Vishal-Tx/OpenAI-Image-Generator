import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  bg-yellow-600">
      <div className="mx-4 py-4 flex items-center justify-between  text-white">
        <h2 className="text-2xl font-bold">Image Generator</h2>
        <Link to="/" className="text-xl">
          Github repo link
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
