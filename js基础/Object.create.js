function objectCreate(proto, propertyObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.')
  }
  if (propertyObject == null) {
    new TypeError('Cannot convert undefined or null to object')
  }

  function fn() {}
  fn.prototype = proto
  let obj = new fn()
  if (propertyObject != undefined) {
    Object.defineProperties(obj, propertyObject)
  }
  if (proto === null) {
    obj.__proto__ = null
  }
  return obj
}
objectCreate(null)

const obj = {
  name: 'nordon'
}

const newObj = Object.create(obj, {
  name: {
    value: 'wy',
    writable: true,
    configurable: true,
    enumerable: true
  },
  age: {
    value: 12,
    writable: true,
    configurable: true,
    enumerable: true
  }
})

const newObj2 = objectCreate(obj, {
  name: {
    value: 'wy',
    writable: true,
    configurable: true,
    enumerable: true
  },
  age: {
    value: 12,
    writable: true,
    configurable: true,
    enumerable: true
  }
})
