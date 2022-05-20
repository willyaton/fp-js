/**
  * Higher Order Functions
  * A function that accepts another function as a parameter, or returns another function.
**/

/**
  * Represent a map to consecutive values
  * @constructor
  * @param {array} values - Array of values
  * @param {function} fn - function as a parameter
  * @return {array} result - return a new array
**/
function mapConsecutive(values, fn) {
  let result = [];

  for (let i = 0; i < values.length - 1; i++) {
    result.push(fn(values[i], values[i + 1]));
  }

  return result;
}

/** Will generate action given times the amount number
  * @constructor
  * @param {number} n - number amount
  * @param {function} action - function as a parameter
**/
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

/** Function that can create a new function
  * @constructor
  * @param {number} n - number amount
  * @return {function} return function
**/
const greaterThan = (n) => m => m > n;

module.exports = {
  mapConsecutive,
  repeat,
  greaterThan
};
