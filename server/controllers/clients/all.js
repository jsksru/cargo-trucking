const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','clients.json');

module.exports = async(req, res) => {
  try {
    const clientsFileData = await fs.readFile(FILE_NAME);
    const clients = JSON.parse(clientsFileData);
    res.status(200).json(clients);
  }
  catch(e) {
    console.log(e);
    res.status(404).json({error: 'No data'});
  }
};