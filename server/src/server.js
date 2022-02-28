const path = require('path');
const morgan = require('morgan');
const express = require('express');

const apiRouter = require('./routes/api');

const app = express();

app.use(express.json());

app.use(morgan('combined'));

app.use('/api/v1', apiRouter);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'templates')));

app.use(express.static(path.join(__dirname.replace('src', 'public'))));

app.all('*', (req, res) => {
  res.status(404).send('ENDPOINT NOT FOUND');
});

module.exports = app;
