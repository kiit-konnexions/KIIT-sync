import React from "react";
import Button from "./Button";
import Mockup from "./Mockup";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-col lg:items-center md:flex md:flex-col md:items-center md:w-full sm:ml-[22px] ">
    <div className="absolute z-50 mx-auto w-full sm:ml-[15px] sm:pl-1 md:w-screen lg:w-fit">
      <div>
        <div className="z-50 h-[116px] w-[747px] mx-auto px-1 text-[36px] text-center mt-[149px] sm:w-[314px] sm:h-[126px] sm:px-0 sm:mt-[119px] sm:mx-0 sm:text-[26px] sm:text-left xl:w-[547px]">
          <h1 className=" font-medium">
            Lorem, ipsum dolor sit amet{" "}
            <span className=" font-extralight">consectetur </span>adipisicing
            elit.
          </h1>
        </div>
        <div className=" mt-2 h-[64px] w-[642px] px-1 text-[16px] font-light text-center mx-auto sm:w-[338px] sm:h-[120px] sm:text-[14px] sm:px-0 sm:mx-0 sm:text-left xl:w-[442px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          illum placeat minima. Reprehenderit nihil officia, quidem voluptatem
          culpa necessitatibus.
        </div>
      </div>
     <Button/>
     <Mockup/>
     </div>
    </div>
  );
};

export default Hero;
