import React from 'react';
import './styles.scss';
import FooterButtons from './footerButtons.js';

function App() {
  return (
    <div>
      <div className="container">
        <h1 className="app-title">StalkStocks</h1>
      </div>
      <div className="search-container">
        <div className="search-center">
          <form className="search-form">
            <input type="text" className="search-box" />
            <button type="submit" className="search-button">
              Stalk
            </button>
          </form>
        </div>
      </div>
      <FooterButtons />
    </div>
  );
}

export default App;