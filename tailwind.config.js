/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d4a373",
          secondary: "#faedcd",
          neutral: "#112A46",
          "base-100": "#fefae0",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
