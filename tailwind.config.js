/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        darkViolet: "hsl(257, 27%, 26%)",
        cyan: "hsl(180, 66%, 49%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: " hsl(257, 7%, 63%)",
        femGray: "hsl(0, 0%, 75%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        boostMobile: "url('./src/assets/images/bg-boost-mobile.svg')",
        boostDesktop: "url('./src/assets/images/bg-boost-desktop.svg')",
        shortenMobile: "url('./src/assets/images/bg-shorten-mobile.svg')",
        boostDesktop: "url('./src/assets/images/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
};
