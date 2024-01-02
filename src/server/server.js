const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const apiHandler = require('./apiHandler.js')
const mongoose = require('mongoose');
const UserController = require('./databaseControllers');

mongoose.connect('mongodb+srv://mayson124:1IW3LRNAKFUnfIV4@stalkstocks.qefr3ka.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../../dist')))

app.get('/api/:symbol', apiHandler.getStocks, (req, res) => {
  res.status(200).json(res.locals.getStocks);
})

const userRouter = express.Router();
app.use('/user', userRouter);

userRouter.post('/', UserController.createUser, (req, res) => res.status(200).json(res.locals.newUser));

userRouter.get('/:username', UserController.getUser, (req, res) => res.status(200).json(res.locals.gotUser));

userRouter.delete('/:username', UserController.deleteUser, (req, res) => res.status(200).json(res.locals.deletedUser));

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