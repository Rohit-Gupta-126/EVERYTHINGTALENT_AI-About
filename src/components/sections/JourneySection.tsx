import React from "react";
import Image from "next/image";
import GradientText from "../ui/GradientText";
import { RainbowButton } from "../ui/RainbowButton";
import { GrMail } from "react-icons/gr";

export default function JourneySection() {
  const milestones = [
    {
      year: "2024",
      title: "Everything AI 2.0",
      imageUrl:
        "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
      description:
        "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
      stats: [
        { value: "50K+", label: "users" },
        { value: "98%", label: "accuracy" },
        { value: "2x faster", label: "processing" },
      ],
    },
    {
      year: "2023",
      title: "ML Integration",
      imageUrl:
        "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1280&q=75",
      description:
        "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
      stats: [
        { value: "+30%", label: "accuracy" },
        { value: "15+", label: "integrations" },
        { value: "25K+", label: "users" },
      ],
    },
    {
      year: "2022",
      title: "The Beginning",
      imageUrl:
        "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1280&q=75",
      description:
        "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
      stats: [
        { value: "10+", label: "features" },
        { value: "1M+", label: "data processed" },
        { value: "1K+", label: "clients" },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 bg-white dark:bg-slate-950 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-full">
            <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
              <span className="text-sm leading-none dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Values & Milestones
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 mt-4">
            Our <GradientText>Journey</GradientText>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Explore the milestones that have shaped our path to innovation,
            where every step brings us closer to transforming the future.
          </p>

          <RainbowButton className="hover:scale-[1.035] transform transition-transform">
            <span className="flex items-center gap-2 text-white dark:text-black">
              Subscribe to Updates
              <GrMail className="w-4 h-4 text-white dark:text-black" />
            </span>
          </RainbowButton>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-24 space-y-12 md:space-y-16 lg:space-y-24">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center justify-center sticky top-12 lg:top-28 px-4"
            >
              <div className="flex flex-col relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-8xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950">
                <div className="flex flex-col md:flex-row h-full p-6 md:p-8 gap-8 md:gap-12">
                  <div className="w-full md:w-[45%] space-y-4 md:space-y-6">
                    <div>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {milestone.title}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mt-1">
                        {milestone.year}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                      {milestone.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="p-3 md:p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        >
                          <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {stat.value}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-full md:w-[85%] h-full rounded-xl overflow-hidden hidden md:block">
                    <div className="w-full h-full relative">
                      <Image
                        src={milestone.imageUrl}
                        alt={`${milestone.year} illustration`}
                        fill
                        className="object-cover"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}