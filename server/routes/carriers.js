const express = require('express');
const Router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');
const CLIENTS_FILE = path.resolve('server/data/','clients.json');
const CARRIERS_FILE = path.resolve('server/data/','carriers.json');

Router.get('/', async (req, res) => {
  try {
    const fileData = await fs.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
});

Router.get('/:id', async (req, res) => {
  try {
    const requestsFileData = await fs.readFile(FILE_NAME);
    const clientsFileData = await fs.readFile(CLIENTS_FILE);
    const carriersFileData = await fs.readFile(CARRIERS_FILE);

    const requests = JSON.parse(requestsFileData);
    const clients = JSON.parse(clientsFileData);
    const carriers = JSON.parse(carriersFileData);

    const request = requests.find(item => item.id.toString() === req.params.id.toString());
    request.client = clients.find(i => i.id === request.client);
    request.carrier = carriers.find(i => i.id === request.carrier);

    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({error: 'No data'});
    }
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
});

Router.post('/', async (req, res) => {
  try {
    const fileData = await fs.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    const lastindex = data[data.length - 1].id;
    data.push({
      ...req.body,
      id: lastindex + 1,
      datetime: new Date(),
    });
    const newLength = data.length;
    await fs.writeFile(FILE_NAME, JSON.stringify(data));
    res.status(201).json({
      newLength,
      data: data[newLength - 1]
    });
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
});

module.exports = Router;