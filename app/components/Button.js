import React from "react";

const Button = () => {
  return (
    <div className="z-10 mt-[11px] mx-[20px] flex xl:mt-[62px] md:mt-[30px] md:ml-[10px]">
      <div>
        <button
          type="button"
          className="text-gray-900  h-[49px] w-[174px] rounded-[100px] border-[1.5px] border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer  font-medium text-sm px-8 py-4 me-3 text-[20px] flex items-center gap-[3px] xl:border-[1.5px] xl:border-[#D9D9D9] xl:h-fit xl:w-[348px] xl:text-[20px] md:w-[200px] md:border-[1.5px] md:border-[#D9D9D9] "
        >
          <img src="./Frame.svg" />
          <span className=" font-normal hidden xl:flex">
            KiiT Sync for
          </span>{" "}
          <span className="font-semibold">Students</span>
          <img src="./Framearrow.svg" className="2xl:hidden sm:inline" />
        </button>
      </div>
      <div>
        <button
          type="button"
          className="z-10 text-gray-900 bg-white h-[49px] w-[174px] rounded-[100px] border-[1.5px]  border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer   font-medium text-sm px-8 py-4 me-3 text-[20px] flex items-center gap-[3px]
          xl:border-[1.5px] xl:border-[#D9D9D9] xl:h-fit xl:w-[348px] xl:text-[20px] md:w-[200px] md:border-[1.5px] md:border-[#D9D9D9]"
        >
          <img src="./Frame1.svg" className="sm:px-[2px] sm:pl-[2px]" />
          <span className=" font-normal hidden xl:flex">
            KiiT Sync for
          </span>{" "}
          <span className="font-semibold">Teachers</span>
          <img src="./Framearrow.svg" className="2xl:hidden sm:inline" />
        </button>
      </div>
    </div>
  );
};

export default Button;
