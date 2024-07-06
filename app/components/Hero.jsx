import React from "react";
import Button from "./Button";
import Mockup from "./Mockup";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex md:items-center">
        <div className="xl:mt-[90px] z-10 text-[26px] h-[126px] w-[314px] mt-[19px] ml-[22px] xl:w-[747px] xl:h-[116px] xl:text-[36px] xl:font-[500] xl:text-center xl:text-black md:text-[36px] md:text-center md:w-[500px] md:h-fit md:mx-auto md:px-2 md:py-1">
          <h1 className="font-medium leading-[1.6]">
            Lorem ipsum dolor sit amet
            <span className="font-extralight"> consectetur </span>adipisicing
            elit.
          </h1>
        </div>
        <div className="z-10 h-[120px] w-[338px] mt-[9px] ml-[22px] text-[14px] xl:text-center xl:w-[642px] xl:h-[64px] xl:mt-[20px] xl:font-light xl:text-[16px] md:h-fit md:w-[450px] md:px-2 md:py-1 md:text-center md:ml-0 leading-9">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          illum placeat minima. Reprehenderit nihil officia, quidem voluptatem
          culpa necessitatibus.
        </div>
        <Button />
        <Mockup />
      </div>
    </>
  );
};

export default Hero;
