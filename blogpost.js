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
