// 1.JS 编码实现模版引擎变量替换。
// cosnt year = '2017';
// const month = '09';
// const day='21';
// const str = `${year}-${month}-${day}`;
// console.log(str) 输出：2017-09-21

function getValue(str, data) {
  let reg = /\$\{(\w+)\}/
  while (reg.test(str)) {
    str = str.replace(reg, (i, a) => {
      return data[a]
    })
  }
  return str
}
const str = '${year}-${month}-${day}'
const data = { year: 2017, month: '09', day: 21 }
console.log(getValue(str, data))

// 第二个模板
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    const name = reg.exec(template)[1]
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}
const template = '我是{{name}},今年{{age}}岁'
const data = {
  name: 'aimee',
  age: 18
}
render(template, data)

function getStr(str, data) {
  const reg = /\$\{(\w+)\}/
  while (reg.test(str)) {
    str = str.replace(reg, (a, i) => data[i])
  }
  return str
}
