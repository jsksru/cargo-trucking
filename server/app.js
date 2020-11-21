const { json } = require('express');
const express = require('express');
const App = express();
const cors = require('cors');
const CarriersRouter = require('./routes/carriers');

App.use(json());
App.use(cors());

App.use('/carriers', CarriersRouter);

App.use((err, request, response, next) => {
  console.log(err);
  response.status(500).json({error: 'Server error'});
});

module.exports = App;