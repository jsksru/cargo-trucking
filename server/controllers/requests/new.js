const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');

module.exports = async(req, res) => {
  try {
    const fileData = await fs.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    let lastindex = 0;
    if (data && data.length > 0) {
      lastindex = data[data.length - 1].id;
    }
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
};