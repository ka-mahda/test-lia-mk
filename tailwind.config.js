/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        34: "138px",
        59: "235px",
        204: "204px",
      },
      margin: {
        13: "52px",
      },
      maxWidth: {
        204: "204px",
        xss: "353px",
        "1.5xl": "636px",
        "6.5xl": "1160px",
        xxs: "255px",
      },
      maxHeight: {
        xss: "353px",
        "1.5xl": "636px",
        "6.5xl": "1160px",
        xxs: "255px",
      },
      textColor: {
        navColor: "rgba(113, 113, 113, 1)",
        primaryHover: "rgba(229, 50, 83, 1)",
        primaryText: "rgba(255, 56, 92, 1)",
      },
      backgroundColor: {
        mainBg: "rgba(247, 247, 247, 1)"
      },
    },
  },
  plugins: [],
};
