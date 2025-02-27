module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js"); 
  eleventyConfig.addPassthroughCopy("write-up.html");

  return {
      dir: {
          input: ".",        
          output: "_site"      
      }
  };
};
