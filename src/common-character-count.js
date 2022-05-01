const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
let getCommonCharacterCount = (s1, s2) => {
  let len = s1.length > s2.length ? s1.length : s2.length;
  let str = s1.length > s2.length ? s1 : s2;

  let s1Arr = s1.split('');
  let s2Arr = s2.split('');

  let common = {};
  
  for (let i = 0; i < len; i++) {

    let filteredS1 = s1Arr.filter( item => item === str[i]);
    let filteredS2 = s2Arr.filter( item => item === str[i]);
      
    if (filteredS1.length && filteredS2.length && !common[filteredS1[0]]) {
      let count = 0;
      count += filteredS1.length < filteredS2.length ? filteredS1.length : filteredS2.length;

      common[filteredS1[0]] = count;
    }
  }

  let values = Object.values(common);
  values = values.reduce((prev, curr) => curr + prev, 0);
  
  return values;
}

module.exports = {
  getCommonCharacterCount
};