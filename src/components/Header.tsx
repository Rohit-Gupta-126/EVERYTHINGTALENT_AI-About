import Image from "next/image";
import {
  HiChevronDown,
  HiOutlineChevronRight,
  HiArrowRight,
} from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import ThemeToggle from "../components/ThemeToggle";
import { RainbowButton } from "./ui/RainbowButton";

interface HeaderProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 py-1">
      <div className="flex items-center justify-evenly gap-x-60 px-4">
        {/* Left Container */}
        <div className="flex items-center space-x-5 rounded-lg border-2 border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={32}
            height={32}
            className="h-auto object-cover"
            priority
          />
          <span className="text-gray-600 scale-125">|</span>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
            <div className="relative group">
              <a href="#" className="flex items-center hover:text-gray-300">
                Solutions
                <HiChevronDown className="ml-1 mt-[2px]" />
              </a>
            </div>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Blog
            </a>
            <a href="#" className="hover:text-gray-300">
              Support
            </a>
            <a href="#" className="text-purple-400 font-bold">
              About
            </a>
          </nav>
        </div>

        {/* Right Container */}
        <div className="flex items-center space-x-4 rounded-lg border-2 border-white/20 backdrop-blur-sm px-1 animate-fade-in-left">
          <RainbowButton className="hidden md:flex relative group h-10 w-48 invert-100 overflow-hidden rounded-lg bg-black/80 border border-transparent text-white transition-transform hover:scale-105">
            <div className="absolute rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Button Content */}
            <div className="relative z-10 flex items-center rounded-lg">
              <span className="text-sm cursor-pointer font-medium">
                Request a Demo
              </span>
              <HiOutlineChevronRight />
            </div>
          </RainbowButton>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} setTheme={setTheme} />

          {/* Login Button */}
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100"
          >
            Login
            <HiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
}
