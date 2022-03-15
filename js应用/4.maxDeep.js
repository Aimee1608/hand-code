// 1, "depth", true, null, {}, [] => 1
// [1,2,3, [2], 1] => 3
// {"test": 123} => 2
function maxDeep(target) {
  // TODO
  if (typeof target != 'object') {
    return 1
  }
  const help = (val, depth) => {
    if (typeof val === 'object') {
      let max = depth
      for (let key in val) {
        if (val.hasOwnProperty(key)) {
          max = Math.max(max, help(val[key], depth + 1))
        }
      }
      return max
    }
    return depth
  }
  return help(target, 1)
}
console.log(maxDeep(1))
console.log(maxDeep('depth'))
console.log(maxDeep(true))
console.log(maxDeep(null))
console.log(maxDeep({}))
console.log(maxDeep([]))
console.log(maxDeep([1, 2, 3, [2], 1]))
console.log(maxDeep({ test: 123 }))
