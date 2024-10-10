/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#F0BE47",
        "brand-secondary": "#FFE182",
        "dark-primary-bg": "#17133A",
        "dark-secondary-bg": "#2A2564",
        "dark-primary-text": "#f2f2f2",
        "dark-secondary-text": "#999999",
        "light-primary-text": "#333333",
        "light-secondary-text": "#666666",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        navbar: ["var(--font-raleway)", "sans-serif"],
        heading: ['var(--font-advent-pro)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
