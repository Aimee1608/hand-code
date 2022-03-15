// 常规柯里化
function curry(fn) {
  const len = fn.length
  return function getFn(...arg) {
    if (arg.length === len) {
      return fn(...arg)
    } else {
      return getFn.bind(null, ...arg)
    }
  }
}

function fn(a, b, c) {
  console.log(a + b + c)
}
const foo = curry(fn)
var f1 = foo(1, 2, 3)
var f2 = foo(1)(2, 3)
var f3 = foo(1)(2)(3)

// 变形 可以获取getValue
const foo2 = (...arg) => {
  function newFn(...newArg) {
    return foo2(...arg, ...newArg)
  }
  newFn.getValue = () => {
    return arg.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }
  return newFn
}
var f21 = foo2(1, 2, 3)
console.log(f21.getValue()) // 6 输出是参数的和
var f22 = foo2(1)(2, 3)
console.log(f22.getValue()) // 6
var f23 = foo2(1)(2)(3)(4)
console.log(f23.getValue()) // 10
