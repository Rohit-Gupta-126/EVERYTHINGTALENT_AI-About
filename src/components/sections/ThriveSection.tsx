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
    <section className="relative overflow-hidden py-28 mx-auto">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10" />
        <div className="absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="flex flex-row lg:gap-20 gap-12 lg:flex-row-reverse">
          {/* Right Content */}
          <div className="lg:w-1/2 relative">
            <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
              <GradientText>How We Thrive</GradientText>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At Everything Talent, we break the norm. Driven by community, we
              empower individuals to innovate, learn, and push
              boundaries—fostering shared growth and a relentless pursuit of
              excellence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%]"
                >
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

          {/* Left Image */}
          <div className="lg:w-1/2 relative">
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
        </div>
      </div>
    </section>
  );
}