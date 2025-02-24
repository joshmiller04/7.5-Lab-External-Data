module.exports = function (eleventyConfig) {
  // Passthrough copy for styles, images, and other static assets
  eleventyConfig.addPassthroughCopy("Styles");
  eleventyConfig.addPassthroughCopy("Imgs");

  // Set the input and output directories
  return {
      dir: {
          input: ".", // Root directory as input
          includes: "_includes", // Layouts and partials
          output: "_site"
      }
  };
};
