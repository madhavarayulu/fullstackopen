const { test, after } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');

const api = supertest(app);

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('the unique identifier property of the blog posts is named id', async () => {
  const response = await api.get('/api/blogs');
  const hasIdProperty = response.body.every((obj) =>
    Object.keys(obj).includes('id')
  );
  assert.strictEqual(hasIdProperty, true);
});

test('new blog post creationg successfull', async () => {
  const initialBlogCount = await Blog.countDocuments();

  const newBlog = {
    title: `Capitalist Markets Aren't “Free.” They're Planned for Profit`,
    author: 'Grace Blakeley',
  };

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const updatedBlogCount = await Blog.countDocuments();

  assert.strictEqual(updatedBlogCount, initialBlogCount + 1);
  assert.strictEqual(response.body.title, newBlog.title);
  assert.strictEqual(response.body.author, newBlog.author);
});

test('likes property defaults to 0 if missing from request', async () => {
  const newBlog = {
    title: 'Lean Production Is Not a Solution',
    author: 'Herman Rosenfeld',
    url: 'https://catalyst-journal.com/2022/06/lean-production-is-not-a-solution',
  };

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  assert.strictEqual(response.body.likes, 0);
});

after(async () => {
  await mongoose.connection.close();
});
