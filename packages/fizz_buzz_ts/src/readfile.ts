import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_PATH = path.resolve(__dirname, '..', 'resources', 'rule1.json');

interface Data {
  start_number: number;
  end_number: number;
  fizz_number: number;
  buzz_number: number;
}

const validate = (data: Data) =>
    ![data.start_number, data.end_number, data.fizz_number, data.buzz_number]
        .some(v => Number.isNaN(Number(v)));

const readFile = (filePath?: string) => {
  const data = JSON.parse(fs.readFileSync(filePath || DEFAULT_PATH).toString());
  if (!validate(data)) {
    throw new Error('Invalid input data');
  }
  return data;
};

export default readFile;
