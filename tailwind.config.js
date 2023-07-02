/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#354649",
        secondary: "#6C7A89",
        tertiary: "#A3C6C4",
        quaternary: "#E0E7E9",
      },
    },
  },
  plugins: [],
};
