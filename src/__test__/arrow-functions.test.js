const { multiply, add, sub, divide } = require('../arrow-functions');

describe('Arrow Functions', () => {
  /**
    * Test the multiply function
  **/
  test('Should multiply 10 * 60 to equal 600', () => {
    expect(multiply(10, 60)).toBe(600);
  });

  test('Should multiply 55 * 200 to equal 11000', () => {
    expect(multiply(55, 200)).toBe(11000);
  });

  /**
    * Test the add function
  **/
  test('Should sum 40 + 90 to equal 130', () => {
    expect(add(40, 90)).toBe(130);
  });

  test('Should sum 250 + 100 to equal 350', () => {
    expect(add(250, 100)).toBe(350);
  });

  /**
    * Test the substraction function
  **/
  test('Should substract 10 - 5 to be equal 5', () => {
    expect(sub(10, 5)).toBe(5);
  });

  test('Should substract 40 - 45 to be equal -5', () => {
    expect(sub(40, 45)).toBe(-5);
  });

  /**
    * Test the divide function
  **/
  test('Should divide 50 / 10 to be equal 5', () => {
    expect(divide(50, 10)).toBe(5);
  });

  test('Should divide 300 / 34 to be equal 8.823529411764706', () => {
    expect(divide(300, 34)).toBe(8.823529411764706);
  });
});
