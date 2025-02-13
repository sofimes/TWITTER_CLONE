import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      "dark",

      {
        black: {
          ...daisyUIThemes["black"],
          " primary": "rgb(29, 155, 240)",
          " secondary": "rgb(24, 24, 24)",
          " base-100": "#121212", // Background color (dark)
          "base-content": "#ffffff",
        },
      },
    ],
  },
};
