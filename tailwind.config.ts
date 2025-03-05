import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundClip: {
        text: "text",
      },
      colors: {
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      // Add color variables
      const allColors = flattenColorPalette(theme("colors"));
      const colorVariables = Object.fromEntries(
        Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
      );

      addBase({
        ":root": colorVariables as { [key: string]: string },
      });
    }),
    plugin(function ({ addUtilities }) {
      // Add gradient border utilities
      addUtilities({
        ".border-gradient": {
          borderImage: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
          borderImageSlice: "1",
          borderWidth: "2px",
          borderStyle: "solid",
        },
        ".border-gradient-to-r": {
          borderImage:
            "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
          borderImageSlice: "1",
        },
      });
    }),
  ],
};

export default config;
