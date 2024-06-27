import React from "react";

const Button = () => {
  return (
    <div className="absolute top-[411px] flex left-[21px] xl:top-[402px] xl:left-[302px] md:top-[380px] md:left-[210px] lg:left-[310px]">
      <div>
        <button
          type="button"
          class="text-gray-900 top-[411px]  h-[49px] w-[174px] rounded-[100px] border-[1px] border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer  font-medium text-sm px-8 py-4 me-3 text-[20px] flex items-center gap-[3px] xl:h-fit xl:w-[348px] xl:text-[20px] md:w-[200px] "
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
          class="text-gray-900 bg-white h-[49px] w-[174px] rounded-[100px] border-[1px]  border-[#D9D9D9] focus:outline-none hover:bg-gray-100 hover:cursor-pointer   font-medium text-sm px-8 py-4 me-3 text-[20px] flex items-center gap-[3px] xl:h-fit xl:w-[348px] xl:text-[20px] md:w-[200px]"
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
