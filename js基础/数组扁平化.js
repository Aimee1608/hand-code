const arr = [1, 2, [3, [4]]]
const newArr1 = arr.flat() // [1,2,3,[4]]
const newArr2 = arr.flat(2) // [1,2,3,4]
const newArr3 = arr.flat(Infinity) // [1,2,3,4]

const list = [1, 2, [3, [4]]]
// 递归
const help = item => {
  let i = 0
  let arr = []
  while (i < item.length) {
    if (Array.isArray(item[i])) {
      arr = arr.concat(help(item[i]))
    } else {
      arr.push(item[i])
    }
    i++
  }
  return arr
}
help(list)

// some

let list = [1, 2, [3, [4]]]

while (list.some(item => Array.isArray(item))) {
  list = [].concat(...list)
}
