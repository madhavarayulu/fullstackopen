const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  // Find the blog with the maximum likes using reduce
  const mostLikedBlog = blogs.reduce((maxBlog, currentBlog) => {
    return currentBlog.likes > maxBlog.likes ? currentBlog : maxBlog;
  }, blogs[0]); // Initialize with the first blog

  return {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
