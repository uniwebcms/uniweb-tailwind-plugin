const plugin = require("tailwindcss/plugin");
const colors = require("./colors");
const typography = require("./typography");

module.exports = plugin(
  function ({ addBase, addComponents, addUtilities, theme, e }) {
    // Add base styles
    addBase({
      "h1, h2, h3, h4, h5, h6": {
        "text-wrap": "balance",
      },
    });

    // Add custom utilities
    addUtilities({
      ".text-balance": {
        "text-wrap": "balance",
      },
      ".text-pretty": {
        "text-wrap": "pretty",
      },
      ".text-auto": {
        "text-wrap": "auto",
      },
    });

    // Add fluid typography utilities
    const fluidFontSizes = typography.fluidType({
      xs: [12, 14],
      sm: [14, 16],
      base: [16, 18],
      lg: [18, 20],
      xl: [20, 24],
      "2xl": [24, 28],
      "3xl": [28, 32],
      "4xl": [32, 36],
    });

    Object.entries(fluidFontSizes).forEach(([key, value]) => {
      addUtilities({
        [`.fluid-text-${e(key)}`]: {
          "font-size": value,
        },
      });
    });

    // Add dynamic line height utility
    addUtilities({
      ".dynamic-leading": {
        "line-height": typography.calculateLineHeight("1em"),
      },
    });

    // Add dynamic tracking utility
    addUtilities({
      ".dynamic-tracking": {
        "letter-spacing": typography.calculateTracking("1em"),
      },
    });
  },
  {
    theme: {
      extend: {
        colors: colors,
        // Add more theme extensions here if needed
      },
    },
  }
);
