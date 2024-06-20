import Contributor from "./contributorCard";

import { FaArrowRight } from "react-icons/fa";

export default function ContributorSection() {
  return (
    <div class="flex-col items-center justify-center my-20 bg-white md:mx-16 xl:mx-72 lg:mx-40 xxl:mx-60">
      <div class="flex justify-start md:justify-center mx-5 items-center">
        <img
          src="./contributor.png"
          alt="contributors icon"
          class="lg:w-[45px] lg:h-[45px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
        />
        <h1 class="lg:text-[36px] md:text-[28px] text-[22px] font-medium ml-4">Contributors</h1>
      </div>
      <p class="md:text-center lg:my-5 md:my-3 md:mx-12 my-2 text-[#767676] mx-6 lg:text-[16px] text-[14px] text-justify  xxl:mx-40">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.
      </p>
      <Contributor />

      <button className="flex items-center justify-center my-16  mx-auto lg:px-10 px-7 py-4 lg:py-4 bg-black text-white rounded-full hover:bg-gray-800">
        <span className="mr-2">Join the team</span>
        <FaArrowRight />
      </button>
    </div>
  );
}
