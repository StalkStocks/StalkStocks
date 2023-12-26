import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
import generateChart from './chart-config.js'

function Charter() {

  useEffect(() => {
    (async function() {

      generateChart('GOOG');
    // new Chart(document.querySelector('#graph'), cfg);
  })()}, [])


  return (
    <div className="chart">
      <canvas id="graph"></canvas>
    </div>
  )
}

export default Charter