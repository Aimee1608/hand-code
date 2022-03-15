// 只考虑对象数组类型
function deepClone(obj) {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key]
      newObj[key] = typeof val === 'object' && val != null ? deepClone(val) : val
    }
  }
  return newObj
}

// 考虑Date RegExp类型
const isObject = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

function deepClone2(obj, map = new WeakMap()) {
  if (typeof obj !== 'object') return obj
  if (map.get(obj)) {
    return map.get(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (isObject(obj)) {
    const newObj = obj instanceof Array ? [] : {}
    map.set(obj, newObj)
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key], map)
      }
    }
    return newObj
  } else {
    return obj
  }
}

// 为什么使用 WeakMap 不使用Map?

//  WeakMap 是一堆键/值对的集合，他的键只能是对象，并且健是弱引用的。会被垃圾回收机制自动回收
//  map 的话对象之间存在强引用的关系，虽然可以手动释放，但是map 和 target 依然存在强引用的关系。
//  如果克隆的对象比较庞大时，Weakmap 不会对内存造成非常大的额外消耗
