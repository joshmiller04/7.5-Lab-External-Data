module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js"); // Copy js folder to _site/js
  eleventyConfig.addPassthroughCopy("write-up.html"); // Copy write-up.html to _site/

  return {
      dir: {
          input: ".",          // Root directory as input
          output: "_site"      // Output folder for the built site
      }
  };
};
