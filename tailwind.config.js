module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        380: "380px",
        450: "450px",
        506: "506px",
        590: "590px",
        976: "976px",
      },
      height: {
        62: "62px",
        367: "367px",
        407: "407px",
        560: "560px",
        660: "660px",
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
        "1.1xl": [
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
      // svg width
      strokeWidth: {
        14: "14px",
      },
    },
    plugins: [],
  },
};
