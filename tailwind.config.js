/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.25)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.25)",
        },
      });
    },
  ],
};
// module.exports = {
//   theme: {
//     screens: {
//       sm: "560px",

//       md: "760px",

//       lg: "960px",

//       xl: "1160px",
//     },
//   },
// };
