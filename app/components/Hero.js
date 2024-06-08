import React from "react";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-start max-w-fit mt-4 py-1 px-60 sm:w-full sm:px-4 sm:py-2 min-w-fit lg:px-4 lg:py-2 xl:px-[7.8em]">
        <h3 className=" font-semibold text-xl text-black">Some Heading</h3>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          deserunt eius consequuntur magni cumque ipsa cupiditate rerum ad
          magnam laboriosam nam quasi, ipsam dolor dolores voluptatibus quas
          voluptatem explicabo accusamus.
        </p>
        <div className="mt-2 text-blue-600 hover:underline w-fit">
          <Link href={"/"}>Learn More --{">"}</Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
