import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
import generateChart from './chart-config.js'

function Charter({ stockTicker }) {

  useEffect(() => {
    (async function() {

      generateChart(stockTicker);
    // new Chart(document.querySelector('#graph'), cfg);
  })()}, [stockTicker])


  return (
    <div className="chart">
      <canvas id="graph"></canvas>
    </div>
  )
}

export default Charter