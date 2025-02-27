module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js"); // Ensure js folder is copied to _site/js

  return {
      dir: {
          input: ".",          // Root directory as input
          output: "_site"      // Output folder for the built site
      }
  };
};
