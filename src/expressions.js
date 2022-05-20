/**
 * Expressions Instead of Statements
 * Statements define an action and are executed for their side effect.
 * Expressions produce a result without mutating state.
**/

/**
  * Greet depends on the time of the day
  * @constructor
  * @param {number} hour - hour of the day
**/
const getGreetings = (hour) => hour < 12 ? 'Good Morning' : 'Good Evening';

/**
  * Check Age verification
  * @constructor
  * @param {number} age - age input
**/
const getAgeVerification = (age) => age < 18 ? 'Sorry you are under 18' : 'Welcome to the adults area';

module.exports = {
  getGreetings,
  getAgeVerification
};
