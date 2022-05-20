/**
  * Arrow Functions (Fat Arrows)
  * Arrow functions create a concise expression that encapsulates a small piece of functionality.
  * Additionally, arrows retain the scope of the caller inside the function eliminating the need of self = this.
**/

/**
  * Addition of two numbers
  * @constructor
  * @param {number} x - first number
  * @param {number} y - second number
**/
const add = (x, y) => x + y;

/**
  * substraction of two numbers
  * @constructor
  * @param {number} x - first number
  * @param {number} y - second number
**/
const sub = (x, y) => x - y;

/**
  * Multiplication of two numbers
  * @constructor
  * @param {number} x - first number
  * @param {number} y - second number
**/
const multiply = (x, y) => x * y;

/**
  * Divsion of two numbers
  * @constructor
  * @param {number} x - first number
  * @param {number} y - second number
**/
const divide = (x, y) => x / y;

module.exports = {
  multiply,
  add,
  sub,
  divide
};
