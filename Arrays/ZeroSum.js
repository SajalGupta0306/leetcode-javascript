const findZeroPairSum = (...arr) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    if (arr[leftIdx] + arr[rightIdx] === 0) {
      return [arr[leftIdx], arr[rightIdx]];
    } else if (arr[leftIdx] + arr[rightIdx] > 0) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return [];
};

// this logic expects array to be sorted always
console.log(findZeroPairSum(2, 1, -1, 0, -2, 8, 9, 18));

// O(n)
