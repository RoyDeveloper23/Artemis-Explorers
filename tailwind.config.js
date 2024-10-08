/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],

  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        'custom-gray': '#f5f5f7',
      }
    },
  },
  plugins: [],
};
