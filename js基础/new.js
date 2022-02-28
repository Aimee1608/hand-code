function myNew(constructor, ...args) {
  // 判断传参，第一个参数是否是function，如果不是抛出错误
  if (typeof constructor !== 'function') {
    throw error('constructor must be function');
  }
  // 创建实例对象，并将构造函数的原型赋值给实例对象
  const myObj = Object.create(constructor.prototype);
  // 调用构造对象方法，并将传入的参数传递，设置构造函数的this指向为当前实例
  const res = constructor.apply(myObj, args);
  // 判断执行的结果，如果返回的参数是对象或者是函数，则返回改结果，否则返回实例对象
  return (typeof res === 'function' || (typeof res === 'object' && res != null)) ? res : myObj;
}

// 举例中不要用Class类 会报错
function Person(name) {
  this.name = name;
}

const a = myNew(Person, 'aimee');

console.log(a);