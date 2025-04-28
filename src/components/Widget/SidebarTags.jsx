import React from 'react';
import { Link } from 'react-router-dom';

const SidebarTags = ({ tags }) => {
  return (
    <div className="sidebar__single sidebar__tags">
      <h3 className="sidebar__title">Tags</h3>
      <div className="sidebar__tags-list">
        {tags.map((tag, index) => (
          <Link key={index} to={tag.link}>{tag.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarTags;
