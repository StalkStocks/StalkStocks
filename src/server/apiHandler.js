const express = require('express');

const stockApiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=N9FZFLH17H66OBFL';

const apiHandler = {}

apiHandler.getStocks = (req, res, next) => {
  fetch(stockApiUrl)
  .then(data => data.json())
  .then(data => {
    console.log(data)
    next()
  })
  .catch(err => next({log: `Error: caught error in getStock middleware: ${err}`, message: 'Couldn\'t get stock information'}))
}

module.exports = apiHandler