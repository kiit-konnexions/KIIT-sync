import React from "react";

const GradientItems = () => {
  return (
    <>
      <div
        className="absolute hidden z-0 top-[5em] right-[2em] rounded-full items-center px-10 mx-auto justify-center py-10 h-[355px] w-[355px] xl:flex xl:right-[1em] xl:top-[3em] md:flex md:-right-[2.5em] md:top-[2em] lg:flex lg:right-[2.5em]"
        style={{
          background: "hsla(47, 100%, 91%, 1)",
          background:
            "radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            "-moz-radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            " -webkit-radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
        }}
      >
        <img
          src="./image5.svg"
          className="h-[125px] w-[125px] xl:w-[125px] xl:h-[125px] md:h-[62px] md:w-[62px] lg:h-[82px] lg:w-[82px]"
        />
      </div>
      <div
        className="absolute z-0 top-[110px] -right-10 rounded-full rounded-r-none flex justify-center items-center h-[195px] w-[195px] xl:rounded-r-full xl:h-[395px] xl:w-[395px] xl:left-[29px] xl:top-[96px] md:left-[7px] md:top-[120px] md:h-[295px] md:w-[295px] lg:left-[80px]"
        style={{
          background: "hsla(263, 75%, 89%, 1)",
          background:
            "radial-gradient(circle, hsla(263, 75%, 89%, 1) 2%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            "-moz-radial-gradient(circle, hsla(263, 75%, 89%, 1) 2%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            "-webkit-radial-gradient(circle, hsla(263, 75%, 89%, 1) 2%, hsla(0, 0%, 100%, 1) 71%)",
        }}
      >
        <img
          src="./image4.svg"
          className="absolute h-[42.84px] w-[42.84px] xl:h-[92px] xl:w-[92px] md:h-[62px] md:w-[62px] lg:h-[82px] lg:w-[82px]"
        />
      </div>
    </>
  );
};

export default GradientItems;
