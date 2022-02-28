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

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');
console.log(child1);
child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18

// 关键的三步
var F = function () { };

F.prototype = Parent.prototype;

Child.prototype = new F();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');
console.log(child1);
// console.log(new Parent())