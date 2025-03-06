"use client";
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
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <main>
        <div className="relative">
          <Header />
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
