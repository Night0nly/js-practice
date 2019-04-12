import * as chai from 'chai';
import * as chaiThings from 'chai-things';
chai.use(chaiThings).should();
import FizzBuzz from '../src/fizzbuzz';

const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZ_BUZZ = 'FizzBuzz';

let resultList: (number | string)[];

describe('FizzBuzzTS#fizzbuzz', () => {
  beforeEach(() => {
    resultList = new FizzBuzz(3, 5).getResultList(1, 100);
  });

  it('should be Fizz', () => {
    resultList.filter((n, i) => (i + 1) % 3 === 0 && (i + 1) % 5 !== 0)
      .should.all.be.equal(FIZZ);
  });

  it('should be Buzz', () => {
    resultList.filter((n, i) => (i + 1) % 5 === 0 && (i + 1) % 3 !== 0)
      .should.all.be.equal(BUZZ);
  });

  it('should be FizzBuzz', () => {
    resultList.filter((n, i) => (i + 1) % 5 === 0 && (i + 1) % 3 === 0)
      .should.all.be.equal(FIZZ_BUZZ);
  });

  it('should be a number', () => {
    resultList.filter((n, i) => (i + 1) % 5 !== 0 && (i + 1) % 3 !== 0)
      .should.all.match(/^\d+$/);
  });
});
