class Vector {
  constructor(components){
    this.arr = components;
  }

  add({arr}){
    if(this.arr.length !== arr.length) throw new Error();
    return new Vector(this.arr.map((val, idx) => val + arr[idx]));
  }
  
  subtract({arr}){
    if(this.arr.length !== arr.length) throw new Error();
    return new Vector (this.arr.map((val, idx) => val - arr[idx]));
  }

   dot({arr}){
    if(this.arr.length !== arr.length) throw new Error();
    return this.arr.reduce((pre, val, idx) => pre + val * arr[idx], 0);
   }

   norm(){
  return Math.hypot(...this.arr);
   }

   toString() {
    return `(${this.arr})`;
   }

   equals({arr}){
    return this.arr.every((val, idx) => val === arr[idx]);
   }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5,6, 7, 8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.add(c));