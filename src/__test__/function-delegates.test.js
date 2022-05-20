const { isZero, isActive } = require('../function-delegates');


describe('Function delegates', () => {
  /**
    * How many zeros are in the array
  **/
  test('Should give the length of how many zeros are in the array', () => {
    const arr = [1, 0, 5, 0, 7, 0, 4, 0, 1];
    expect(arr.filter(isZero).length).toBe(4);
  });

  /**
    * How many active post in the array
  **/
  test('Should give the length of how many active post are in the array', () => {
    const arr = [
      { id: 1, title: 'Hello World', active: false },
      { id: 2, title: 'Justo Commodo Pharetra', active: true },
      { id: 3, title: 'Vehicula Risus Ornare Dapibus', active: false }
    ];

    expect(arr.filter(isActive).length).toBe(1);
  });
});
