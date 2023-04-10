const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    default: Date.now
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;


const mongoose = require('mongoose');
const Post = require('./post.model');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');

  const newPost = new Post({
    title: 'My First Post',
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });

  newPost.save().then(() => {
    console.log('Post saved successfully');
    mongoose.disconnect();
  }).catch((err) => {
    console.error('Error saving post:', err);
    mongoose.disconnect();
  });
}).catch((err) => {
  console.error('Error connecting to database:', err);
});
