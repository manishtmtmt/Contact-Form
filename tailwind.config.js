/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "system-ui", "sans-serif"],
      },
    },
    colors: {
      ["light-green"]: "hsl(var(--color-light-green))",
      ["medium-green"]: "hsl(var(--color-medium-green))",
      red: "hsl(var(--color-red))",
      white: "hsl(var(--color-white))",
      ["medium-grey"]: "hsl(var(--color-medium-grey))",
      ["dark-grey"]: "hsl(var(--color-dark-grey))",
    },
  },
  plugins: [],
};
