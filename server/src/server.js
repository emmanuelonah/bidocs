const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.use(morgan('combined'));
app.use('/api/v1', apiRouter);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname.replace('src', 'public'))));

module.exports = {
  app,
  apiRouter,
};
