const fs = require('fs').promises;
const { TableBody } = require('@material-ui/core');
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');
const CLIENTS_FILE = path.resolve('server/data/','clients.json');
const CARRIERS_FILE = path.resolve('server/data/','carriers.json');

const sortData = (array, field, reverse = false) => {
  const sortByField = (field) => {
    if (reverse) {
      return (a, b) => a[field] < b[field] ? 1 : -1;
    }
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  return [...array].sort(sortByField(field));
};

module.exports = async(req, res) => {
  try {
    const requestsFileData = await fs.readFile(FILE_NAME);
    const clientsFileData = await fs.readFile(CLIENTS_FILE);
    const carriersFileData = await fs.readFile(CARRIERS_FILE);

    const requests = JSON.parse(requestsFileData);
    const clients = JSON.parse(clientsFileData);
    const carriers = JSON.parse(carriersFileData);

    let sortedData = requests;
    
    if (req.query && req.query.sort) {
      if (req.query.reverse && req.query.reverse === 'true') {
        sortedData = sortData(sortedData, req.query.sort, true);
      } else {
        sortedData = sortData(sortedData, req.query.sort);
      }
    }

    if (req.query && req.query.search && req.query.search !== '') {
      sortedData = sortedData.filter(item => {
        return item.comments.toLowerCase().indexOf(req.query.search.toLowerCase()) !== -1;
      });
    }

    const mappedData = sortedData.map(item => {
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