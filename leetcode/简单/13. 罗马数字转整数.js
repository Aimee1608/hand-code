/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  const other = new Map([
    ['IV', 2],
    ['IX', 2],
    ['XL', 20],
    ['XC', 20],
    ['CD', 200],
    ['CM', 200]
  ])
  let total = 0
  for (let i = 0; i < s.length; i++) {
    total += map.get(s[i])
  }
  for (let [key, val] of other) {

    const len = s.split(key).length - 1
    // console.log('key', key, val, s.split(key), len)
    total -= len * val
  }
  return total
};
console.log(romanToInt('IV'))

var romanToInt2 = function (s) {
  const map = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])
  let total = 0
  // for 更快
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.substring(i, i + 2))) {
      total += map.get(s.substring(i, i + 2))
      i++
    } else {
      total += map.get(s[i])
    }
  }
  // let i = 0
  // while (i < s.length) {
  //   if (map.has(s.substring(i, i + 2))) {
  //     total += map.get(s.substring(i, i + 2))
  //     i += 2
  //   } else {
  //     total += map.get(s[i])
  //     i++
  //   }
  // }

  return total
};
console.log(romanToInt2('IV'))



var romanToInt3 = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  let total = 0
  // for 更快
  for (let i = 0; i < s.length; i++) {
    const item = map.get(s[i])
    if (item < map.get(s[i + 1])) {
      total -= item
    } else {
      total += item
    }
  }
  // let i = 0
  // while (i < s.length) {
  //   if (map.has(s.substring(i, i + 2))) {
  //     total += map.get(s.substring(i, i + 2))
  //     i += 2
  //   } else {
  //     total += map.get(s[i])
  //     i++
  //   }
  // }

  return total
};
console.log(romanToInt3('IV'))