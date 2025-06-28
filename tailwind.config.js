// tailwind.config.js atau tailwind.config.ts
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // extend warna, font, dsb
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
