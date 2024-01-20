import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img src={blog.img} className="card-img-top" alt="..." style={{ height: '150px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.name}</h5>
          <p className="card-text" style={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.tag_line}</p>
          <a href={`/blog/readblog/${blog.entry}`} className="btn btn-primary mt-auto">Read full Blog</a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
