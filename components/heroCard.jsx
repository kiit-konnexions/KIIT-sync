import Image from "next/image";

const HeroCard = ({item}) => {
  return (
    <div className="text-black flex flex-col justify-center items-center bg-[#3AB249]/[0.22] w-44 h-44 rounded-lg active:bg-[#3AB249]/[0.15]">
      <Image src={item.img} alt={`${item.user} image`} width={45} height={45} />
        <div className="flex relative top-9 w-full justify-between px-3">
          <div className="text-lg">{item.user}</div>
          <Image src="/Arrow.png" alt="" width={30} height={25}></Image>
        </div>
    </div>
  );
};

export default HeroCard;
