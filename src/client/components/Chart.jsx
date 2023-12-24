import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
import generateChart from './chart-config.js'

function Charter() {

  useEffect(() => {
    (async function() {

      generateChart();
    // new Chart(document.querySelector('#graph'), cfg);
  })()}, [])


  return (
    <div style={{width: '500px', height: '300px'}}>
      <canvas id="graph"></canvas>
    </div>
  )
}

export default Charter