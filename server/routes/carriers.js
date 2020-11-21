const express = require('express');
const Router = express.Router();
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');

Router.get('/', async (req, res) => {
  try {
    const fileData = await fsPromises.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
});

Router.post('/', async (req, res) => {
  try {
    const fileData = await fsPromises.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    const lastindex = data[data.length - 1].id;
    data.push({
      ...req.body,
      id: lastindex + 1,
      datetime: new Date(),
    });
    const newLength = data.length;
    await fsPromises.writeFile(FILE_NAME, JSON.stringify(data));
    res.status(201).json({
      saved: true,
      newLength,
      data: data[newLength - 1]
    });
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
});

module.exports = Router;