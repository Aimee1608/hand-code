/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const left = [];
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (map.has(current)) {
      if (map.get(current) !== left.pop()) {
        return false
      }
    } else {
      left.push(current)
    }
  }
  return left.length === 0
};
console.log(isValid('{[()]}'))


