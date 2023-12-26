import React from 'react';

function SearchCenter () {
    return (
        <div className="search-center">
          <form className="search-form">
            <input type="text" className="search-box" />
            <button type="submit" className="search-button">
              Stalk
            </button>
          </form>
        </div>
    )
}

export default SearchCenter;