const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','requests.json');

module.exports = async(req, res) => {
  try {
    const fileData = await fs.readFile(FILE_NAME);
    const data = JSON.parse(fileData);
    const index = data.findIndex(item => (item.id).toString() === (req.params.id).toString());
    if (index !== -1) {
      data.splice(index, 1);
    }
    const newLength = data.length;
    await fs.writeFile(FILE_NAME, JSON.stringify(data));
    res.status(200).json({
      newLength,
    });
  }
  catch(e) {
    console.log(e);
    res.status(404).json({error: 'No data'});
  }
};