const express = require('express');
const Router = express.Router();
const CarriersController = require('../controllers/carriers');

Router.get('/', CarriersController.getAll);

Router.get('/:id', CarriersController.getOne);

Router.delete('/:id', CarriersController.deleteById);

Router.post('/', CarriersController.addNew);

module.exports = Router;