const { json } = require('express');
const express = require('express');
const App = express();
const CarriersRouter = require('./routes/carriers');

App.use(json());

App.use('/carriers', CarriersRouter);

module.exports = App;