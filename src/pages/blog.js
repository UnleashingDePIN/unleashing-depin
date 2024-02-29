import React, {useEffect} from 'react';
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
    return () => {document.body.removeChild(script);};}, []);

  return (
    <div className="body">
      <Header />
      <div className="hero-text">
          <h1 style={{paddingBottom: '30px'}}>Unleashing DePIN</h1>
          <h2 style={{paddingBottom: '70px'}}>Blog Posts</h2>
      </div>
      <div className="episodes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {blogs.map((blog, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '350px' }}>
          {typeof window !== 'undefined' && <script async src="https://static.medium.com/embed.js"></script>}
          <a className="m-story" href={blog.url}>{blog.title}</a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

