function findEvenIndex(arr){
    for ( let i = 0; i< arr.length; i++){
        const leftSum = arr.slice(0, i).reduce((a, b) => a+b,0)
        const rigthSum = arr.slice(i + 1).reduce((a, b) => a+b, 0)

        if(leftSum === rigthSum){
            return i;
        }
    }
    return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));

