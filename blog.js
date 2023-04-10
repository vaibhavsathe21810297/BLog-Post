const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

  const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  publicationDate: {
    type: Date,
    required: [true, 'Publication date is required'],
    default: Date.now
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;

const BlogPost = require('./models/blogPost');

const newBlogPost = new BlogPost({
  title: 'My First Blog Post',
  author: 'John Doe',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  publicationDate: new Date('2022-01-01')
});

newBlogPost.save()
  .then(blogPost => console.log(blogPost))
  .catch(err => console.log(err));
