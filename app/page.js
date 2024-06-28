import Navbar from "./components/Navbar";
import GradientItems from "./components/GradientItems";
import Hero from "./components/Hero";
import Features from "./components/features/feature";
import Footer from "./components/Footer";
import ContributorSection from "./components/Contributor/contributorSection";
export default function Home() {
  return (
    <>
      <Navbar/>
      <GradientItems />
      <Hero />
      <Features />
      <ContributorSection />
      <Footer />
    </>
  );
}
