import Image from "next/image";

const FeatureCard = ({ item }) => {
  return (
    <>
      <div className="border flex flex-col p-6 rounded-2xl w-[370px]  hover:border-[#939393] hover:bg-[#fcfcfc]">
        <img src="/FcardLogo.png" alt="" className="h-8 w-8" />
        <h1 className="text-[18px] font-medium mt-3">{item.title}</h1>
        <h3 className="text-[14px] mt-2 text-[#767676] font-normal leading-[2] line-clamp-3">
          {item.body}
        </h3>
      </div>
    </>
  );
};

export default FeatureCard;
