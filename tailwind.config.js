/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [  "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#7e7e7e",
          "200": "#787878",
          "300": "#060f22",
          "400": "#0a0227",
          "500": "rgba(0, 0, 0, 0.9)",
          "600": "rgba(255, 255, 255, 0.63)",
        },
        white: "#fff",
        black: "#000",
        orangered: "#cc0000",
        deepskyblue: "#2cb9ff",
        darkgray: "#adadad",
        dodgerblue: "#5498fe",
        chocolate: "#df7f26",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        whitesmoke: "#f8f8f8",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        mediumorchid: "#ff64ff",
        mediumaquamarine: "#00b28f",
        red: "#ff3131",
        silver: "#b8b8b8",
        mediumslateblue: "#3659fd",
        aliceblue: "#e9eff7",
        midnightblue: "rgba(9, 32, 99, 0.14)",
      },

      spacing: {},
      fontFamily: {
        lato: "Lato",
        inter: "Inter",
        roboto: "Roboto",
        Rubik:'Rubik',
        Krub:'Krub',
        Poppins:'Poppins',
        Noto:'Noto Sans',
        Inder:'Inder',
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "21xl": "40px",
        "13xl": "32px",
        "6xs": "12px",
        xl: "20px",
        "28xl-5": "47.5px",
        "2xl-4": "21.4px",
      },
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      "mid-4": "17.4px",
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      lg: "18px",
      "13xl": "32px",
      "mini-9": "14.9px",
      xl: "20px",
      "smi-6": "12.6px",
      "smi-7": "12.7px",
      "4xl-8": "23.8px",
      "2xl": "21px",
      mid: "17px",
      "12xl-3": "31.3px",
      "12xl-6": "31.6px",
      "lgi-8": "19.8px",
      "31xl": "50px",
      "35xl":"64px",
      "11xl": "30px",
      "53xl": "72px",
      "24xl": "43px",
      "mid-2": "17.2px",
      sm: "14px",
      "9xl-3": "28.3px",
      "4xl": "23px",
      xs: "12px",
      "6xs-9": "6.9px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      sm: '300px', // Custom small screen size
      // Other breakpoints can also be customized here
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    aspectRatio: {
      '0.6': '6/ 10', // Custom aspect ratio where height is greater than width
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
};