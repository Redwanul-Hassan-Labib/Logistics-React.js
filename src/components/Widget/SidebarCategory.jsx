import React from 'react';
import { Link } from 'react-router-dom';

const SidebarCategory = ({ categories }) => {
  return (
    <div className="sidebar__single sidebar__category">
      <h3 className="sidebar__title">Category</h3>
      <ul className="sidebar__category-list list-unstyled">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="icon">
              <span className="icon-dabble-arrow" />
            </div>
            <Link to={category.link}>
              {category.name}<span>({category.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategory;
