const express = require('express');
const Router = express.Router();
const ClientsController = require('../controllers/clients');

Router.get('/', ClientsController.getAll);

Router.get('/:id', ClientsController.getById);

Router.delete('/:id', ClientsController.deleteById);

Router.post('/', ClientsController.addNew);

Router.put('/:id', ClientsController.editById);

module.exports = Router;