import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-white py-5 px-10">
        <div className="flex items-center">
          <div className="mr-2 ">
            <img src="kiit.svg" alt="" />
          </div>
          <div className="hidden lg:block">
            <span className="font-bold text-2xl ml-0.5">KiiT</span>
            <sapn className="text-2xl ml-1">Sync</sapn>
          </div>
        </div>
        <div className="hidden lg:inline-flex sticky z-50  space-x-10">
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
          <button className="hidden lg:block sticky z-50 px-4 py-2 text-black rounded-md  border-[1.5px] border-[#D9D9D9] font-medium shadow-sm bg-white hover:bg-gray-100">
            How to contribute
          </button>
        </div>
        <div className="lg:hidden flex items-center gap-4 sticky z-50">
          <button className="px-4 py-2 text-black rounded-3xl  border-[1.5px] border-[#D9D9D9] font-medium shadow-sm bg-white hover:bg-gray-100">
            Contributors
          </button>
          <button>
            <img src="menu.svg" alt="" />
          </button>
        </div>
      </nav>
    </>
  );
}
