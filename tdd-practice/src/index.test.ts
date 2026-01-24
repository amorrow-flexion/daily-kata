import {extendedFizzBuzz} from "./index";

describe('ExtendedFizzBuzz tests', () => {
  test('', () => {
    const expectedResults = ['1', '2', 'Fizz', '4', 'Buzz'];
    const result = extendedFizzBuzz();
    expect(result).toEqual(expectedResults);
  });
});
