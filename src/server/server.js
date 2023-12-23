const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const apiHandler = require('./apiHandler.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../../dist')))

app.get('/api', apiHandler.getStocks, (req, res) => {
  res.status(200).json(res.locals.getStocks);
})

app.use((req, res) => res.status(404).send('Not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});