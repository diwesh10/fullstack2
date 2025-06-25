import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ watchLaterCount }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <Link to="/" className="text-2xl font-bold">
        MiniYouTube
      </Link>
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded bg-gray-800 text-white focus:outline-none"
        disabled
      />
      <Link to="/watch-later" className="relative">
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Watch Later
          {watchLaterCount > 0 && (
            <span className="ml-2 bg-red-500 text-xs px-2 py-1 rounded-full absolute -top-2 -right-2">
              {watchLaterCount}
            </span>
          )}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar; 