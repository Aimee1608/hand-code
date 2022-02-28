class RandomizedSet {
    data = new Set()
    constructor() {
        this.data = new Set();
    }

    insert(val: number): boolean {
        if(this.data.has(val)){
            return false
        } else{
            this.data.add(val);
        }
        return true
    }

    remove (val: number): boolean {
        if(this.data.has(val)){
            this.data.delete(val);
            return true;
        }else{
            return false;
        }
    }

    getRandom(): number {
        let index:number = Math.floor(Math.random()*this.data.size);
        const data = Array.from(this.data) as number[];
        // console.log(data[index]);
        return data[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


 class RandomizedSet2 {
    data = new Map()
    arr = []
    constructor() {
        this.data = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        if(this.data.has(val)){
            return false
        } else{
            this.data.set(val, this.arr.length);
            this.arr.push(val)
        }
        return true
    }

    remove (val: number): boolean {
        if(this.data.has(val)){   
            if(this.arr.length>1){
                const index = this.data.get(val);
                const tmp = this.arr[this.arr.length-1];
                this.arr[index] = tmp
                this.data.set(tmp, index);
                this.arr.pop();
            } else{
                this.arr = []
            }
            this.data.delete(val);
            return true;
        }else{
            return false;
        }
    }

    getRandom(): number {
        let index:number = Math.floor(Math.random()*this.arr.length);
        return this.arr[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */