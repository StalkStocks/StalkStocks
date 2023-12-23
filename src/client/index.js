import App from './components/App.jsx'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Stocks from 'stocks.js'



const root = createRoot(document.getElementById('app'))
root.render(<App/>)



// var stocks = new Stocks('N9FZFLH17H66OBFL')
// var result = await stocks.timeSeries(var options = {
//   symbol: 'AAPL',
//   interval: 'weekly',
//   amount: 52
// };);