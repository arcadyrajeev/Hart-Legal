/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      perspective: {
        none: "none",
        sm: "400px",
        md: "800px",
        lg: "1000px",
        xl: "1500px",
      },
      fontFamily: {
        LibreBaskerville: ["LibreBaskerville", "serif"],
        LatoRegular: ["LatoRegular", "sans-serif"],
        LatoBold: ["LatoBold", "sans-serif"],
      },

      colors: {
        primarybg: "var(--primarybg)",
        secondarybg: "var(--secondarybg)",
        darkblue: "var(--darkblue)",
        shadow: "var(--shadow)",
        textwhite: "var(--textwhite)",
        textblack: "var(--textblack)",
        textgrey: "var(--textgrey)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transform-3d": {
          "transform-style": "preserve-3d",
        },
        ".flat": {
          "transform-style": "flat",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
      });
    },
  ],
};
