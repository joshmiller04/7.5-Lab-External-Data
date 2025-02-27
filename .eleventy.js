module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js"); // Copy js folder to _site/js

  return {
      dir: {
          input: ".",          // Root directory as input
          includes: "_includes",
          output: "_site"      // Output folder for the built site
      }
  };
};
