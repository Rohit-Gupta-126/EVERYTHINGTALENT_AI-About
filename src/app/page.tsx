"use client";
import { useTheme } from "next-themes";
import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import VisionSection from "../components/sections/VisionSection";
import StorySection from "../components/sections/StorySection";
import PhilosophySection from "../components/sections/PhilosophySection";
import ThriveSection from "../components/sections/ThriveSection";
import JourneySection from "../components/sections/JourneySection";
import WorldSection from "../components/sections/WorldSection";
import Footer from "../components/Footer";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <div className="relative">
          <Header theme={theme} setTheme={setTheme} />
          <HeroSection />
          <VisionSection />
          <StorySection />
          <PhilosophySection />
          <ThriveSection />
          <JourneySection />
          <WorldSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}