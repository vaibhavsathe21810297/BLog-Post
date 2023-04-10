const mongoose = require('mongoose');
const BlogPost = require('./models/blogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    const newPost = new BlogPost({
      title: 'My First Blog Post',
      author: 'John Doe',
      content: 'This is my first blog post. Welcome to my blog!',
    });

    newPost.save()
      .then(() => {
        console.log('New blog post created!');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
