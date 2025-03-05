"use client";
import { RainbowButton } from "../ui/RainbowButton";
import { WorldMap } from "../ui/WorldMap";
import GradientText from "../ui/GradientText";
import { HiArrowRight } from "react-icons/hi";

export default function WorldSection() {
  return (
    <section className="relative min-h-screen">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0">
        <WorldMap
          dots={[
            {
              start: { lat: 61.2176, lng: -149.9003, label: "Alaska" },
              end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
            },
            {
              start: { lat: 61.2176, lng: -149.9003, label: "Alaska" },
              end: { lat: -15.7801, lng: -47.9292, label: "Brazil" },
            },
            {
              start: { lat: 38.7223, lng: -9.1393, label: "Lisbon" },
              end: { lat: -15.7801, lng: -47.9292, label: "Brazil" },
            },
            {
              start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
              end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
            },
            {
              start: { lat: 51.5074, lng: -0.1278, label: "" },
              end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
            },
            {
              start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
              end: { lat: 43.1155, lng: 131.8855, label: "Vladivostok" },
            },
          ]}
          lineColor="#00B4FF"
        />
      </div>

      {/* Card Container */}
      <div className="flex justify-center items-center h-screen px-4 relative z-10">
        <div
          className="border border-gradient max-w-3xl group rounded-3xl px-6 sm:px-10 md:px-12 py-16 sm:py-20 md:py-24 
             overflow-hidden w-full mx-auto relative bg-black/40 dark:bg-black/20"
        >
          <div className="absolute -top-4 -right-2 w-48 h-48 transition-transform duration-200 group-hover:scale-105 md:w-44 md:h-44 translate-x-1/4 -translate-y-1/4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute right-4 top-8 w-3 h-3 bg-[#f6c436] rounded-full" />
                <div className="absolute right-12 top-4 w-2 h-2 bg-[#5bb2f6] rounded-full" />
                <div className="absolute right-8 bottom-8 w-4 h-4 bg-green-300 rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-b from-[#ec0bc8] via-[#5bb2f6] to-white rounded-2xl shadow-lg transform rotate-12 relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#f6c436] rounded-t-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center text-center gap-4 sm:gap-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-tight">
              <span className="text-slate-900 dark:text-white">Join Our</span>
              <GradientText
                className="ml-2"
                colors={["#EC4899", "#F59E0B", "#8B5CF6"]}
              >
                Mission
              </GradientText>
            </h2>

            <p className="text-lg sm:text-xl md:text-xl text-gray-600">
              Help us reimagine the future of hiring in the tech industry.
            </p>

            <RainbowButton className="mt-4 opacity-80 hover:scale-[1.015] transition-transform">
              Start Here
              <HiArrowRight className="ml-2 inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </RainbowButton>
          </div>

          <div className="absolute -inset-[2px] rounded-3xl border border-gradient backdrop-blur-xs -z-10" />
        </div>
      </div>
    </section>
  );
}
