import React, { useState } from 'react';

function SearchCenter ({ onSearch }) {

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
    setSearchInput('');
  }

    return (
        <div className="search-center">
          <form className="search-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="search-box" 
              value={searchInput}
              onChange={handleInputChange}
              placeholder='Enter Stock Ticker' 
              />
            <button type="submit" className="search-button">
              Stalk
            </button>
          </form>
        </div>
    )
}

export default SearchCenter;