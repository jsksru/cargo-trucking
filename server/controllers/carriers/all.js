const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');
const CLIENTS_FILE = path.resolve('server/data/','clients.json');
const CARRIERS_FILE = path.resolve('server/data/','carriers.json');

module.exports = async(req, res) => {
  try {
    const requestsFileData = await fs.readFile(FILE_NAME);
    const clientsFileData = await fs.readFile(CLIENTS_FILE);
    const carriersFileData = await fs.readFile(CARRIERS_FILE);

    const requests = JSON.parse(requestsFileData);
    const clients = JSON.parse(clientsFileData);
    const carriers = JSON.parse(carriersFileData);

    

    const mappedData = requests.map(item => {
      const client = clients.find(i => i.id === item.client);
      const carrier = carriers.find(i => i.id === item.carrier);

      return {
        id: item.id,
        datetime: item.datetime,
        client: client.name,
        carrier: carrier.name,
        phone: carrier.phone,
        code: carrier.code,
      };
    });
  
    res.status(200).json(mappedData);
  }
  catch(e) {
    console.log(e);
    res.status(404).json({error: 'No data'});
  }
};