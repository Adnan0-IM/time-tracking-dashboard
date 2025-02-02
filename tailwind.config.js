/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      primary: {
        Blue: "hsl(246, 80%, 60%)",
        "Light-red-work": "hsl(15, 100%, 70%)",
        "Soft-blue-play": "hsl(195, 74%, 62%)",
        "Light-red-study": "hsl(348, 100%, 68%)",
        "Lime-green-exercise": "hsl(145, 58%, 55%)",
        "Violet-social": "hsl(264, 64%, 52%)",
        "Sof-orange-self-care": "hsl(43, 84%, 65%)",
      },

      neutral: {
        "Very-dark-blue": "hsl(226, 43%, 10%)",
        "Dark-blue": "hsl(235, 46%, 20%)",
        "Desaturated-blue": "hsl(235, 45%, 61%)",
        "Pale-Blue": "hsl(236, 100%, 87%)",
      },
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
      },
      fontSize: {
        title: "18px",
      },
      fontWeight: {
        regular: 300,
        neutral: 400,
        bold: 500,
      },
      height: {
        accent: "155px",
      },
    },
  },
  plugins: [],
};
