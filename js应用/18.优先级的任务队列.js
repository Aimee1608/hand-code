// 实现一个具有优先级的任务队列，如果优先级相同按照先进先出的顺序
class queue {
  constructor() {
    this.list = {}
    this.count = 0
    this.high = new Set()
  }
  push(item, order) {
    if (this.list[order]) {
      this.list[order].push(item)
    } else {
      this.list[order] = [item]
    }
    this.high.add(order)
    this.count++
  }
  shift() {
    const highOrder = Math.max(...this.high)
    const itemList = this.list[highOrder]
    if (itemList && itemList.length > 0) {
      this.count--

      const item = itemList.shift()
      if (itemList.length === 0) {
        this.high.delete(highOrder)
        delete this.list[highOrder]
      }
      return item
    }
    return
  }
  get size() {
    return this.count
  }
}
const list = new queue()
list.push('a', 1)
list.push('b', 2)
list.push('c', 1)
console.log(list.size)
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
