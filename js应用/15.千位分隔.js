function numFormat(num) {
  return num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    //{n} 匹配确定的n次。
    //+匹配前面的子表达式一次或多次
    // (?=pattern) 在任何匹配 pattern 的字符串开始处匹配查找字符串

    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ','
    })
  })
}

var a = 1234567894532
var b = 673439.4542
console.log(numFormat(a)) // "1,234,567,894,532"
console.log(numFormat(b)) // "673,439.4542"

function fn(num) {
  let tmp = (num + '').split('.')
  let newS = tmp[0]
  let len = newS.length
  let i = len % 3
  let s = newS.substr(0, i)
  while (i < len) {
    const a = newS.substr(i, 3)
    if (s.length > 0) {
      s += ',' + a
    } else {
      s = a
    }
    i += 3
  }
  if (tmp.length > 1) {
    s += '.' + tmp[1]
  }
  return s
}
fn(10000)
fn(10000000)
fn(10000000.88)
