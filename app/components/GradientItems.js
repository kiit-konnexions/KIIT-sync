import React from "react";

const GradientItems = () => {
  return (
    <>
      <div
        className="absolute  top-[8em] right-[3em] rounded-full items-center px-10 mx-auto flex justify-center py-10 h-[255px] w-[255px] sm:hidden md:hidden lg:absolute lg:right-[1em] lg:top-[10em] lg:w-[170px] lg:h-[170px] lg:py-5 lg:rounded-full xl:right-[1em] xl:h-[250px] xl:w-[250px] xl:top-[7em]"
        style={{
          background: "hsla(47, 100%, 91%, 1)",
          background:
            "radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 61%)",
          background:
            "-moz-radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 61%)",
          background:
            " -webkit-radial-gradient(circle, hsla(47, 100%, 91%, 1) 15%, hsla(0, 0%, 100%, 1) 61%)",
        }}
      >
        <img src="./image5.svg" className="h-[125px] w-[125px]" />
      </div>
      <div
        className="absolute  top-[10em] left-[30px] flex justify-center items-center rounded-full px-10 py-10 h-[295px] w-[295px] xl:left-[1em] xl:h-[250px] xl:w-[250px] xl:top-[8.5em] lg:w-[170px] lg:h-[170px] lg:absolute lg:left-[1em] lg:top-[13em] lg:px-5 lg:py-5 lg:rounded-full md:left-[728.56px] md:top-[8.5em] md:h-[260px] md:w-[280px] md:px-5 md:py-5 sm:w-[180px] sm:h-[180px] sm:absolute sm:left-[318.56px] sm:top-[6em]"
        style={{
          background: "hsla(243, 100%, 86%, 1)",
          background:
            " radial-gradient(circle, hsla(243, 100%, 86%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            "-moz-radial-gradient(circle, hsla(243, 100%, 86%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
          background:
            "-webkit-radial-gradient(circle, hsla(243, 100%, 86%, 1) 15%, hsla(0, 0%, 100%, 1) 71%)",
        }}
      >
        <img
          src="./image4.svg"
          className="h-[92px] w-[92px] sm:h-[42.84px] sm:w-[42.84px] lg:h-60px lg:w-60px"
        />
      </div>
    </>
  );
};

export default GradientItems;
