exports.generateThemeConfig = (config) => {
  const themeConfig = {};

  config.colors.forEach((color) => {
    themeConfig[color] = `rgb(var(--${color}) / <alpha-value>)`;
  });

  config.colors.forEach((color) => {
    config.shades.forEach((shade) => {
      themeConfig[
        `${color}-${shade}`
      ] = `rgb(var(--${color}-${shade}) / <alpha-value>)`;
    });
  });

  return themeConfig;
};

exports.generateElementConfig = (elementVars) => {
  const elementConfig = {};

  elementVars.forEach((element) => {
    elementConfig[element] = `var(--${element})`;

    for (let i = 0; i <= 100; i += 10) {
      elementConfig[
        `${element}-${i}`
      ] = `color-mix(in lch, var(--${element}) ${i}%, var(--light-mix));`;
      elementConfig[
        `${element}/${i}`
      ] = `color-mix(in lch, var(--${element}) ${i}%, transparent);`;
    }
  });

  return elementConfig;
};
