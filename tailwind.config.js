/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}", // Adjust the path to your project files
    "./index.html", // Include HTML files
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Small mobile devices
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Desktop
        "2xl": "1536px", // Large screens
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
