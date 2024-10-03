# Uniweb Tailwind Plugin

Enhance your Tailwind CSS projects with powerful typography and color utilities. The Uniweb Tailwind Plugin provides a set of flexible, non-opinionated tools to create fluid, responsive, and aesthetically pleasing designs.

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
3. [Usage](#usage)
   - [Fluid Typography](#fluid-typography)
   - [Dynamic Line Height and Tracking](#dynamic-line-height-and-tracking)
   - [Text Wrapping](#text-wrapping)
   - [Color Utilities](#color-utilities)
4. [Integration with Tailwind Typography](#integration-with-tailwind-typography)
5. [Examples](#examples)
6. [Customization](#customization)
7. [Contributing](#contributing)
8. [License](#license)

## Installation

Install the plugin via npm:

```bash
npm install uniweb-tailwind-plugin
```

Then add it to your `tailwind.config.js` file:

```javascript
module.exports = {
  plugins: [
    require("uniweb-tailwind-plugin"),
    // other plugins...
  ],
};
```

## Features

- **Fluid Typography**: Create responsive font sizes that scale smoothly between viewport sizes.
- **Dynamic Line Height and Tracking**: Automatically adjust line height and letter spacing based on font size.
- **Text Wrapping Utilities**: Control text wrapping behavior for improved readability.
- **Color Utilities**: Generate a comprehensive color system with shades and opacity variants.
- **Non-opinionated**: Flexible utilities that complement your existing design system.

## Usage

### Fluid Typography

The plugin provides fluid typography utilities that automatically adjust font size based on the viewport width.

```html
<h1 class="fluid-text-3xl">Fluid Heading</h1>
<p class="fluid-text-base">
  This text will scale smoothly between viewport sizes.
</p>
```

Available classes: `fluid-text-xs`, `fluid-text-sm`, `fluid-text-base`, `fluid-text-lg`, `fluid-text-xl`, `fluid-text-2xl`, `fluid-text-3xl`, `fluid-text-4xl`.

Why use fluid typography? It ensures your text remains proportional and readable across different device sizes without the need for breakpoint-specific font sizes.

### Dynamic Line Height and Tracking

Automatically adjust line height and letter spacing based on the element's font size.

```html
<p class="fluid-text-lg dynamic-leading dynamic-tracking">
  This text will have optimized line height and letter spacing.
</p>
```

- `dynamic-leading`: Applies a calculated line height based on the font size.
- `dynamic-tracking`: Adjusts letter spacing (tracking) based on the font size.

Why use dynamic line height and tracking? It maintains optimal readability as font sizes change, ensuring consistent and aesthetically pleasing text across your design.

### Text Wrapping

Control how text wraps to create more balanced and visually appealing blocks of text.

```html
<h1 class="text-balance">Balanced Heading</h1>
<p class="text-pretty">
  This paragraph will have optimized line breaks for readability.
</p>
<span class="text-auto">Default browser text wrapping</span>
```

- `text-balance`: Balances text for headings and short strings.
- `text-pretty`: Optimizes wrapping for readability in paragraphs.
- `text-auto`: Uses the browser's default text wrapping.

Why use text wrapping utilities? They help create more aesthetically pleasing layouts and improve readability, especially for headings and short text blocks.

### Color Utilities

The plugin extends Tailwind's color system with additional utilities for creating harmonious color palettes.

```html
<div class="bg-primary-500">Primary color</div>
<div class="text-accent-700">Accent text</div>
<div class="bg-neutral-200/80">Neutral background with opacity</div>
```

Color utilities include primary, secondary, accent, and neutral colors with various shades and opacity options.

Why use these color utilities? They provide a consistent and flexible way to apply colors across your project, making it easy to maintain a cohesive design system.

## Integration with Tailwind Typography

The Uniweb Tailwind Plugin is designed to work seamlessly with the official [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin. While our plugin focuses on providing flexible typography utilities, the Tailwind Typography plugin offers a set of pre-designed prose styles.

To use both plugins together:

1. Install the Tailwind Typography plugin:

   ```bash
   npm install @tailwindcss/typography
   ```

2. Add both plugins to your `tailwind.config.js`:

   ```javascript
   module.exports = {
     plugins: [
       require("uniweb-tailwind-plugin"),
       require("@tailwindcss/typography"),
     ],
   };
   ```

3. Use them together in your HTML:
   ```html
   <article class="prose prose-lg">
     <h1 class="fluid-text-4xl text-balance">My Fluid, Balanced Heading</h1>
     <p class="dynamic-leading">
       This paragraph has the Tailwind Typography styles with our dynamic
       leading.
     </p>
   </article>
   ```

The Uniweb plugin complements Tailwind Typography by providing additional control over font scaling, text wrapping, and dynamic spacing.

## Examples

### Responsive Article Header

```html
<header class="mb-8">
  <h1 class="fluid-text-4xl text-balance dynamic-leading mb-2">
    The Future of Web Design: A New Paradigm
  </h1>
  <p class="fluid-text-lg text-pretty dynamic-tracking text-neutral-600">
    Explore the cutting-edge trends shaping the digital landscape in 2023 and
    beyond.
  </p>
</header>
```

### Call-to-Action Button

```html
<button
  class="bg-primary-500 hover:bg-primary-600 text-white fluid-text-base dynamic-leading px-6 py-3 rounded-lg transition duration-300"
>
  Get Started Today
</button>
```

### Feature Card

```html
<div class="bg-neutral-100 p-6 rounded-xl shadow-md">
  <h3 class="fluid-text-xl text-balance dynamic-leading text-primary-800 mb-2">
    Seamless Integration
  </h3>
  <p class="fluid-text-base text-pretty dynamic-tracking text-neutral-600">
    Our platform effortlessly connects with your existing tools, streamlining
    your workflow and boosting productivity.
  </p>
</div>
```

## Customization

You can customize the plugin's behavior by modifying your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Override or extend color definitions
        primary: {
          500: "#3B82F6",
          // ...
        },
      },
    },
  },
  plugins: [require("uniweb-tailwind-plugin")],
};
```

## Default Behaviors

The Uniweb Tailwind Plugin applies some default behaviors to enhance your project's typography right out of the box:

1. **Balanced Headings**: All heading elements (h1, h2, h3, h4, h5, h6) have `text-wrap: balance` applied by default. This creates more aesthetically pleasing line breaks for headings without any additional classes.

   ```html
   <h1>This heading will automatically have balanced text wrapping</h1>
   ```

   You can override this behavior using the `.text-auto` or `.text-pretty` classes if needed.

2. **Fluid Typography Scale**: The plugin provides a predefined fluid typography scale. This scale is used in the fluid typography utilities (e.g., `.fluid-text-base`, `.fluid-text-lg`, etc.) and automatically adjusts font sizes based on the viewport width.

3. **Dynamic Line Height and Tracking**: The `.dynamic-leading` and `.dynamic-tracking` utilities calculate their values based on the current font size of the element they're applied to. This ensures that line height and letter spacing remain proportional as font sizes change.

4. **Color Opacity Support**: All color utilities generated by the plugin support opacity modifiers. For example, you can use `bg-primary-500/50` to apply the primary color at 50% opacity.

## Important Notes

- **Browser Compatibility**: The `text-wrap: balance` and `text-wrap: pretty` properties are relatively new CSS features. Ensure you check browser compatibility if you're targeting older browsers.

- **Performance Considerations**: While fluid typography and dynamic spacing calculations are powerful, they may have a slight performance impact on very complex layouts. In most cases, this is negligible, but it's worth noting for highly performance-critical applications.

- **Overriding Defaults**: All default behaviors can be overridden. If you prefer not to have balanced headings by default, you can reset this in your own CSS:

  ```css
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: auto;
  }
  ```

- **Customization**: Remember that you can customize the fluid typography scale, color palette, and other aspects of the plugin through your `tailwind.config.js` file.

## Understanding the 'prose' Class from Tailwind Typography

The `prose` class from Tailwind Typography is designed to provide beautiful typographic defaults for long-form content like articles, blog posts, or documentation. It applies styles to HTML elements within its scope, ensuring consistent and readable typography.

Our Uniweb plugin, on the other hand, provides utilities for fine-tuning typography, such as fluid font sizes, dynamic line heights, and text wrapping controls.

### Recommended Usage

1. **For Long-Form Content**:
   We recommend using the `prose` class from Tailwind Typography for your main content areas. This will give you a solid typographic foundation.

   ```html
   <article class="prose lg:prose-xl">
     <h1>Article Title</h1>
     <p>Article content goes here...</p>
   </article>
   ```

2. **Enhancing 'prose' with Uniweb Utilities**:
   You can enhance elements within `prose` using our utilities for more precise control:

   ```html
   <article class="prose lg:prose-xl">
     <h1 class="fluid-text-4xl">
       Enhanced Article Title (balanced by default)
     </h1>
     <p class="dynamic-leading">This paragraph has dynamic line height.</p>
   </article>
   ```

3. **For UI Elements Outside Main Content**:
   Use our utilities freely for UI elements, headings, or any text outside the main content area:

   ```html
   <h2 class="fluid-text-2xl dynamic-leading text-balance">Section Header</h2>
   <p class="fluid-text-base text-pretty">
     Introductory text with pretty wrapping.
   </p>
   ```

4. **Customizing 'prose' with Our Color Utilities**:
   You can use our color utilities to customize the `prose` styles:

   ```html
   <article
     class="prose prose-headings:text-primary-800 prose-p:text-neutral-600"
   >
     <!-- Content here -->
   </article>
   ```

### Best Practices

1. **Start with 'prose'**: For article-like content, start with the `prose` class as your base.
2. **Enhance with Uniweb**: Use our utilities to fine-tune specific elements or add responsive behavior.
3. **Consistency is Key**: Try to be consistent in how you combine these plugins across your project.
4. **Performance Consideration**: Be mindful of performance when heavily nesting our dynamic utilities within `prose` elements, especially for very long articles.

### Example: Combining Prose and Uniweb

Here's an example of how you might combine both plugins effectively:

```html
<article class="prose lg:prose-xl mx-auto px-4">
  <h1 class="fluid-text-5xl text-primary-800">The Future of Web Typography</h1>
  <p class="lead fluid-text-xl dynamic-leading text-pretty text-neutral-600">
    Exploring how modern CSS and thoughtful design are reshaping the way we
    approach web typography.
  </p>
  <!-- Rest of the article content -->
  <h2>Section Title</h2>
  <p>Regular paragraph text...</p>
</article>
```

In this example, we're using the `prose` class for overall article styling, while leveraging Uniweb utilities for enhanced control over the title and lead paragraph.

Remember, the goal is to create a harmonious design that leverages the strengths of both plugins. The Tailwind Typography plugin provides a solid foundation for content, while our Uniweb plugin offers the tools for fine-tuning and responsiveness.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
