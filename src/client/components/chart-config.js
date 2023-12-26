import Chart from 'chart.js/auto'


async function fetchDataFromAPI(stockToFetch) {
    const fetchUrl = `http://localhost:3000/api/${stockToFetch}`
    try {
      const response = await fetch(fetchUrl, {
        mode: 'no-cors',
        method: 'get'
      });
      console.log(response)
      if (response.status !== 200) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Function to generate the chart using fetched data
  async function generateChart(chosenStock) {
    const rawData = await fetchDataFromAPI(chosenStock);
  
    if (!rawData) {
      console.error('Failed to fetch data from the API.');
      return;
    }
  
    const timeSeriesData = Object.entries(rawData["Time Series (Daily)"]).map(([date, values]) => ({
      x: date,
      open: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
      close: parseFloat(values["4. close"]),
      volume: parseInt(values["5. volume"])
    }));
  
    const labels = timeSeriesData.map(entry => entry.x);
    const datasets = [
      {
        label: 'Open',
        data: timeSeriesData.map(entry => entry.open),
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      },
      {
        label: 'Close',
        data: timeSeriesData.map(entry => entry.close),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Volume',
        data: timeSeriesData.map(entry => entry.volume),
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      }
    ];
  
    const cfg = {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    };
  
    // Render the chart using Chart.js
    // const ctx = document.getElementById('graph')
    // new Chart(ctx, cfg);
    new Chart(document.querySelector('#graph'), cfg);
  }
  
  export default generateChart
  