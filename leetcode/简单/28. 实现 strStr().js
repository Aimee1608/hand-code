/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  if (haystack.length < needle.length) return -1
  let index = 0;
  while (index < haystack.length) {
    let m = 0;
    for (let i = 0; i < needle.length; i++) {
      if (needle[i] === haystack[index + i]) {
        m++
      } else {
        break
      }
    }
    if (m === needle.length) {
      return index
    }
    index++
  }
  return -1
};

console.log(strStr('hello', 'll'))