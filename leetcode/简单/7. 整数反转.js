// 输入：x = -123
// 输出：-321

/**
 * @param {number} x
 * @return {number}
 */
//  Math.pow(x,y) // x的y次幂         x——底数，y——幂数   x,y必须为数字
var reverse = function (x) {

  const list = (parseInt(x) + '').split('')
  const str = list.reverse().join('')
  let result = 0
  if (x < 0) {
    result = 0 - parseInt(str)
  } else {
    result = parseInt(str)
  }
  if (result < -Math.pow(2, 31) || result > (Math.pow(2, 31) - 1)) {
    return 0
  }
  return result
};

// 123
var reverse2 = function (x) {

  let result = 0;
  while (x) {
    result = result * 10 + x % 10
    x = parseInt(x / 10)
  }
  if (result < -Math.pow(2, 31) || result > (Math.pow(2, 31) - 1)) {
    return 0
  }
  return result
}

console.log(reverse2(1534236469))