import React, { useState } from 'react';
import './styles.scss';
import FooterButtons from './footerButtons.js';
import Charter from './Chart.jsx'
import SearchCenter from './SearchCenter.jsx'

function App() {

  const [stockTicker, setStockTicker] = useState('SPY');

  const handleSearch = (newTicker) => {
    console.log('Stock search changed to: ', newTicker);
    setStockTicker(newTicker);
  }
  
  return (
    <div>
      <div className="container">
        <h1 className="app-title">StalkStocks</h1>
      </div>
      <div className="search-container">
        {/* <SearchCenter /> */}
        <Charter stockTicker={ stockTicker } />
      </div>
      <SearchCenter onSearch={ handleSearch }/>
      <FooterButtons />
    </div>
  );
}

export default App;