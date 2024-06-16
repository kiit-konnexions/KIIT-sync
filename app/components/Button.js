import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center items-center mt-5 sm:flex sm:justify-start sm:ml-[22px] sm:mt-1 lg:mt-[4em] xl:mt-[2em] sm:gap-[1px] sm:w-fit ">
      <div>
        <button
          type="button"
          class="text-gray-900 bg-white border-2 border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer  font-medium rounded-full text-sm px-8 py-4 me-3 text-[20px] flex items-center gap-[3px] sm:py-1 sm:px-3 sm:text-[14px]"
        >
          <img src="./Frame.svg" />
          <span className=" font-normal sm:hidden">KiiT Sync for</span>{" "}
          <span className="font-semibold">Students</span>
          <img src="./Framearrow.svg" className="2xl:hidden sm:inline" />
        </button>
      </div>
      <div>
        <button
          type="button"
          class="text-gray-900 bg-white border-2 border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer   font-medium rounded-full text-sm px-8 py-4 text-[20px] flex items-center gap-[3px] sm:py-1 sm:px-3 sm:text-[14px]"
        >
          <img src="./Frame1.svg" className="sm:px-[2px] sm:pl-[2px]" />
          <span className=" font-normal sm:hidden">KiiT Sync for</span>{" "}
          <span className="font-semibold">Teachers</span>
          <img src="./Framearrow.svg" className="2xl:hidden sm:inline" />
        </button>
      </div>
    </div>
  );
};

export default Button;
