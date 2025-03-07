import React, { useState } from "react";
import Image from "next/image";

type TabKey = "Ambition" | "Satisfaction" | "Integrity" | "Vigilance";

interface TabContent {
  heading: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
}

export default function VisionSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Ambition");

  const tabsContent: Record<TabKey, TabContent> = {
    Ambition: {
      heading: "Connecting Talent and Opportunity",
      subtitle: "Ambition",
      description:
        "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
      bullets: [
        "Connect skilled developers with ideal roles",
        "Streamline tech recruitment process",
        "Create optimal candidate-company matches",
      ],
      image: "/images/ambition.jpg",
    },
    Satisfaction: {
      heading: "Partnering for Success",
      subtitle: "Satisfaction",
      description:
        "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
      bullets: [
        "Dedicated partnership for hiring success",
        "Fuel company growth through talent",
        "Drive tech innovation through matching",
      ],
      image: "/images/Satisfaction.avif",
    },
    Integrity: {
      heading: "Building Trust in Hiring",
      subtitle: "Integrity",
      description:
        "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
      bullets: [
        "Build hiring confidence through transparency",
        "Prioritize trust in recruitment process",
        "Foster honest candidate-employer relationships",
      ],
      image: "/images/Integrity.webp",
    },
    Vigilance: {
      heading: "Security-Driven Solutions",
      subtitle: "Vigilance",
      description:
        "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
      bullets: [
        "Prioritize end-to-end platform security",
        "Ensure protected recruitment experience",
        "Build confidence through data protection",
      ],
      image: "/images/Vigilance.jpg",
    },
  };

  return (
    <section
      id="vision"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0">
        <div className="h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-white/40 before:z-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/10 after:to-black/30" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-black dark:to-transparent" />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <div className="bg-gray-100 dark:bg-[#404040] py-1 px-2 rounded-lg">
              <small className="text-sm leading-none dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Standards
              </small>
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              The Fuel for{" "}
              <span className="gradient-text-new text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Vision
              </span>
            </h2>
            <p className="text-gray-600 dark:text-slate-200 text-center mt-4 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base">
              Driven by vision, we provide comprehensive solutions to meet all
              your hiring needs.
            </p>
          </div>

          <div className="inline-flex flex-wrap justify-center gap-2 cursor-pointer bg-gradient-to-br border border-white/10 from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-full p-1 shadow-md mb-8 md:mb-16 hover:scale-x-[1.01] transition-transform duration-200">
            {Object.keys(tabsContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabKey)}
                className={`px-4 md:px-6 py-2 rounded-full cursor-pointer relative z-10 transition-colors duration-200 text-sm md:text-base ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-900 dark:hover:text-slate-300"
                }`}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-white rounded-full shadow-sm" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:grid bg-gradient-to-br border border-white/10 from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-6 md:p-8 lg:p-16 transition-transform duration-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white">
                {tabsContent[activeTab].heading}
              </h2>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200">
                {tabsContent[activeTab].subtitle}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {tabsContent[activeTab].description}
              </p>
              <ul className="list-none space-y-3 md:space-y-4 text-gray-800 dark:text-gray-200">
                {tabsContent[activeTab].bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="text-lg text-purple-500">✧</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src={tabsContent[activeTab].image}
                alt={`${tabsContent[activeTab].subtitle} illustration`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden grid gap-6">
          {Object.entries(tabsContent).map(([tabKey, tabContent]) => (
            <div
              key={tabKey}
              className="bg-gradient-to-br border border-white/10 from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-6 transition-transform duration-200"
            >
              <div className="grid grid-cols-1 gap-6 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                    {tabContent.heading}
                  </h2>
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    {tabContent.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {tabContent.description}
                  </p>
                  <ul className="list-none space-y-3 text-gray-800 dark:text-gray-200">
                    {tabContent.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-lg text-purple-500">✧</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden border border-gray-800">
                  <Image
                    src={tabContent.image}
                    alt={`${tabContent.subtitle} illustration`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}