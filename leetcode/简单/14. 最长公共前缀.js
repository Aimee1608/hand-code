/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let common = strs[0]
  let index = 1;
  while (index < strs.length) {
    let j = 0;
    while (j < common.length && j < strs[index].length) {
      if (common[j] != strs[index][j]) {
        break
      }
      j++
    }
    common = strs[index].substring(0, j)
    if (common === '') {
      return ''
    }
    index++
  }
  return common
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))