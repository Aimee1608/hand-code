function myInstanceof(left, right) {
  let proto = left.__proto__;
  while (proto) {
    if (right.prototype === proto) return true
    proto = proto.__proto__
  }
  return false
}

class Person {

}
const a = new Person();

console.log(myInstanceof(a, Person));