const { generateThemeConfig, generateElementConfig } = require("./utils");

module.exports = {
  ...generateThemeConfig({
    colors: ["primary", "secondary", "accent", "neutral"],
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  }),
  ...generateElementConfig([
    "bg-color",
    "text-color",
    "heading-color",
    "link-color",
    "link-hover-color",
    "icon-color",
    "btn-color",
    "btn-text-color",
    "btn-hover-color",
    "btn-hover-text-color",
  ]),
  // Add additional custom colors here. For example:
  // uniweb: {
  //   text: "var(--uniweb-text-color)",
  //   heading: "var(--uniweb-heading-color)",
  //   link: "var(--uniweb-link-color)",
  // },
};
