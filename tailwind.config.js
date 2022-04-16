module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      screens: {
        phone: "450px",
        table: "976px",
        desktop: "1280px",
      },
      fontSize: {
        "4.5xl": [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
      },
    },
    plugins: [],
  },
};
