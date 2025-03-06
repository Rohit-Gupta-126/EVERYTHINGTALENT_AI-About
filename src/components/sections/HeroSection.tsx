import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { RainbowButton } from "../ui/RainbowButton";

export default function HeroSection() {
  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      {/* Animated circular borders */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-black/20 dark:border-white/10 rounded-full animate-[spin_25s_linear_infinite]" />
      </div>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-18 lg:pt-24 mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-16 lg:gap-4">
            {/* Left Content */}
            <div className="relative">
              <div className="space-y-8">
                <p className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-black dark:text-white tracking-wider">
                  ABOUT US
                </p>
                <h1 className="text-5xl max-sm:text-4xl font-bold leading-[60px] max-sm:leading-[50px] max-w-[600px]">
                  Shaping the Next Generation of HR{" "}
                  <span className="gradient-text-new text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Tech Recruitment.
                  </span>
                </h1>
                <p className="text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
                  At Everything Talent, we help you launch your recruitment into
                  a new dimension.
                </p>

                {/* Gradient Button */}
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <a className="md:w-fit" href="#">
                    <RainbowButton className="hover:scale-[1.015] transition-transform">
                      <span className="text-white dark:text-black">Start for Free Today</span>
                      <HiArrowRight className="ml-2 inline-block w-5 h-5 text-white dark:text-black group-hover:translate-x-1 transition-transform" />
                    </RainbowButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[520px] w-full max-w-[520px] flex justify-center items-center animate-fade-in-top">
              <div className="absolute -right-20 md:-right-24 -top-20 h-[300px] w-[480px] md:h-[600px] md:w-[780px] rounded-full bg-blue-500/20 blur-3xl" />
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
