const { json } = require('express');
const express = require('express');
const App = express();
const cors = require('cors');

const RequestsRouter = require('./routes/requests');
const ClientsRouter = require('./routes/clients');
const CarriersRouter = require('./routes/carriers');

App.use(json());
App.use(cors());

App.use('/requests', RequestsRouter);
App.use('/clients', ClientsRouter);
App.use('/carriers', CarriersRouter);

App.use((err, request, response, next) => {
  console.log(err);
  response.status(500).json({error: 'Server error'});
});

module.exports = App;