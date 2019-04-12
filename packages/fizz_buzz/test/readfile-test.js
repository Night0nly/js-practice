const chai = require('chai');

chai.should();
chai.use(require('chai-things'));
const path = require('path');
const readFile = require('../src/readfile');

describe('FizzBuzz#readfile', () => {
  it('should be data in specified file ', () => {
    readFile(path.resolve(__dirname, '..', 'resources', 'rule2.json'))
      .should.eql({
        start_number: 1,
        end_number: 300,
        fizz_number: 5,
        buzz_number: 7,
      });
  });

  it('should be data in default file', () => {
    readFile().should.eql({
      start_number: 1,
      end_number: 100,
      fizz_number: 3,
      buzz_number: 5,
    });
  });
});
