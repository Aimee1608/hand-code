// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!
//
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//
// LazyMan('Hank').eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//
// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//
// 以此类推。

function LazyMan(name) {
  return new Man(name)
}
class Man {
  constructor(name) {
    this.name = name
    this.timer = null
    this.tasks = []
    this.tasks.push(() => {
      console.log(`Hi This is ${name}`)
    })
  }
  eat(value) {
    this.tasks.push(() => {
      console.log('Eat ' + value)
    })
    return this.next()
  }
  sleep(time) {
    this.tasks.push(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            console.log(`Wake up after ${time}`)
            resolve()
          }, time * 1000)
        })
    )
    return this.next()
  }
  sleepFirst(time) {
    this.tasks.unshift(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            console.log(`Wake up after ${time}`)
            resolve()
          }, time * 1000)
        })
    )
    return this.next()
  }
  next() {
    clearTimeout(this.timer)
    this.timer = setTimeout(async () => {
      for (let i = 0; i < this.tasks.length; i++) {
        await this.tasks[i]()
      }
    }, 0)
    return this
  }
}

LazyMan('Hank').sleep(10).eat('dinner')
LazyMan('Hank').sleepFirst(5).eat('supper')

class LazyMan2 {
  constructor(name) {
    this.name = name
    this.tasks = []
    this.sayName()
    setTimeout(() => {
      this.run()
    }, 0)
  }
  sayName() {
    this.tasks.push(() => {
      console.log(`Hi This is ${this.name}!`)
      this.run()
    })
    return this
  }
  run() {
    if (this.tasks.length > 0) {
      this.tasks.shift()()
    }
  }
  eat(type) {
    this.tasks.push(() => {
      console.log('eat ' + type)
      this.run()
    })
    return this
  }
  sleep(time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log('weekup after ' + time)
        this.run()
      }, time * 1000)
    })
    return this
  }
  sleepFirst(time) {
    this.tasks.unshift(() => {
      setTimeout(() => {
        console.log('weekup after ' + time)
        this.run()
      }, time * 1000)
    })
    return this
  }
}
