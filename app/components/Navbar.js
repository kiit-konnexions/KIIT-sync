import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white py-8 px-10">
      <div className="flex items-center">
        <div className="mr-4">
          <img src="kiit.svg" alt="" />
        </div>
        <div className="hidden mg:flex">
          <span className="font-bold text-2xl ml-2">KiiT</span>
          <sapn className="font text-2xl">Sync</sapn>
        </div>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-gray-700">
          Home
        </a>
        <a href="#" className="text-black hover:text-gray-700">
          Features
        </a>
        <a href="#" className="text-black hover:text-gray-700">
          Contributors
        </a>
        <a href="#" className="text-black hover:text-gray-700">
          Report an issue
        </a>
      </div>
      <div>
        <button class="px-4 py-2 text-black rounded-md border border-slate-600 font-medium shadow-sm bg-white">
          How to contribute
        </button>
      </div>
    </nav>
  );
}
