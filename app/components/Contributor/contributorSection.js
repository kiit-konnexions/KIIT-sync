import Contributor from "./contributorCard";

import { FaArrowRight } from "react-icons/fa";

export default function ContributorSection() {
  return (
    <div className="flex-col items-center   justify-center my-20 bg-white md:mx-16 xl:mx-60 lg:mx-40 ">
      <div className=" -mt-24  absolute lg:right-0 hidden lg:block">
        <img
          src="./contributorElement.png"
          alt="contributors icon"
          className="xl:w-[532px] xl:h-[532px] lg:w-[400px] lg:h-[400px] hidden md:block"
        />
      </div>
      <div className=" absolute mt-16 xl:right-28 lg:right-20 hidden lg:block">
        <img
          src="./star.png"
          alt="contributors icon"
          className="lg:w-[40px] lg:h-[40px] md:w-[550px] md:h-[550px] hidden md:block"
        />
      </div>

      <div className="flex justify-start md:justify-center mx-5 items-center">
        <img
          src="./contributor.png"
          alt="contributors icon"
          className="lg:w-10 lg:h-10 md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
        />
        <h1 className="lg:text-2xl text-[22px] font-medium ml-4">
          Contributors
        </h1>
      </div>
      <div className="text-[16px] text-left mt-6 mx-auto text-[#767676] w-[85%] md:w-[642px] md:text-center lg:mb-8 lg:leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.
      </div>
      <Contributor />

      <button className="flex items-center justify-center my-16  mx-auto lg:px-10 px-7 py-4 lg:py-4 bg-black text-white rounded-full hover:bg-gray-800">
        <span className="mr-2">Join the team</span>
        <FaArrowRight />
      </button>
    </div>
  );
}
