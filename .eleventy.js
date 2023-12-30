module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/assets')

  return {
    dir: {
      input: 'src'
    }
  }
}
