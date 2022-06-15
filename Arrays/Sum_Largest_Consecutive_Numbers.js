const sumOfConsecutiveNumbers = (arr, n) => {
  if (n > arr) {
    return;
  }
  // main loop will run (arr.length - n + 1) times
  const len = arr.length - n + 1;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let tempSum = 0;
    for (let j = 0; j < n; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) {
      max = tempSum;
    }
  }
  return max;
};

const arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];
console.log(sumOfConsecutiveNumbers(arr, 4));
