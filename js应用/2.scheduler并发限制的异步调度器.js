/**
 * 标题：JS实现一个带并发限制的异步调度器
描述信息
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 */

// const timeout = time =>
//   new Promise(resolve => {
//     setTimeout(resolve, time)
//   })

// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// 实现：
const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })
class Scheduler {
  constructor() {
    this.list = []
    this.handles = []
    this.timer = null
  }
  add(fn) {
    if (this.handles.length < 2) {
      this.handles.push(fn)
    } else {
      this.list.push(fn)
    }
    return this.next()
  }
  next() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const promises = this.handles.map((item, index) => {
        return item().then(() => index)
      })
      this.list.reduce((pre, item) => {
        return pre
          .then(() => {
            return Promise.race(promises)
          })
          .then(index => {
            promises[index] = item().then(() => index)
          })
      }, Promise.resolve())
    }, 0)
    return this
  }
}
const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

// 用这个
class SchedulerSimple {
  constructor(max) {
    this.handle = []
    this.list = []
    this.max = max
  }
  add(fn) {
    return new Promise(resolve => {
      fn.resolve = resolve
      if (this.handle.length < this.max) {
        this.next(fn)
      } else {
        this.list.push(fn)
      }
    })
  }
  next(fn) {
    this.handle.push(fn)
    fn().then(() => {
      fn.resolve()
      this.handle.splice(this.handle.indexOf(fn), 1)
      if (this.list.length) {
        this.next(this.list.shift())
      }
    })
  }
}

// addTask(1000, 1)
// addTask(500, 2)
// addTask(300, 3)
// addTask(400, 4)

// 输出： 2 3 1 4
// 同时只能有两个任务进入队列执行，执行一个之后可以进入下一个

// 第二种

class Scheduler2 {
  constructor(max) {
    this.tasks = []
    this.count = 0
    this.max = max
  }
  add(fn) {
    return new Promise((resolve, reject) => {
      const newFn = () => fn().then(resolve)
      if (this.count < this.max) {
        this.count++
        this.run(newFn)
      } else {
        this.tasks.push(newFn)
      }
    })
  }
  run(fn) {
    fn().then(() => {
      if (this.tasks.length > 0) {
        this.run(this.tasks.shift())
      }
    })
  }
}

const scheduler2 = new Scheduler2(2)
const addTask2 = (time, order) => {
  scheduler2.add(() => timeout(time)).then(() => console.log(order))
}
addTask2(10000, 1)
addTask2(5000, 2)
addTask2(3000, 3)
addTask2(4000, 4)
