// 函数的作用是输出字符串中所有被"()"包裹的字符串，getIncludeStrings('(a+b)*c+(c*(d-e)+f)') // 输出 ['a+b', 'd-e', 'c*(d-e)+f']

function getIncludeStrings(str) {
  let res = []
  let arr = []
  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    if (item === '(') {
      arr.push(i)
    } else if (item === ')') {
      const last = arr.pop()
      res.push(str.substring(last + 1, i))
    }
  }
  return res
}
console.log(getIncludeStrings('(a+b)*c+(c*(d-e)+f)'))
