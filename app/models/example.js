
// This is an example file for functions tested with unit tests, that was used for getting testing with Jest set up. It has no other purpose in this project right now 

/**
 * Simple sum method to use for testing while getting unit tests set up
 * 
 * @param {Number} a Some number
 * @param {Number} b Some number 
 * @returns {Number} Sum of a and b
 */
function exampleSum(a, b) {
    return a + b;
}

/**
 * Simple subtraction method to use for testing while getting unit tests set up
 * 
 * @param {Number} a Some number
 * @param {Number} b Some number
 * @returns {Number} Difference between a and b
 */

function exampleSubtract(a, b) {
  return a - b;
}

module.exports = {
  exampleSum,
  exampleSubtract
}
