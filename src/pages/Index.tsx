import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCases from "@/components/FeaturedCases";
import GrenadeSection from "@/components/GrenadeSection";

const Index = () => {
  const [pigCoins, setPigCoins] = useState(2450);

  return (
    <div className="min-h-screen">
      <Header pigCoins={pigCoins} />
      <HeroSection />
      <FeaturedCases />
      <GrenadeSection pigCoins={pigCoins} setPigCoins={setPigCoins} />
    </div>
  );
};

export default Index;
