import React from 'react';
import './styles.scss';
import FooterButtons from './footerButtons.js';
import Charter from './Chart.jsx'
import SearchCenter from './SearchCenter.jsx'

function App() {

  // const [stockTicker, setStockTicker] = useState('');

  
  return (
    <div>
      <div className="container">
        <h1 className="app-title">StalkStocks</h1>
      </div>
      <div className="search-container">
        {/* <SearchCenter /> */}
        <Charter stockTicker='IBM' />
      </div>
      <SearchCenter />
      <FooterButtons />
    </div>
  );
}

export default App;