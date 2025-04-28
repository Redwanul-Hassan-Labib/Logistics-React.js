import React from 'react';

const SearchPopup = ({ isPopup, handlePopup }) => {
    return (
        <div id="search-popup" className={`search-popup ${isPopup ? "active" : ""}`}>
            <div className="search-popup__overlay search-toggler" onClick={handlePopup} />
            <div className="search-popup__content">
                <form action="#">
                    <label htmlFor="search" className="sr-only">search here</label>
                    <input type="text" id="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="thm-btn">
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchPopup;
