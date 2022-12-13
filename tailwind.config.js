/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        smGrid: "grid-template-columns: 0.5fr, 3fr",
        mdGrid: "grid-template-columns: max-content, max-content, max-content",
      },
    },
  },
  plugins: [],
};
