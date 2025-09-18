/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FCE7F3",  // Baby pink
          DEFAULT: "#F472B6", // Fashion pink
          dark: "#BE185D",   // Deep bold pink
        },
        secondary: {
          light: "#E0F2FE",  // Soft sky blue
          DEFAULT: "#38BDF8", // Fresh aqua blue
          dark: "#0369A1",   // Deep ocean blue
        },
        accent: {
          light: "#CFFAFE",  // Light aqua tint
          DEFAULT: "#06B6D4", // Pinkish teal blend
          dark: "#0E7490",   // Strong teal-blue
        },
        neutral: {
          light: "#FFFFFF",   // White
          DEFAULT: "#F5F5F5", // Soft gray background
          dark: "#1F1F1F",    // Charcoal black
        },
      },
    },
  },
  plugins: [],
};
