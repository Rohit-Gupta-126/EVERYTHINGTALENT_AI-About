import Image from "next/image";
import {
  HiChevronDown,
  HiOutlineChevronRight,
  HiArrowRight,
} from "react-icons/hi";
import { ThemeDropdown } from "./ThemeDropdown";
import { RainbowButton } from "./ui/RainbowButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-1 bg-transparent">
      <div className="flex items-center justify-evenly gap-x-60 px-4">
        {/* Left Container */}
        <div className="hidden lg:flex items-center space-x-5 rounded-lg border-2 border-slate-700/30 dark:border-slate-300/30 px-4 py-1.5 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm hover:backdrop-blur-none">
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

          <nav className="hidden md:flex items-center gap-x-8 text-sm">
            <a
              href="#"
              className="text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Products
            </a>
            <div className="flex items-center gap-1 text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Solutions
              <HiChevronDown className="w-4 h-4 mt-0.5 text-slate-400 dark:text-slate-500" />
            </div>
            <a
              href="#"
              className="text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="text-[#8B5CF6] dark:text-[#c166ee] font-semibold hover:text-[#7c4dff] dark:hover:text-[#d68cff]"
            >
              About
            </a>
          </nav>
        </div>

        {/* Right Container */}
        <div className="flex items-center space-x-4 rounded-lg border-2 border-slate-400/60 dark:border-white/30 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm animate-fade-in-left -pt-1">
          <RainbowButton className="h-10 w-44 invert-100 dark:invert-100 bg-black/70 hover:scale-[1.015] transition-transform">
            <div className="relative z-10 flex items-center rounded-lg space-x-1">
              <span className="text-sm text-white dark:text-black cursor-pointer font-medium">
                Request a Demo
              </span>
              <HiOutlineChevronRight className="scale-125 text-white dark:text-black"/>
            </div>
          </RainbowButton>

          <ThemeDropdown />

          <RainbowButton className="mr-1 h-10 w-24 invert-100 dark:invert-100 hover:scale-[1.015] transition-transform">
            <div className="relative z-10 flex items-center rounded-lg">
              <span className="text-sm text-white dark:text-black cursor-pointer font-medium">
                Login
              </span>
              <HiArrowRight className="ml-1 text-white dark:text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </RainbowButton>
        </div>
      </div>
    </header>
  );
}
