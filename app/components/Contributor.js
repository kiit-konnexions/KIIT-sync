import React from "react";

const Contributor = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex flex-col justify-end min-w-fit px-[15em] sm:w-full sm:px-4 sm:py-2 lg:px-4 lg:py-2 2xl:px-60 2xl:py-2 xl:px-[7.8em]">
          <h3 className="font-semibold text-xl text-black ">Contributors</h3>
          <p className="text-black">Lorem ipsum dolor sit amet </p>
          <div className="flex gap-4 mt-4 cursor-pointer">
            <img src="/Ellipse3.png"></img>
            <img src="/Ellipse3.png"></img>
            <img src="/Ellipse3.png"></img>
            <div
              className="px-[11px] pt-[9.5px]  text-xl font-semibold"
              style={{
                backgroundImage: "url('/Ellipse4.png')",
                width: "60px",
                backgroundRepeat: "no-repeat",
              }}
            >
              --{">"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-full justify-center items-center">
        <button
          type="button"
          className="text-white bg-black hover:bg-slate-700 font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center mb-2 w-[30em] my-4 mx-auto sm:w-fit"
        >
          Become a Contributor
        </button>
      </div>
    </>
  );
};

export default Contributor;
