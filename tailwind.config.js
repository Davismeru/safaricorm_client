/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-62": "linear-gradient(62deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
