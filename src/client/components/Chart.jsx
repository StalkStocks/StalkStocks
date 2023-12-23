import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'

function Charter() {

  useEffect(() => {
    (async function() {
    const data = [
      10,
      20,
      15,
      25,
      22,
      30,
      28,
    ];
    const labels = []
    for (let i = 0; i < data.length; i++) {
      labels.push(i)
    }
    new Chart(
      document.querySelector('#graph'),
      {
        type: 'line',
        data: {
          datasets: [{
            data: data,
          }],
          labels: labels
        }
      }
    );
  })()}, [])


  return (
    <div style={{width: '500px', height: '300px'}}>
      <canvas id="graph"></canvas>
    </div>
  )
}

export default Charter