/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      fontFamily: { outfit: ["Outfit", "sans-serif"] },
      fontWeight: {
        semibold: 500,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
