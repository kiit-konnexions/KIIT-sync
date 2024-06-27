import React from "react";
import Button from "./Button";
import Mockup from "./Mockup";

const Hero = () => {
  return (
    <>
      <div className="md:flex md:justify-center md:items-center ">
        <div className="absolute text-[26px] h-[126px] w-[314px] top-[119px] ml-[22px] xl:w-[747px] xl:h-[116px] xl:top-[149px] xl:ml-0 xl:left-[284px] xl:text-[36px] xl:font-[500] xl:text-center xl:text-black md:text-[36px] md:text-center md:w-[500px] md:h-fit md:mx-auto md:px-2 md:py-1">
          <h1 className="font-medium">
            Lorem, ipsum dolor sit amet
            <span className="font-extralight"> consectetur </span>adipisicing
            elit.
          </h1>
        </div>
        <div className=" absolute h-[120px] w-[338px] top-[259px] ml-[22px] text-[14px] xl:text-center xl:w-[642px] xl:h-[64px] xl:top-[281px] xl:ml-0 xl:left-[335px] xl:font-light xl:text-[16px] md:h-fit md:w-[450px] md:px-2 md:py-1 md:text-center md:ml-0 md:top-[250px]">
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
