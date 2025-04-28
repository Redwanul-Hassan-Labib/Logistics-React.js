import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLatestBlogs = ({ blogs }) => {
  return (
    <div className="sidebar__single sidebar__post">
      <h3 className="sidebar__title">Latest Blogs</h3>
      <ul className="sidebar__post-list list-unstyled">
        {blogs.map((blog, index) => (
          <li key={index}>
            <div className="sidebar__post-image">
              <img src={blog.imageUrl} alt={blog.title} />
            </div>
            <div className="sidebar__post-content">
              <p className="sidebar__post-date">
                <i className="icon-calender" />
                {blog.date}
              </p>
              <h3>
                <Link to={blog.link}>{blog.title}</Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLatestBlogs;
