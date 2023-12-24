const express = require('express');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const stockApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`;

const apiHandler = {}

apiHandler.getStocks = (req, res, next) => {
  fetch(stockApiUrl)
  .then(data => data.json())
  .then(data => {
    res.locals.getStocks = data;
    next()
  })
  .catch(err => next({log: `Error: caught error in getStock middleware: ${err}`, message: 'Couldn\'t get stock information'}))
}

module.exports = apiHandler