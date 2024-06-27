import React from "react";

export default function Navbar() {
  return(
    <nav className="flex justify-between items-center bg-white py-6 px-10">
      <div className="flex items-center">
        <div className="mr-2">
          <img src="logo.svg" alt="logo" />
        </div>
        <span className="text-2xl font-bold mr-1">KiiT</span>
        <span className="text-2xl">Sync</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="/" className="text-black hover:text-gray-800">
          Home
        </a>
        <a href="/" className="text-black hover:text-gray-800">
          Features
        </a>
        <a href="/" className="text-black hover:text-gray-800">
          Contributors
        </a>
        <a href="/" className="text-black hover:text-gray-800">
          Report an issue
        </a>
      </div>
      <div>
        <button className="bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-200 shadow-sm">
          How to contribute
        </button>
        </div>
        </nav>
 
  );
}