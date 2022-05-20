const { mapConsecutive, repeat, greaterThan } = require('../high-order-functions');

describe('High Order Functions', () => {
  test('Should map letters consecutive by two', () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const result = [['a','b'], ['b','c'], ['c','d'], ['d','e'], ['e','f'], ['f','g'], ['g','h']];
    let twoByTwo = mapConsecutive(letters, (x, y) => [x, y]);
    expect(twoByTwo).toEqual(result);
  });

  test('Should map teams consecutive by two', () => {
    const teams = ['Blue Jays', 'Yankees', 'Orioles', 'Tigers', 'White Sox', 'Red Sox', 'Mariners', 'Athletics'];
    const result = [
      ['Blue Jays','Yankees'],
      ['Yankees','Orioles'],
      ['Orioles','Tigers'],
      ['Tigers','White Sox'],
      ['White Sox','Red Sox'],
      ['Red Sox','Mariners'],
      ['Mariners','Athletics']
    ];
    let twoByTwo = mapConsecutive(teams, (x, y) => [x, y]);
    expect(twoByTwo).toEqual(result);
  });

  test('Should add labels to numbers', () => {
    // Empty Array
    let labels = [];
    // Add labels to the array by 5 and Add the word unit
    const addLabels = repeat(5, i => { labels.push(`Room ${i + 1}`) });
    // Expected result
    const result = ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"];

    expect(labels).toEqual(result);
  });

  test('Should check if 20 is greater than 15 to be true', () => {
    let greaterThan15 = greaterThan(15);
    expect(greaterThan15(20)).toBe(true);
  });

  test('Should check if 50 is greater than 65 to be false', () => {
    let greaterThan65 = greaterThan(65);
    expect(greaterThan65(50)).toBe(false);
  });
});
