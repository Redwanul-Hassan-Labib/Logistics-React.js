import React, { useState } from 'react';

const SidebarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here, e.g., navigating to a search results page
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="sidebar__single sidebar__search">
      <h3 className="sidebar__title">Search</h3>
      <form className="sidebar__search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search.."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};

export default SidebarSearch;
