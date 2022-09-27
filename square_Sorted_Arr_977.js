// SQUARES OF A SORTED ARRAY

const squareOfSorted = (arr) => {
  const result = new Array(arr.length).fill(0);
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let resultIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    const leftVal = Math.pow(arr[leftIdx], 2);
    const rightVal = Math.pow(arr[rightIdx], 2);
    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      rightIdx--;
    } else if (leftVal > rightVal) {
      result[resultIdx] = leftVal;
      leftIdx++;
    }
    resultIdx--;
  }
  console.log(result);
};

squareOfSorted([-4, -1, 0, 3, 10]);
