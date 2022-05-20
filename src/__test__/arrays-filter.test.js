const { fnn, frv, fibs } = require('../arrays-filter');

describe('Array filtering', () => {
  test('Should filter negative numbers', () => {
    const numbers = [2, -44, 6, 66, -56, 4, 34];
    const filter = fnn(numbers);
    const result = [2, 6, 66, 4, 34];
    expect(filter).toEqual(result);
  });

  test('Should filter numbers values from array', () => {
    const words = 'Jean Metzinger 1913 oil on canvas 146 x 114 cm'.split(' ');
    const filter = frv(words, '[a-zA-Z]');
    const result = ['Jean', 'Metzinger', 'oil', 'on', 'canvas', 'x', 'cm'];
    expect(filter).toEqual(result);
  });

  test('Should filter strings values from array', () => {
    const words = 'Jean Metzinger 1913 oil on canvas 146 x 114 cm'.split(' ');
    const filter = frv(words, '^[0-9]+$');
    const result = ['1913', '146', '114'];
    expect(filter).toEqual(result);
  });

  test('Should filter array base on search criteria', () => {
    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    const search = fibs(fruits, 'ap');
    const result = ['apple', 'grapes'];
    expect(search).toEqual(result);
  });
});
