const { json } = require('express');
const express = require('express');
const App = express();
const cors = require('cors');
const path = require('path');

const RequestsRouter = require('./routes/requests');
const ClientsRouter = require('./routes/clients');
const CarriersRouter = require('./routes/carriers');

App.use(json());
App.use(cors());
App.use(express.static(path.join(__dirname, '..','build')));

App.use('/api/requests', RequestsRouter);
App.use('/api/clients', ClientsRouter);
App.use('/api/carriers', CarriersRouter);

App.use((err, request, response, next) => {
  console.log(err);
  response.status(500).json({error: 'Server error'});
});

module.exports = App;