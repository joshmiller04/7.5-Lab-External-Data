module.exports = function (eleventyConfig) {
  // Passthrough copy for JS and CSS files
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
      dir: {
          input: "src",
          output: "_site"
      }
  };
};
