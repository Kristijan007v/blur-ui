/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Blue colors
        "primary-blue": "#0072f5",

        //Gray colors
        "primary-gray": "#26292b",
        "secondary-gray": "#737a80",
      },
    },
  },
  plugins: [],
};
