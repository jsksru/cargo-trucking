const express = require('express');
const Router = express.Router();
const RequestsController = require('../controllers/requests');

Router.get('/', RequestsController.getAll);

Router.get('/:id', RequestsController.getById);

Router.delete('/:id', RequestsController.deleteById);

Router.post('/', RequestsController.addNew);

Router.put('/:id', RequestsController.editById);

module.exports = Router;