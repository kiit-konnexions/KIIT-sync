import Image from "next/image";
import HeroCard from "./heroCard";

const Hero = () => {
  const users = [
    { user: "Students", img: "/Students.png" },
    { user: "Teachers", img: "/Teachers.png" },
  ];

  return (
    <>
    {/* for small and medium */}
    <div className="h-52 flex justify-between md:justify-around lg:hidden items-center px-8">
      {users.map((value, index) => (
        <HeroCard key={index} item={value} />
      ))}
    </div>
    {/* for large */}
    <div className="h-52 lg:flex  md:hidden items-center px-8 hidden">
      {users.map((value, index) => (
        <HeroCard key={index} item={value} />
      ))}
    </div>

    </>
  );
};

export default Hero;
