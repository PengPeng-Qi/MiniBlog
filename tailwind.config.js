module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        headerWidth: "976px",
        380: "380px",
        450: "450px",
        506: "506px",
        590: "590px",
      },
      height: {
        367: "367px",
        407: "407px",
        560: "560px",
        660: "660px",
        headerHeight: "62px",
      },
      lineHeight: {
        7.5: "30px",
      },
      screens: {
        phone: "450px",
        table: "976px",
        desktop: "1280px",
      },
      fontFamily: {
        headFont: ["Crimson Pro", "serif"],
      },
      fontSize: {
        "1.1textxl": [
          "21px",
          {
            lineHeight: "31.5px",
          },
        ],
        "4.5xl": [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
      },
      strokeWidth: {
        14: "14px",
        16: "16px",
      },
    },
    plugins: [],
  },
};
