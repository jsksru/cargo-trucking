const { json } = require('express');
const express = require('express');
const App = express();
const cors = require('cors');
const CarriersRouter = require('./routes/carriers');

App.use(json());
App.use(cors());

App.use('/carriers', CarriersRouter);

module.exports = App;