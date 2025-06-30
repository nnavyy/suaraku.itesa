// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: 'oklch(0.922 0 0)', // bisa diganti sesuai kebutuhan
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        // tambahin warna lain sesuai isi css lo
      }
    }
  },
  plugins:[],
}
