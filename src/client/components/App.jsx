import React from 'react';
import './styles.scss';
import FooterButtons from './footerButtons.js';
import Charter from './Chart.jsx'

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
        <Charter/>
      </div>
      <FooterButtons />
    </div>
  );
}

export default App;