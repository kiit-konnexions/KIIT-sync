import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between h-24 items-center px-7 mt-3">
      <div className="text-black text-2xl">
        <span className="font-bold">KiiT</span> Sync
      </div>
      <div>
        <Image src="/Ksac_Logo.png" alt="" width={70} height={70} />
      </div>
    </div>
  );
};

export default Navbar;
