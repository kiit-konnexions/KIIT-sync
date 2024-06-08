import Image from "next/image";

const HomeContributors = () => {
  return (
    <div className="mt-5">
      <div className="text-[35px] text-[000000] font-semibold text-center mb-3">Contributors</div>  
      <div className="text-[20px] text-[000000] font-normal w-[80%] text-center mx-auto">Lorem ipsum dolor sit amet</div>
      <div className="flex flex-row justify-around flex-wrap w-full">
        <Image src="/ContributorCircle.png" alt="" width={145} height={145} className="mt-5"/>
        <Image src="/ContributorCircle.png" alt="" width={145} height={145} className="mt-5"/>
        <Image src="/ContributorCircle.png" alt="" width={145} height={145} className="mt-5"/>
        <Image src="/ContributorArrow.png" alt="" width={145} height={145} className="mt-5"/>
      </div>
      <div className="flex justify-center my-5">
        <button className="text-white font-medium text-xl bg-black rounded-3xl w-64 h-14">Become a Contributor</button>
      </div>

    </div>
  )
}

export default  HomeContributors;