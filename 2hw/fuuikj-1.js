function largestRadialSum(arr, d) {
    let distance = arr.length / d;
      let i = 0;
      let summedHonor = []
      while (i < distance) {
          summedHonor.push(0)
          for(let j = i; j < arr.length; j += distance) {
              summedHonor[i] += arr[j];
          }
          i++;
      }
  
      return Math.max(...summedHonor);
  }
console.log(largestRadialSum([1, 2, 3, 4], 2));
console.log(largestRadialSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestRadialSum([1, 1, 0], 1));