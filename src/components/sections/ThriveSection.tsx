import React from "react";
import Image from "next/image";
import {
  UsersRound,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Award,
} from "lucide-react";
import GradientText from "../ui/GradientText";

export default function ThriveSection() {
  const principles = [
    {
      title: "Community-Driven",
      description:
        "We build strong connections and foster collaboration within our team.",
      icon: <UsersRound className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Innovation First",
      description:
        "We encourage creative thinking and novel approaches to challenges.",
      icon: <Lightbulb className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Action Oriented",
      description:
        "We transform ideas into tangible results through decisive action.",
      icon: <Rocket className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Continuous Growth",
      description: "We embrace learning and development as core principles.",
      icon: <TrendingUp className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Excellence Pursuit",
      description: "We strive for exceptional quality in everything we do.",
      icon: <Star className="mb-3 h-6 w-6 text-purple-400" />,
    },
    {
      title: "Shared Success",
      description: "We celebrate achievements and grow together as one team.",
      icon: <Award className="mb-3 h-6 w-6 text-purple-400" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28 mx-auto">
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-b from-white to-transparent dark:bg-gradient-to-b dark:from-black dark:to-transparent" />
      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="absolute left-[20px] md:left-[50px] top-0 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10" />
        <div className="absolute right-[20px] md:right-[50px] top-0 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10" />
        <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 h-48 w-48 md:h-80 md:w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 h-48 w-48 md:h-80 md:w-80 rounded-full bg-blue-500/10 blur-3xl" />
        
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20 gap-8">
          {/* Left Part */}
          <div className="lg:w-1/2 relative max-sm:hidden">
            <div className="relative transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl h-full">
              <Image
                src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=1400&q=75"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
            </div>
          </div>

          {/* Right Part */}
          <div className="lg:w-1/2 relative">
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white">
              <GradientText>How We Thrive</GradientText>
            </h2>
            <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At Everything Talent, we break the norm. Driven by community, we
              empower individuals to innovate, learn, and push
              boundaries—fostering shared growth and a relentless pursuit of
              excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl dark:border-gray-700 bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:bg-purple-600 dark:bg-gray-900 backdrop-blur-sm p-4 md:p-6 hover:scale-[101%] transition-all duration-200 shadow-xl z-10"
                >
                  <div className="absolute -inset-[2px] border border-gradient rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                  {principle.icon}
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}