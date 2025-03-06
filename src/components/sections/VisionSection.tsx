import React from "react";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-white/40 before:z-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/10 after:to-black/30" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-34 bg-gradient-b from-white to-transparent dark:bg-gradient-to-b dark:from-black dark:to-transparent" />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <div className="bg-gray-100 dark:bg-[#404040] py-1 px-2 rounded-lg">
              <small className="text-sm leading-none dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Standards
              </small>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl md:text-center font-bold text-gray-900 dark:text-white">
              The Fuel for{" "}
              <span className="gradient-text-new text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Vision
              </span>
            </h2>
            <p className="text-gray-600 dark:text-slate-200 text-center mt-4 max-w-2xl mx-auto">
              Driven by vision, we provide comprehensive solutions to meet all
              your hiring needs.
            </p>
          </div>

          <div className="inline-flex bg-gradient-to-br border border-white/10 from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-full p-1 shadow-md mb-16 hover:scale-x-[1.01] transition-transform duration-200 max-sm:hidden">
            <button className="px-6 py-2 rounded-full relative z-10 cursor-pointer transition-colors duration-200 text-black">
              <span className="relative z-10">Ambition</span>
              <div className="absolute inset-0 bg-white rounded-full shadow-sm" />
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 dark:hover:text-slate-300 transition-colors duration-200 cursor-pointer">
              Satisfaction
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 dark:hover:text-slate-300 transition-colors duration-200 cursor-pointer">
              Integrity
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 dark:hover:text-slate-300 transition-colors duration-200 cursor-pointer">
              Vigilance
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br border border-white/10 from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white">
                Connecting Talent and Opportunity
              </h2>
              <p className="text-xl text-gray-800 dark:text-gray-200">
                Ambition
              </p>
              <p className="text-gray-600">
                Hiring doesn&apos;t have to be a painful guessing game.
                We&apos;re bridging the gap between recruiters and software
                engineers through our platform, where talent and opportunity
                finally meet, creating the perfect match.
              </p>
              <ul className="list-none space-y-4 text-gray-800 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="text-lg text-purple-500">✧</span>
                  Connect skilled developers with ideal roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg text-purple-500">✧</span>
                  Streamline tech recruitment process
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg text-purple-500">✧</span>
                  Create optimal candidate-company matches
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/images/ambition.jpg"
                alt="Ambition illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
