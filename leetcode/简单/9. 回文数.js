/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  const s = x + '';
  const single = s.length % 2 != 0

  let leftEnd = parseInt(s.length / 2)
  let rightStart = single ? parseInt(s.length / 2 + 1) : parseInt(s.length / 2)

  const left = s.substring(0, leftEnd)
  const right = s.substring(rightStart)
  const newRight = right.split('').reverse().join('')
  if (left === newRight) {
    return true
  }
  return false
};
console.log(isPalindrome(1341))


var isPalindrome2 = function (x) {

  if (x < 0 || (x !== 0 && x % 10 == 0)) {
    return false
  }
  let r = 0;
  while (x > r) {
    const n = x % 10
    r = r * 10 + n
    x = parseInt(x / 10)
  }

  return x === r || x === parseInt(r / 10)
};
console.log(isPalindrome2(121))


var isPalindrome3 = function (x) {
  let r = x.toString.split('').reverse().join('');
  return r == x
};