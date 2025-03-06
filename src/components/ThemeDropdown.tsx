import { useState, useEffect, useRef } from "react";
import { RiMoonLine, RiComputerLine } from "react-icons/ri";
import { GoSun } from "react-icons/go";
import { useTheme } from "./ThemeProvider";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="pt-1 rounded-lg">
        {theme === "light" ? (
          <GoSun className="w-6 h-6 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100" />
        ) : theme === "dark" ? (
          <RiMoonLine className="w-6 h-6 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100" />
        ) : (
          <RiComputerLine className="w-6 h-6 text-slate-600 dark:text-slate-300 opacity-60 hover:opacity-100" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white/40 dark:bg-black/50 border border-white/30 dark:border-black/20 rounded-lg shadow-lg p-2 backdrop-blur-lg space-y-2">
          <button
            onClick={() => setTheme("light")}
            className="flex items-center w-full px-4 py-2 text-sm text-slate-900 dark:text-slate-100 bg-slate-200/80 dark:bg-black/70 rounded-lg backdrop-blur-md group hover:border-gradient hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] transition-transform duration-200 shadow-lg"
          >
            <GoSun className="mr-2 w-4 h-4" />
            Light
            {theme === "light" && <span className="ml-auto">↗️</span>}
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center w-full px-4 py-2 text-sm text-slate-900 dark:text-slate-100 bg-slate-200/80 dark:bg-black/70 rounded-lg backdrop-blur-md group hover:border-gradient hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] transition-transform duration-200 shadow-lg"
          >
            <RiMoonLine className="mr-2 w-4 h-4" />
            Dark
            {theme === "dark" && <span className="ml-auto">↘️</span>}
          </button>
          <button
            onClick={() => setTheme("system")}
            className="flex items-center w-full px-4 py-2 text-sm text-slate-900 dark:text-slate-100 bg-slate-200/80 dark:bg-black/70 rounded-lg backdrop-blur-md group hover:border-gradient hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] transition-transform duration-200 shadow-lg"
          >
            <RiComputerLine className="mr-2 w-4 h-4" />
            System
            {theme === "system" && <span className="ml-auto">↘️</span>}
          </button>
        </div>
      )}
    </div>
  );
}
