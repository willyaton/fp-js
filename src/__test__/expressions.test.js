const { getGreetings, getAgeVerification } = require('../expressions');



describe('Expressions', () => {
  /**
    * Greetings depending on the time of the day
  **/
  test('Should be equal to Good Morning because is 10 AM', () => {
    expect(getGreetings(10)).toBe('Good Morning');
  });

  test('Should be equal to Good Evening because is 4 PM', () => {
    expect(getGreetings(16)).toBe('Good Evening');
  });

  /**
    * Age verification
    * age verificaton is set to 18
   **/
  test('Should send under age message', () => {
    expect(getAgeVerification(10)).toBe('Sorry you are under 18');
  });

  test('Should send over age message', () => {
    expect(getAgeVerification(34)).toBe('Welcome to the adults area');
  });
});
