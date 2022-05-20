/**
 * Currying
 * Currying allows a function with multiple arguments to be translated into a sequence of functions. Curried
 * functions can be tailored to match the signature of another function.
**/

/**
  * Unit converter
  * @constructor
  * @param {string} toUnit - Unit to convert
  * @param {number} factor - factor converter
  * @param {number} offset - 
**/
const convertUnits = (toUnit, factor, offset = 0) => input =>
  ((offset + input) * factor).toFixed(2).concat(toUnit);

module.exports = {
  convertUnits
};
