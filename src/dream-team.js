const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
let createDreamTeam = (members) => {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return Array.isArray(members) === true
    ? members
      .map((el) => (typeof el === "string" ? el.trim().charAt(0).toUpperCase() : ""))
      .sort()
      .join("")
    : false
        
}

module.exports = {
  createDreamTeam,
};