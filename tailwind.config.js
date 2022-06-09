module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ["Exo 2", "monospace"],
        poppins: ["Poppins", "monospace"],
      },
    },
  },
  plugins: [],
};
