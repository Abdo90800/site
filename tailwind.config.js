/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componen/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundImage: {
          'custom-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(2, 132, 199, 0.65) 50%, rgba(0, 0, 0, 0) 100%)',
        },
      },
    },
  },
  
  plugins: [],
};
