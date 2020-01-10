module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("mySort", function(collection) {
    let posts = [];
    collection.getAll().forEach( (item) => {
      if(item.data.tags[0] == 'news') {
        posts.push(item);
      }
    })
    return posts.sort(function(a, b) {
      console.log(new Date(a.data.publishdate))
      console.log(a.data.title)
      return new Date(a.data.publishdate) - new Date(b.data.publishdate);
    }).reverse();
  });
};