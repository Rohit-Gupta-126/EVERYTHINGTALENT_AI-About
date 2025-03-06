import React from "react";
import Image from "next/image";
import GradientText from "../components/ui/GradientText";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const opacities = [1, 0.4, 0.2, 0.15, 0.1, 0.05, 0.02];

  return (
    <footer className="relative py-4 sm:py-6 bg-black overflow-hidden">
      <section className="mx-auto">
        <div className="px-4 md:px-24 md:pt-16 pb-10 flex flex-col gap-[10px] md:gap-[15px]">
          <div className="lg:flex md:gap-48">
            {/* Logo & Social Section */}
            <div className="max-w-72 mb-8 md:mb-0 mx-auto text-center lg:text-left lg:mx-0">
              <div className="-ml-1 h-40 w-40 mb-6 relative mx-auto">
                <Image
                  alt="Everything Talent Logo"
                  src="/images/logo.webp"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-3xl font-semibold text-white block">
                Everything Talent
              </span>
              <h2 className="text-sm font-semibold text-gray-400 mt-2">
                Enhancing Hiring with AI-powered assessment and tracking for
                accurate recruitment
              </h2>

              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-6">
                <a
                  href="https://twitter.com/EVRYTNGTALENT"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter className="w-6 h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/company/everything-talent-ai"
                  target="_blank"
                  rel="noopener"
                >
                  <FaLinkedin className="w-6 h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://youtube.com/channel/UCK5H3HNz_5gtZkFDBG2ar1A"
                  target="_blank"
                  rel="noopener"
                >
                  <FaYoutube className="w-7 h-7 text-white hover:text-gray-500 transition-colors" />
                </a>
                <a
                  href="https://facebook.com/EVRYTNGTALENT"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebook className="w-6 h-6 text-white hover:text-gray-500 transition-colors" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-28 sm:grid-cols-3 mt-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-400 space-y-4">
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
                      <a href="#" className="hover:underline text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Get Started
                </h2>
                <ul className="text-gray-400 space-y-4">
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
                      <a href="#" className="hover:underline text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 space-y-4">
                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookie Policy",
                    "CCPA Compliance",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline text-sm">
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
          <div className="relative h-[26rem] w-full">
            <Image
              alt="San Francisco skyline"
              src="/images/bottom_san_fransisco_skyline.webp"
              fill
              className="object-fill opacity-50"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-black" />
            <div className="h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-black" />
          </div>
        </section>

        {/* Gradient Text Overlay */}
        <div className="absolute bottom-70 max-lg:bottom-40 right-20 hidden sm:block">
          <div className="w-[600px] h-[300px] flex items-center justify-center">
            {opacities.map((opacity, idx) => (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 7 - idx }}
              >
                <GradientText
                  colors={["#B11AFF", "#FF689F"]}
                  className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text select-none"
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
      <section className="mx-auto md:container px-4 sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-center mt-6">
          <span className="text-sm text-gray-400">
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
