class EventBus {
  constructor() {
    this.events = {}
  }
  on(name, callback) {
    let event = this.events[name] || []
    event.push(callback)
    this.events[name] = event
  }
  emit(name, ...rest) {
    let event = this.events[name]
    if (event && event.length > 0) {
      for (let i = 0; i < event.length; i++) {
        event[i](...rest)
      }
    }
  }
  off(name, callback) {
    let event = this.events[name]
    if (event && event.length > 0) {
      this.events[name] = event.filter(item => item !== callback)
    }
  }
  once(name, callback) {
    const fn = (...rest) => {
      callback(...rest)
      this.off(name, fn)
    }
    this.on(name, fn)
  }
}
function fn1(name) {
  console.log('fn1', name)
}
function fn2(name) {
  console.log('fn2', name)
}
const bus = new EventBus()
bus.on('test', fn1)
bus.once('test', fn2)
bus.emit('test', 'test')
