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

    // create shades from 0% to 100% in increments of 10%
    for (let i = 0; i <= 100; i += 10) {
      elementConfig[
        `${element}-${i}`
      ] = `color-mix(in lch, var(--${element}) ${i}%, var(--light-mix));`;
      elementConfig[
        `${element}/${i}`
      ] = `color-mix(in lch, var(--${element}) ${i}%, transparent);`;
    }

    // explicitly add the 5% and 95% mix shades
    elementConfig[
      `${element}-5`
    ] = `color-mix(in lch, var(--${element}) 5%, var(--light-mix));`;
    elementConfig[
      `${element}-95`
    ] = `color-mix(in lch, var(--${element}) 95%, var(--light-mix));`;

    // transparent shades
    elementConfig[
      `${element}-5`
    ] = `color-mix(in lch, var(--${element}) 5%, transparent);`;
    elementConfig[
      `${element}-95`
    ] = `color-mix(in lch, var(--${element}) 95%, transparent);`;
  });

  return elementConfig;
};
