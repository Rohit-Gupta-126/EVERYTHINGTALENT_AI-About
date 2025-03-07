import Image from "next/image";
import { useState } from "react";
import {
  HiOutlineChevronRight,
  HiArrowRight,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { ThemeDropdown } from "./ThemeDropdown";
import { RainbowButton } from "./ui/RainbowButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "Solutions v", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
    { name: "About", href: "#", isHighlighted: true },
  ];

  return (
    <header className="sticky top-0 z-50 py-1 bg-transparent">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-evenly gap-x-6 lg:gap-x-40 xl:gap-x-60 px-4">
        {/* Left Container */}
        <div className="hidden lg:flex items-center space-x-4 rounded-lg border-2 border-slate-700/30 dark:border-slate-300/30 px-3 py-1.5 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm hover:backdrop-blur-none -ml-4">
          <div className="flex items-center space-x-5 ml-1">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={32}
              height={32}
              className="h-auto object-cover"
              priority
            />
            <div className="h-8 w-px bg-slate-300/80 dark:bg-white/20" />
          </div>

          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-8 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isHighlighted
                    ? "text-[#8B5CF6] dark:text-[#c166ee] font-semibold hover:text-[#7c4dff] dark:hover:text-[#d68cff]"
                    : "text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Container */}
        <div className="flex items-center space-x-3 rounded-lg border-2 border-slate-400/60 dark:border-white/30 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm animate-fade-in-left -pt-1">
          <RainbowButton className="h-10 w-36 lg:w-44 invert-100 dark:invert-100 bg-black/70 hover:scale-[1.015] transition-transform">
            <div className="relative z-10 flex items-center rounded-lg space-x-1">
              <span className="text-sm text-white dark:text-black cursor-pointer font-medium">
                Request a Demo
              </span>
              <HiOutlineChevronRight className="scale-125 text-white dark:text-black" />
            </div>
          </RainbowButton>

          <ThemeDropdown />

          <RainbowButton className="mr-1 h-10 w-20 lg:w-24 invert-100 dark:invert-0 hover:scale-[1.015] transition-transform">
            <div className="relative z-10 flex items-center rounded-lg">
              <span className="text-sm text-white dark:text-black cursor-pointer font-medium">
                Login
              </span>
              <HiArrowRight className="ml-1 text-white dark:text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </RainbowButton>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden flex justify-between items-center w-full px-4">
        {/* Left Container */}
        <div className="flex items-center space-x-2 rounded-lg border-2 border-slate-700/30 dark:border-slate-300/30 px-4 py-1.5 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={32}
            height={32}
            className="h-auto object-cover"
            priority
          />
          <span className="font-bold text-slate-900 dark:text-slate-100">
            Everything Talent
          </span>
        </div>

        {/* Right Container */}
        <div className="flex items-center gap-x-4">
          <div className="md:hidden">
            <ThemeDropdown />
          </div>

          <div className="hidden md:flex items-center space-x-4 rounded-lg border-2 border-slate-400/60 dark:border-white/30 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm px-4 py-1.5">
            <ThemeDropdown />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-slate-900 dark:text-slate-100 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown from Top */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Container */}
          <div className="relative w-full top-0 bg-white dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800">
            <div className="flex justify-end p-4">
              <button
                className="text-slate-900 dark:text-slate-100 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-4 px-6 pb-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-lg ${
                    item.isHighlighted
                      ? "text-[#8B5CF6] dark:text-[#c166ee] font-semibold"
                      : "text-slate-900 dark:text-slate-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Login Button */}
              <div className="pt-4">
                <RainbowButton className="w-full h-12 invert-100 dark:invert-0 hover:scale-[1.015] transition-transform">
                  <div className="relative z-10 flex items-center justify-center rounded-lg space-x-2">
                    <span className="text-sm text-white dark:text-black cursor-pointer font-medium">
                      Login
                    </span>
                    <HiArrowRight className="text-white dark:text-black" />
                  </div>
                </RainbowButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}