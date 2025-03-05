import { RiMoonLine } from "react-icons/ri";
import { GoSun } from "react-icons/go";

interface ThemeToggleProps {
    theme: string | undefined;
    setTheme: (theme: string) => void;
  }
  
  export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    return (
      <button 
        className="p-2 rounded-full cursor-pointer"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <GoSun className="h-6 w-6" />
        ) : (
          <RiMoonLine className="h-6 w-6" />
        )}
      </button>
    );
  }