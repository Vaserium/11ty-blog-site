const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  //addPassthroughCopy is copy pasting everything other than the .html files to the public folder
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // DateTime.fromJSDate(dateObj) will be converted to a local string using the DateTime.DATE_MED which is all coming from luxon
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src", //All the files I will be working from will be in src folder
      output: "public", //Public folder
    },
  };
};
