import React from "react";

const GradientItems = () => {
  return (
    <>
      <div
        className="absolute z-0 top-[5em] right-[2em] rounded-full items-center px-10 mx-auto flex justify-center py-10 h-[355px] w-[355px] sm:hidden md:h-[155px] md:w-[155px] md:top-[10em] md:-right-16 lg:right-1 lg:absolute lg:top-[8em] lg:w-[270px] lg:h-[270px] lg:py-5 lg:rounded-full xl:-mr-3 xl:h-[350px] xl:w-[350px] xl:top-[4em]"
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
        <img src="./image5.svg" className="h-[125px] w-[125px] md:h-[70px] md:w-[70px] " />
      </div>
      <div
        className="absolute z-0  top-[86px] left-[10px] flex justify-center items-center rounded-full px-10 py-10 h-[385px] w-[385px] xl:h-[290px] xl:ml-7 xl:w-[290px] xl:top-[9em] lg:w-[340px] lg:h-[340px] lg:absolute lg:left-[-2em] lg:top-[9em] lg:px-5 lg:py-5 lg:rounded-full md:top-[14em] md:h-[160px] md:w-[160px] md:-left-16 sm:w-[300px] sm:h-[300px]  sm:left-[268.56px] sm:top-[3em]"
        
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
        <img src="./image4.svg" className="h-[92px] w-[92px] sm:h-[72.84px] sm:w-[72.84px] lg:h-60px lg:w-60px md:h-[50px] md:w-[50px]" />
      </div>
    </>
  );
};

export default GradientItems;



