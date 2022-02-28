// 1.原型链继承
function Parent() {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log(this.name);
}
function Child() {

}
Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName());

// 2.借用构造函数（经典继承）
function Parent() {
  this.names = ['kevin', 'daisy'];
}
function Child() {
  Parent.call(this);
}
var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

// 3.组合继承
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child1 = new Child('kevin', '18');
child1.colors.push('black');

console.log(child1.name);// kevin
console.log(child1.name);// 18
console.log(child1.colors);// 'red', 'blue', 'green', 'black'

var child2 = new Child('daisy', '20');
console.log(child2.name);// daisy
console.log(child2.age);// 20
console.log(child2.colors); // 'red', 'blue', 'green'

// 4.原型式继承
function createObj(o) {
  function F() { };
  F.prototype = o;
  return new F();
}
var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.friends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]

// 5.寄生式继承
function createObj(o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log('hi')
  }
  return clone;
}

// 6.寄生组合式继承
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

function F() { }
F.prototype = Parent.prototype;
Child.prototype = new F();
var child1 = new Child('kevin', '18');
console.log(child1);



// 封装后
function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

prototype(Child, Parent);