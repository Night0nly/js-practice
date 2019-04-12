const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZ_BUZZ = 'FizzBuzz';

class FizzBuzz {
  constructor(fizz, buzz) {
    this.fizz = fizz;
    this.buzz = buzz;
    this.fizzBuzz = fizz * buzz;
  }

  getResultList(start, end) {
    return Array.from(new Array(end - start + 1), (item, index) => {
      const number = start + index;
      if (number % this.fizzBuzz === 0) {
        return FIZZ_BUZZ;
      }
      if (number % this.fizz === 0) {
        return FIZZ;
      }
      if (number % this.buzz === 0) {
        return BUZZ;
      }
      return number;
    });
  }
}

module.exports = FizzBuzz;
