const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    // layers: ['components', 'utilities'],
    content: [
      "tw-jit-classes.txt",
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: ".69rem"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          light: "#5d803b",
          DEFAULT: "#527033",
          dark: "#3c5423"
        },
        red: {
          light: "#FF6E6E",
          DEFAULT: "#DB3232",
          dark: "#CC1616"
        },
        blue: {
          light: "#5BD8EB",
          DEFAULT: "#057EA6",
          dark: "#006F94"
        },
        yellow: {
          light: "#ffd324",
          DEFAULT: "#ffcc00",
          dark: "#fefc9f"
        },
        cyan: {
          light: "#0EADC2",
          DEFAULT: "#0A7F8F",
          dark: "#096F7D"
        },
        dark: {
          light: "#42413b",
          DEFAULT: "#36342E",
          dark: "#343432"
        },
        light: {
          light: "#FFF",
          DEFAULT: "#F4F4F4",
          dark: "#FFFDF5"
        },
        muted: {
          DEFAULT: "#757575"
        }
      },
      fontFamily: {
        display: ["Raleway", ...defaultTheme.fontFamily.sans],
        body: ["Overpass", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        grd: "0.9375rem",
        "grd-half": "0.4688rem",
        "160": "40rem"
      },
      borderWidth: {
        "5": "6px"
      }
      // maxWidth: {
      //   'content': '1600px'
      // }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
