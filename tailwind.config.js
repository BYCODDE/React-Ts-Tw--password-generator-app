/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      outline: {
      },
      colors: {
        customColor: "#817D92",
        customColor2: "#817D92",
        customColor3: "#E6E5EA",
        customColor4: "#A4FFAF",
        customColor5: "#3A7CFD",
        customColor6: "#393A4B",
        customColor7: "#C8CBE7",
        customColor8: "#4D5067",
        background: "#14131B",
        background2: "#08070B",
        background3: "#24232C",
        background4: "#55DDFF",
        background5: "#C058F3",
      },

      fontFamily: {
        'jetbrains-mono': ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        custom: "0 0 0 2px rgba(227, 228, 241, 0.6)",
        customColor2: "0 0 0 2px rgba(57, 58, 75, 1)",
      },
    },
  },
  plugins: [],
};
