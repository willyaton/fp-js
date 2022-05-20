const { convertUnits } = require('../currying');


describe('Currying', () => {
  test('Should convert miles to kilometers', () => {
    const milesToKm = convertUnits('km', 1.60936, 0);
    expect(milesToKm(10)).toBe('16.09km');
  });

  test('Should convert pounds to kg', () => {
    const poundsToKg = convertUnits('kg', 0.45460, 0);
    expect(poundsToKg(2.5)).toBe('1.14kg');
  });

  test('Should convert Farenheit to Celcius', () => {
    const farenheitToCelcius = convertUnits('C', 0.5556, -32);
    expect(farenheitToCelcius(98)).toBe('36.67C');
  });

  test('Should convert array of pounds weights into kilograms', () => {
    const weightsInPounds = [5, 15.4, 9.8, 100];
    const poundsToKg = convertUnits('kg', 0.45460, 0);
    const weightsInKg = weightsInPounds.map(poundsToKg);
    const result = ['2.27kg', '7.00kg', '4.46kg', '45.46kg'];
    expect(weightsInKg).toEqual(result);
  });
});
