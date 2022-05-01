const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
let encodeLine = (str) =>{
  let result = "";
  for (let i = 0; i < str.split("").length; i++) {
    let count = 1;
    let s = str[i];

    while (s === str[i + 1]) {
      count++;
      i++;
    }
    count > 1 ? (result += count + s) : (result += s);
  }
  return result;
}

module.exports = {
  encodeLine,
};