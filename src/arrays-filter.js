/**
  * Array Filter
  * The filter() method creates a new array with all elements that
  * pass the test implemented by the provided function.
**/

/**
  * Filter negative numbers
  * @constructor
  * @param {array} a - array
**/
const fnn = (a) => a.filter((x) => x > 0);

/**
  * Filter arrays with a regex values
  * @constructor
  * @param {array} a - array
  * @param {string} r - regex value to filter
**/
const frv = (a, r) => a.filter((x) => x.match(r));

/**
  * filters items based on search criteria
  * @constructor
  * @param {array} a - array to search
  * @param {string} q - query string
**/
const fibs = (a, q) => a.filter((e) => e.toLowerCase().indexOf(q.toLowerCase()) > -1);

module.exports = {
  fnn,
  frv,
  fibs
};
