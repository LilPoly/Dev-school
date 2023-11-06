function highAndLow(numbers){
    const numArray = numbers.split(" ").map(Number);
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    return `${max} ${min}`
}
console.log(highAndLow("1 2 3 4 5"));   
console.log(highAndLow("1 2 -3 4 5"));   
console.log(highAndLow("1 9 3 4 -5"));