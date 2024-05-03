/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      outline: {
      },
      colors: {
        customColor: "#25273D",
        customColor2: "rgba(118, 121, 146, 1)",
        customColor3: "#494C6B",
        customColor4: "#9495A5",
        customColor5: "#3A7CFD",
        customColor6: "#393A4B",
        customColor7: "#C8CBE7",
        customColor8: "#4D5067",
        background: "#14131B",
        background2: "#08070B",
        background3: "#E3E4F1",
        background4: "#55DDFF",
        background5: "#C058F3",
      },

      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0 0 2px rgba(227, 228, 241, 0.6)",
        customColor2: "0 0 0 2px rgba(57, 58, 75, 1)",
      },
    },
  },
  plugins: [],
};
