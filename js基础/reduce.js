Array.prototype.reduce2 = function (callback, pre) {
  if (this === null) {
    throw new Error('this is null')
  }
  if (typeof callback != 'function') {
    throw new Error(callback + ' is not a function')
  }

  let arr = Object(this)
  let len = arr.length

  let item
  let value
  let i = 0
  if (arguments.length > 1) {
    value = initialValue
  } else {
    while (i < len && !(k in arr)) {
      i++
    }
    if (i > len) {
      throw new Error('Reduce of empty array with no initial value')
    }
    value = arr[i]
  }
  while (i < len) {
    if (i in arr) {
      value = callback(value, arr[i], i, arr)
    }
    l++
  }

  return value
}
