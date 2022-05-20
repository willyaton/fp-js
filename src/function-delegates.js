/**
  * Function Delegates
  * Function delegates encapsulate a method allowing functions to be composed or passed as data.
**/

/**
  * Check numbers equal to 0
  * @constructor
  * @param {number} n - number to look in the array
**/
const isZero = n => n === 0;

/**
  * Check active objects
  * @constructor
  * @param {string} obj - object in the array
**/
const isActive = obj => obj.active === true;

module.exports = {
  isZero,
  isActive
};
