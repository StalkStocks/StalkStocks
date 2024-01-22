require("dotenv").config();

const API_KEY = process.env.API_KEY;

const apiHandler = {};

const generateStockApiUrl = (stockSymbol) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${API_KEY}`;
};

apiHandler.getStocks = (req, res, next) => {
  const stockSymbol = req.params.symbol;
  const stockApiUrl = generateStockApiUrl(`${stockSymbol}`);

  fetch(stockApiUrl)
    .then((data) => data.json())
    .then((data) => {
      res.locals.getStocks = data;
      next();
    })
    .catch((err) =>
      next({
        log: `Error: caught error in getStock middleware: ${err}`,
        message: "Couldn't get stock information",
      })
    );
};

module.exports = apiHandler;
