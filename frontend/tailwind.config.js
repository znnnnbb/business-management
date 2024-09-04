/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        shore1: "#70e1f5",
        shore2: "#ffd194",
        ameth1: "#9d50bb",
        ameth2: "#6e48aa",
        intu1: "#da22ff",
        intu2: "#9733ee",
        blue1: "#2193b0",
        blue2: "#6dd5ed",
        lagoo1: "#0052d4",
        lagoo2: "#4364f7",
        lagoo3: "#6fb1fc",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        name: "2px",
        title: "4px",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
};
