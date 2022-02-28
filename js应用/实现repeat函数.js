// 实现String.prototype.repeat
// n不能小于0，n不能为Infinity n不为整数的时候向下取整
function repeat(str, n) {
  if (n < 0 || n === Infinity) throw RangeError('count is not Number')
  let relN = Math.floor(n)
  if (str === '' || relN === 0) return ''
  let newStr = ''
  while (relN > 0) {
    newStr += str
    relN--
  }
  return newStr
}
repeat('abc', 2)
