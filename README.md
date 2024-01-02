# StalkStocks

StalkStocks is a web application that allows users to track and visualize stock market data using Chart.js and the AlphaVantage API. Users can search for stock tickers and view corresponding stock charts.

## Features

- **Stock Chart Visualization**: Display stock market data in the form of interactive charts.
- **Stock Ticker Search**: Search for stock tickers to view their corresponding charts.
- **Real-Time Data**: Fetches stock data from an API for up-to-date information.

## Technologies Used

- React
- Chart.js
- AlphaVantage API
- Express
- Mongoose/MongoDB
- Webpack
- JavaScript
- HTML/CSS

## Installation

1. Clone the repository:

git clone https://github.com/your-username/StalkStocks.git

2. Navigate to the project directory:

cd StalkStocks

3. Install dependencies:

npm install

4. Start the application:

npm build
npm start

-- optional, run in dev mode with npm run dev

The app will be running on `http://localhost:3000`.

## Usage 

- Enter a stock ticker symbol in the search bar to view the corresponding stock chart.
- The chart will display information such as open, close, high, low, and volume for the selected stock.
- Each time a new stock ticker is searched, the chart will update accordingly.

## API

- The app uses a stock market data API from AlphaVantage to fetch stock information. Ensure you have an internet connection to access real-time data.

## Contributing

- Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## Acknowledgements 

- This app was created as a demonstration of using React and Chart.js for visualizing stock market data.
- Chart.js: https://www.chartjs.org/
- React: https://reactjs.org/
- AlphaVantage: https://www.alphavantage.co/
- Express: https://expressjs.com/
- MongoDB: https://www.mongodb.com/