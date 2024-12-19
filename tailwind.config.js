/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      hero: "Proxima Nova",
      garamond: ['"EB Garamond"', "serif"],
    },
    colors: {
      background: "#99ABB9",
      santafe: "#B37856",
      quincy: "#60402B",
      costa: "#58602B",
      oxford: "#3D455C",
      warmyellow: "#EEC61F",
      seablue: "#5fd0ff",
    },
    extend: {
      backgroundImage: {
        mountains: "url('images/mountains.jpg')",
      },
    },
  },
  plugins: [],
};
