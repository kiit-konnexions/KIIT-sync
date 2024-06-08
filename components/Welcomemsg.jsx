import Image from "next/image";

const WelcomeMsg = () => {
  return (
    <>
      {/* For small screens */}
      <div className="mb-3 md:hidden">
        <div className="text-[55px] text-[#000000] font-semibold text-center">Welcome to</div>
        <div className="text-[55px] text-[#00DF24] font-semibold text-center">KiiT Sync!!</div>
        <div className="flex justify-end mt-4">
          <Image src="/HomeMsg2.png" alt="Home Message 2" width={400} height={150} />
        </div>
        <div className="flex justify-start mt-4">
          <Image src="/HomeMsg1.png" alt="Home Message 1" width={400} height={150} />
        </div>
      </div>
      {/* For medium */}
      <div className="mb-3 hidden md:block lg:hidden">
        <div className="flex justify-around items-center">
          <div className="text-[#000000] text-6xl font-semibold text-center">Welcome to</div>
          <div className="mt-4">
            <Image src="/HomeMsg2.png" alt="Home Message 2" width={400} height={150} />
          </div>
        </div>
        <div className="flex justify-around items-center mt-4">
          <div className="mt-4">
            <Image src="/HomeMsg1.png" alt="Home Message 1" width={400} height={150} />
          </div>
          <div className="text-7xl text-[#00DF24] font-semibold text-center">KiiT Sync!!</div>
        </div>
      </div>
       {/* For large */}
       <div className="mb-3 hidden lg:block">
        <div className="flex items-center">
          <div className="text-[#000000] text-7xl font-semibold text-center relative left-80">Welcome to</div>
          <div className="mt-4 relative left-96">
            <Image src="/HomeMsg2.png" alt="Home Message 2" width={600} height={200} />
          </div>
        </div>
        <div className="flex  items-center mt-4">
          <div className="mt-4 relative left-28">
            <Image src="/HomeMsg1.png" alt="Home Message 1" width={600} height={200} />
          </div>
          <div className="text-[115px] text-[#00DF24] font-semibold text-center relative left-40">KiiT Sync!!</div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMsg;
