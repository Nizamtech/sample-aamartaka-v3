module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "monospace"],
        exo2: "Exo2",
        roboto: ["Roboto", "sans-serif"],
        monster: ["Monsterrat", "sans-serif"],
        poppins: ["Poppins", "monospace"],
      },
    },
  },
  plugins: [],
};
