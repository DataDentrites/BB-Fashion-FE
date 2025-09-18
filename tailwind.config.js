/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#D1C4E9', // Soft lavender
                    DEFAULT: '#673AB7', // Deep purple
                    dark: '#4527A0', // Rich dark purple
                },
                secondary: {
                    light: '#FFE082', // Soft gold
                    DEFAULT: '#FFC107', // Vibrant gold
                    dark: '#FFA000', // Deep amber
                },
                accent: {
                    light: '#80DEEA', // Soft teal
                    DEFAULT: '#00BCD4', // Vibrant teal
                    dark: '#008394', // Deep teal
                },
                neutral: {
                    light: '#FAFAFA', // Soft white
                    DEFAULT: '#E0E0E0', // Light gray
                    dark: '#757575', // Charcoal gray
                },
            },
        },
    },
    plugins: [],
};
