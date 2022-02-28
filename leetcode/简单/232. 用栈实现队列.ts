class MyQueue {
  arr = [];
  constructor() {
      this.arr = [];
  }

  push(x: number): void {
      this.arr.push(x);
  }

  pop(): number {
     const item =  this.arr.shift();
     return item
  }

  peek(): number {
      return this.arr[0]
  }

  empty(): boolean {
      return this.arr.length === 0;
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/