import React from 'react';
import './Blog.scss'; 

const Blog = () => {
  return (
    <div className='blog'>
      <h1>Blog</h1>
      <div className='blog-posts'>
        {/* Add blog posts here */}
        <div className='blog-post'>
          <h2>Blog Post Title 1</h2>
          <p>Author: ...</p>
          <p>Date: August 7, 2024</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac bibendum odio, non fermentum risus.</p>
          <a href='#'>Read more</a>
        </div>
        <div className='blog-post'>
          <h2>Blog Post Title 2</h2>
          <p>Author: ...</p>
          <p>Date: August 6, 2024</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac bibendum odio, non fermentum risus.</p>
          <a href='#'>Read more</a>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
}

export default Blog;

