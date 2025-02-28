module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js"); 
  eleventyConfig.addPassthroughCopy("styles"); 
  eleventyConfig.addPassthroughCopy("write-up.html"); 

  return {
      dir: {
          input: ".",          
          output: "_site"       
      }
  };
};
