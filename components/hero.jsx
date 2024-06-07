import Image from "next/image";
import HeroCard from "./heroCard";

const Hero = () => {
  const users = [{user:"Students",img: "/Students.png" },{user:"Teachers",img: "/Teachers.png" }]

  return (
    <div className="h-52 flex justify-between items-center px-8">
      {users.map((value, index) => (
        <HeroCard key={index} item={value} />
      ))}
    </div>
  );
};

export default Hero;
