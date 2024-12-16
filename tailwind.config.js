/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#99ABB9",
      santafe: "#B37856",
      quincy: "#60402B",
      costa: "#58602B",
      oxford: "#3D455C",
    },
    extend: {
      backgroundImage: {
        mountains: "url('images/mountains.jpg')",
      },
    },
  },
  plugins: [],
};
