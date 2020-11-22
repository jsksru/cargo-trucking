const express = require('express');
const Router = express.Router();
const CarriersController = require('../controllers/carriers');

Router.get('/', CarriersController.getAll);

Router.get('/:id', CarriersController.getById);

Router.delete('/:id', CarriersController.deleteById);

Router.post('/', CarriersController.addNew);

Router.put('/:id', CarriersController.editById);

module.exports = Router;