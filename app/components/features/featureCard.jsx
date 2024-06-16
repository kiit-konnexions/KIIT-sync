import Image from "next/image";


const FeatureCard = ({item}) => {
  return(
    <div className="border-2 border-[#D3D3D3] flex flex-col p-7 gap-5 rounded-2xl w-[370px] h-[267px] hover:border-[#939393] hover:bg-[#fcfcfc]">
      <Image src="/FcardLogo.png" alt="" width={35} height={35}/>
      <h1 className="text-[20px] font-medium ">{item.title}</h1>
      <h3 className="text-[15px] text-[#767676] font-normal leading-[26px]">{item.body}</h3>
    </div>
  )
}

export default FeatureCard;