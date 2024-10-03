/**
 * Our fluid typography utilities use CSS calc() and clamp() functions to provide smooth scaling
 * of font sizes. It's important to note that CSS doesn't allow division operations with units in calc()
 * functions. Our implementation takes this into account by using unitless values for division operations.
 */
function fluidType(fonts) {
  const minWidth = 320; // px
  const maxWidth = 1280; // px

  return Object.fromEntries(
    Object.entries(fonts).map(([key, [minSize, maxSize]]) => [
      key,
      `clamp(${minSize}px, calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${
        maxWidth - minWidth
      }))), ${maxSize}px)`,
    ])
  );
}

function calculateCh(element, fontSize) {
  const zero = document.createElement("span");
  zero.innerText = "0";
  zero.style.position = "absolute";
  zero.style.fontSize = fontSize;
  element.appendChild(zero);
  const chPixels = zero.getBoundingClientRect().width;
  element.removeChild(zero);
  return chPixels;
}

module.exports = {
  fluidType,
  calculateCh,
  generateTypographyScale: (baseFontSize, scaleRatio) => {
    const levels = ["sm", "base", "lg", "xl", "2xl", "3xl"];
    let scale = {};
    levels.forEach((level, index) => {
      const size = baseFontSize * Math.pow(scaleRatio, index - 1);
      scale[level] = `${size.toFixed(2)}px`;
    });
    return scale;
  },
  calculateLineHeight: (fontSize) => {
    const baseLineHeight = 1.2;
    return `calc(${baseLineHeight}em + 0.5ex)`;
  },
  calculateTracking: (fontSize) => {
    return `${(-0.02 * Math.log(fontSize) + 0.1).toFixed(4)}em`;
  },
};
