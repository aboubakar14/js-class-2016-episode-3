/* */ 
var arrayPush = require('./arrayPush'),
    baseDifference = require('./baseDifference'),
    baseUniq = require('./baseUniq');
function baseXor(arrays, iteratee, comparator) {
  var index = -1,
      length = arrays.length;
  while (++index < length) {
    var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
  }
  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
}
module.exports = baseXor;
