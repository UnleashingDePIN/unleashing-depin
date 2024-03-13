import React, { useEffect } from 'react';
import '../app/styles.css';
import '../app/globals.css';
import Header from '../app/components/header.js';
import blogs from '../app/data/blogsData.js';

const Blog = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.medium.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };}, []);
  return (
    <div className="body">
      <Header />
      <div className="hero-text">
        <h1>Unleashing DePIN</h1>
        <h2>Blog Posts</h2>
      </div>
      <div className="episodes-grid">
        {blogs.map((blog, index) => (
          <div className="medium-container" key={index}>
            <a className="m-story" href={blog.url}>{blog.title}</a>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default Blog;

