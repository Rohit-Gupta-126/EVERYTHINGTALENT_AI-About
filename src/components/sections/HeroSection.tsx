import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { RainbowButton } from "../ui/RainbowButton";

export default function HeroSection() {
  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      {/* Animated circular borders */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border border-black/20 dark:border-white/10 rounded-full animate-[spin_25s_linear_infinite]" />
      </div>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24 mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="relative w-full lg:w-1/2">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <p className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-black dark:text-white tracking-wider">
                  ABOUT US
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] max-w-[600px]">
                  Shaping the Next Generation of HR{" "}
                  <span className="gradient-text-new text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Tech Recruitment.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
                  At Everything Talent, we help you launch your recruitment into
                  a new dimension.
                </p>

                {/* Gradient Button */}
                <div className="flex flex-col sm:flex-row gap-4 p-1">
                  <a
                    className="md:w-fit hover:scale-[1.02] transition-transform"
                    href="#"
                  >
                    <div className="rounded-lg background-gradient p-0.5">
                      <RainbowButton className="text-sm px-6">
                        <span className="text-white dark:text-black">
                          Start for Free Today
                        </span>
                        <HiArrowRight className="ml-2 inline-block w-5 h-5 text-white dark:text-black group-hover:translate-x-1 transition-transform" />
                      </RainbowButton>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[520px] w-full max-w-[90%] lg:max-w-[520px] flex justify-center items-center animate-fade-in-top overflow-hidden">
              <div className="absolute -right-16 md:-right-24 -top-16 h-[200px] w-[380px] md:h-[500px] md:w-[680px] rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative w-full h-full p-[5px] rounded-2xl bg-gradient-to-tr from-blue-400 via-purple-500 to-yellow-400 transition-transform hover:scale-[1.01]">
                <div className="relative w-full h-full rounded-[12px] overflow-hidden border-2 border-white/10">
                  <Image
                    src="/images/slide1.webp"
                    alt="Enhance hiring with AI-powered assessments and tracking"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
