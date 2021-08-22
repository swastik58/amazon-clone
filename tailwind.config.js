module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
      fontFamily: {
        'titillium': ['Titillium Web', 'sans-serif'],
        'tenali': ['Tenali Ramakrishna', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'prompt': ['Prompt', 'sans-serif'],
        'merri': ['Merriweather', 'serif'],
        'varela': ['Varela Round', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
