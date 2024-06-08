import HomeBody from "@/components/HomeBody";
import WelcomeMsg from "@/components/Welcomemsg";
import Hero from "@/components/hero";
import HomeContributors from "@/components/homeContibutors";

const Home = () => {
  return (
    <div>
      <WelcomeMsg/>
      <Hero />
      <HomeBody/>
      <HomeContributors/>
    </div>
  );
};

export default Home;
