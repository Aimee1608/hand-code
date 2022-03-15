function get(obj, path, defaultVal = undefined) {
  if (typeof obj != 'object') throw Error('obj must be object')
  let nPath = path
  if (!Array.isArray(path)) {
    nPath = nPath.replace(/\[(\d+)\]/g, '.$1').split('.')
  }
  const val = nPath.reduce((pre, item) => {
    if (typeof pre === 'undefined') {
      return undefined
    }
    return pre[item]
  }, obj)
  return val !== undefined ? val : defaultVal
}

var object = { a: [{ b: { c: 3 } }] }
console.log(get(object, 'a[0].b.c'))
// => 3
console.log(get(object, ['a', '0', 'b', 'c']))
// => 3
console.log(get(object, 'a.b.c', 'default'))
// => default
