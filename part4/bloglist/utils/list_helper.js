const _ = require('lodash');

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

const mostBlogs = (blogs) => {
  const authorCounts = _.countBy(blogs, 'author');

  const topAuthor = _.maxBy(
    _.keys(authorCounts),
    (author) => authorCounts[author]
  );

  return {
    author: topAuthor,
    blogs: authorCounts[topAuthor],
  };
};

const findAuthorWithMostLikes = (blogs) => {
  const authorTotalLikes = {};

  // Calculate total likes for each author
  blogs.forEach((blog) => {
    const currentAuthor = blog.author;
    authorTotalLikes[currentAuthor] =
      (authorTotalLikes[currentAuthor] || 0) + blog.likes;
  });

  // Find the author with the most likes
  const topAuthor = _.maxBy(
    Object.keys(authorTotalLikes),
    (author) => authorTotalLikes[author]
  );

  // Return the result
  return {
    author: topAuthor,
    likes: authorTotalLikes[topAuthor],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  findAuthorWithMostLikes,
};
