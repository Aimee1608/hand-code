class MinStack {
  arr = [];
  constructor() {
  }

  push(val: number): void {
      this.arr.push(val);
  }

  pop(): void {
      this.arr.pop();
  }

  top(): number {
      return this.arr[this.arr.length-1]
  }

  getMin(): number {
      let min = this.arr[0]
      for(let val of this.arr){
          min = val<min? val: min
      }
      return min
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/


class MinStack2 {
  arr = [];
  minStack = [];
  constructor() {
  }

  push(val: number): void {
      this.arr.push(val);
      if((this.minStack.length>0&& val<=this.minStack[this.minStack.length-1])|| this.minStack.length===0){
          this.minStack.push(val);
      }
  }

  pop(): void {
      const val = this.arr.pop();
      if(this.minStack.length>0 && val === this.minStack[this.minStack.length-1]){
          this.minStack.pop();
      }
  }

  top(): number {
      return this.arr[this.arr.length-1]
  }

  getMin(): number {
      
      return this.minStack[this.minStack.length-1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/