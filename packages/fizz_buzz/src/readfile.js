const fileSystem = require('fs');
const path = require('path');

const DEFAULT_PATH = path.resolve(__dirname, '..', 'resources', 'rule1.json');

const validate = data => ![data.start_number, data.end_number, data.fizz_number, data.buzz_number]
  .some(v => Number.isNaN(Number(v)));

const readFile = (filePath) => {
  const data = JSON.parse(fileSystem.readFileSync(filePath || DEFAULT_PATH));
  if (!validate(data)) {
    throw new Error('Invalid input data');
  }
  return data;
};

module.exports = readFile;
