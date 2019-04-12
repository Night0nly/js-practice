const FizzBuzz = require('./fizzbuzz');
const readFile = require('./readfile');

const data = readFile(process.argv[2]);
console.log(new FizzBuzz(data.fizz_number, data.buzz_number)
  .getResultList(data.start_number, data.end_number)
  .join('\n'));
