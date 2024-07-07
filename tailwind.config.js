/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {
      sm: "640px",
      md: "740px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {},
  },
  plugins: [],
};
