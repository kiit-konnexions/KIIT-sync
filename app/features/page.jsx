import Image from "next/image";
import FeatureCards from "../components/features/featureCards";
import '../globals.css'; 

const Features = () => {
  return (
    <>
    <div className="w-[90%] my-9 flex flex-col mx-auto">
      <div className="flex justify-center gap-2 mr-4 xl:mt-8">
        <Image src="/FeaturesLogo.png" alt="" width={40} height={33} />
        <h1 className="text-4xl font-inter font-medium">Features</h1>
      </div>
      <div className="text-[16px] text-left mt-7 mx-auto text-[#767676] font-medium w-[85%] md:w-[642px] md:text-center md:text-[16px] xl:mb-8 xl:leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.
      </div>
        <FeatureCards/>
    </div>

    </>
  );
};

export default Features;
