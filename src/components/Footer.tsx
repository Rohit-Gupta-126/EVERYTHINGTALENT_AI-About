import React from "react";
import Image from "next/image";
import GradientText from "../components/ui/GradientText";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const opacities = [1, 0.4, 0.2, 0.15, 0.1, 0.05, 0.02];

  return (
    <footer className="relative py-4 sm:py-6 bg-black overflow-hidden">
      <section className="mx-auto">
        <div className="px-4 lg:px-24 md:pt-16 pb-10 flex flex-col gap-4 md:gap-[15px]">
          <div className="lg:flex md:gap-24 lg:gap-48">
            {/* Logo & Social Section */}
            <div className="max-w-72 mb-8 md:mb-0 mx-auto text-center lg:text-left lg:mx-0">
              <div className="mx-auto lg:-ml-1 h-32 w-32 md:h-40 md:w-40 mb-6 relative">
                <Image
                  alt="Everything Talent Logo"
                  src="/images/logo.webp"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl md:text-3xl font-semibold text-white block">
                Everything Talent
              </span>
              <h2 className="text-xs md:text-sm font-semibold text-gray-400 mt-2">
                Enhancing Hiring with AI-powered assessment and tracking for
                accurate recruitment
              </h2>

              <div className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-6 mt-4 md:mt-6">
                <a
                  href="https://twitter.com/EVRYTNGTALENT"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/company/everything-talent-ai"
                  target="_blank"
                  rel="noopener"
                >
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://youtube.com/channel/UCK5H3HNz_5gtZkFDBG2ar1A"
                  target="_blank"
                  rel="noopener"
                >
                  <FaYoutube className="w-6 h-6 md:w-7 md:h-7 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://facebook.com/EVRYTNGTALENT"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebook className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-28 mt-8">
              <div>
                <h2 className="mb-4 md:mb-6 text-xs md:text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-400 space-y-2 md:space-y-4">
                  {[
                    "Blogs",
                    "Success Stories",
                    "Case Studies",
                    "Whitepapers",
                    "FAQs",
                    "Hiring Guides",
                    "Support",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:underline text-xs md:text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 md:mb-6 text-xs md:text-sm font-semibold uppercase text-white">
                  Get Started
                </h2>
                <ul className="text-gray-400 space-y-2 md:space-y-4">
                  {[
                    "Pricing",
                    "Hiring Solutions",
                    "Funded Startups",
                    "Free Trial",
                    "Contact Support",
                    "Request Demo",
                    "Trust",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:underline text-xs md:text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 md:mb-6 text-xs md:text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 space-y-2 md:space-y-4">
                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookie Policy",
                    "CCPA Compliance",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:underline text-xs md:text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image Section */}
        <section className="relative">
          <div className="relative h-[150px] sm:h-[250px] md:h-[350px] w-full">
            <Image
              alt="San Francisco skyline"
              src="/images/bottom_san_fransisco_skyline.webp"
              fill
              className="object-fit opacity-60"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-black" />
            <div className="h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-black" />
          </div>
        </section>

        {/* Gradient Text Overlay */}
        <div className="absolute bottom-20 md:bottom-40 lg:bottom-70 right-4 md:right-20 max-sm:hidden">
          <div className="w-[300px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[600px] lg:h-[300px] flex items-center justify-center">
            {opacities.map((opacity, idx) => (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 7 - idx }}
              >
                <GradientText
                  colors={["#B11AFF", "#FF689F"]}
                  className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-transparent bg-clip-text select-none"
                  style={{ opacity }}
                >
                  EVERYTHINGTALENT.AI
                </GradientText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="mx-auto container px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 text-center">
          <span className="text-xs md:text-sm text-gray-400">
            © 2025{" "}
            <a
              href="https://everythingtalent.ai"
              className="hover:underline"
              target="_blank"
              rel="noopener"
            >
              Everything Talent Labs, LLC
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </section>
    </footer>
  );
}