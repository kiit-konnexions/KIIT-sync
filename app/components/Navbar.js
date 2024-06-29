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
    <nav className="flex items-center justify-between bg-white py-8 px-10">
      <div className="flex items-center">
        <div className="mr-2">
          <img src="kiit.svg" alt="" />
        </div>
        <div className="">
          <span className="font-bold text-2xl ml-0.5">KiiT</span>
          <sapn className="font text-2xl ml-1">Sync</sapn>
        </div>
      </div>
      <div className=" sticky z-50 flex space-x-10">
        <a href="#" className="font-medium text-black  hover:text-gray-700">
          Home
        </a>
        <a href="#" className="font-medium text-black hover:text-gray-700">
          Features
        </a>
        <a href="#" className="font-medium text-black hover:text-gray-700">
          Contributors
        </a>
        <a href="#" className="font-medium text-black hover:text-gray-700">
          Report an issue
        </a>
      </div>
      <div>
        <button className="sticky z-50 px-4 py-2 text-black rounded-md  border-[1.5px] border-[#D9D9D9] font-medium shadow-sm bg-white hover:bg-gray-100">
          How to contribute
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-4">
        <button className="px-4 py-2 text-black rounded-3xl  border-[1.5px] border-[#D9D9D9] font-medium shadow-sm bg-white hover:bg-gray-100">
          Contributors
        </button>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="menu.svg" alt="" />
        </button>
      </div>
    </nav>
  );
}
