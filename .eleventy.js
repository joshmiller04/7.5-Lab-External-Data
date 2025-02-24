module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("Imgs");

  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};
