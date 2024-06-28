"use client";
import { useState, use } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "w-full",
        "p-10",
        "gap-10",
        "flex-col",
        "left-0",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }
  return (
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
      <div className="md:hidden flex items-center gap-4">
        <button className="bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-200 shadow-sm">
          <span>Contributors</span>
        </button>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="Menu.svg" alt="Menu" />
        </button>
      </div>
    </nav>
  );
}
