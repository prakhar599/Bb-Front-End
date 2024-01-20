import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <div className="container mt-4">
      <div className="row mx-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.entry} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
    