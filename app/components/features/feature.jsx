import Image from "next/image";
import FeatureCards from "./featureCards";
import "../../globals.css";

const Features = () => {
  return (
    <>
      <div className="w-[90%] my-9 flex flex-col mx-auto relative 2xl:w-[1536px]">
        <div className="flex justify-center items-center gap-4 mt-5 lg:mt-8">
          <img src="/FeaturesLogo.png" alt="" className="h-10" />
          <h1 className="text-2xl font-inter font-medium">Features</h1>
        </div>
        <div className="text-[16px] text-left mt-6 mx-auto text-[#767676] w-[85%] md:w-[642px] md:text-center lg:mb-8 lg:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor.
        </div>
        <FeatureCards />
      </div>
    </>
  );
};

export default Features;
