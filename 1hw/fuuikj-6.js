function descendingOrder(n){
    const numToString = n.toString().split('');
    const sortedNum = numToString.sort((a, b) => b - a);

    const result = parseInt(sortedNum.join(''));
    return result;
}
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
