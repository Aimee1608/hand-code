function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('bind must be function')
  }
  const self = this;
  const fNOP = function () { };
  fNOP.prototype = this.prototype;
  const fBound = function (...newArgs) {
    return self.apply(this instanceof fNOP ? this : context, [...args, ...newArgs]);
  }

  fBound.prototype = new fNOP();
  return fBound;
}

function myApply(context, args) {
  // 判断传入的this指向，如果是当前函数的实例，则不需要处理
  // 如果是undefined 或者 null ,则 使用window当作this执行
  if (context === undefined || context === null) {
    context = window;
  }
  context = Object(context);
  // 创建一个新的方法
  context.fn = this;
  const res = args ? context.fn(...args) : context.fn();
  delete context.fn;
  return res;
}

function myCall(context, ...args) {
  const self = this;
  if (context instanceof self) {
    return self(...args);
  }
  // 判断传入的this指向，如果是当前函数的实例，则不需要处理
  // 如果是undefined 或者 null ,则 使用window当作this执行
  if (context === undefined || context === null) {
    context = window;
  }
  // 创建一个新的方法
  context.fn = self;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}


function Person() {
  this.name = 'person1'
  console.log(this.name);
}

function PersonA() {
  this.name = 'personA'
}
function My() {
  Function.prototype.myApply = myApply;
  Function.prototype.myBind = myBind;
  Function.prototype.myCall = myCall;
}
My();

Person.prototype.fn1 = function () {
  console.log(this.name);
}
console.log(Person.prototype);
// const b = new Person();
const a = new PersonA();
const b = {
  name: 'b',
  fn1: function () {
    console.log(this.name)
  }
}
const c = {
  name: 'c'
}

b.fn1.myApply(a)
b.fn1.myCall(c)

b.fn1.myBind(c)()