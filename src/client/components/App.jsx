import React from 'react';
import './styles.scss';
import FooterButtons from './footerButtons.js';
import Charter from './Chart.jsx'
import SearchCenter from './SearchCenter.jsx'

function App() {
  return (
    <div>
      <div className="container">
        <h1 className="app-title">StalkStocks</h1>
      </div>
      <div className="search-container">
        <SearchCenter />
        <Charter/>
      </div>
      <FooterButtons />
    </div>
  );
}

export default App;