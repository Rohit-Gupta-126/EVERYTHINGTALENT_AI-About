import React from "react";
import Image from "next/image";
import { FiUsers, FiPocket } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

export default function StorySection() {
  const features = [
    {
      title: "AI-Powered",
      description: "Advanced AI/ML algorithms for precise matching",
      icon: <FaBrain className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Human-Centric",
      description: "Built by recruiters, for recruiters",
      icon: <FiUsers className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Skill Assessment",
      description: "Comprehensive skill evaluation system",
      icon: <FaGraduationCap className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Future-Ready",
      description: "Constantly evolving with industry needs",
      icon: <FiPocket className="mb-3 h-6 w-6 text-purple-400" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-28 mx-auto">
      <div className="pointer-events-none absolute inset-y-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-to-b from-white dark:from-[#09090b]" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-black" />

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-350/30 to-transparent opacity-20 blur-2xl -z-10" />
        <div className="absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-350/30 to-transparent opacity-20 blur-2xl -z-10" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="flex flex-col lg:flex-row lg:gap-20 gap-12">
          <div className="lg:w-1/2 relative">
            <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
              The <span className="gradient-text">Story</span> Behind Us
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              It all started with one question: What if hiring didn't have to
              feel like gambling on a hunch?
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-white/20 bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 p-4 md:p-6 transition-all duration-300 shadow-xl z-10"
                >
                  <div className="absolute -inset-[1px] border border-gradient rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                  <div className="relative z-10">
                    {feature.icon}
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white z-10">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 z-10">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-[500px] w-full transition-transform duration-300 hover:scale-x-[1.015] overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src="https://www.everythingtalent.ai/assets/about-us/our-story.svg"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
