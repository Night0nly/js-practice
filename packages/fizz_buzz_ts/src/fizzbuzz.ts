const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZ_BUZZ = 'FizzBuzz';

export default class FizzBuzz {
  private readonly fizzBuzz: number;
  constructor(private readonly fizz: number, private readonly buzz: number) {
    this.fizzBuzz = fizz * buzz;
  }

  getResultList(start: number, end: number): (string | number)[] {
    return Array.from(new Array(end - start + 1), (item, index) => {
      const number: number = start + index;
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
