// n*logN

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 11, 13, 24],
];

const search = (arr, target) => {
  const rows = arr.length;
  const cols = arr[0].length;
  let leftIdx = 0;
  let rightIdx = rows * cols - 1;

  while (leftIdx <= rightIdx) {
    const middle = Math.floor((leftIdx + rightIdx) / 2);
    const middleValue = arr[Math.floor(middle / cols)][middle % cols];
    if (target === middleValue) {
      return middle;
    }
    if (target < middleValue) {
      rightIdx = middle - 1;
    } else {
      leftIdx = middle + 1;
    }
  }
  return -1;
};

const test = search(matrix, 48);
console.log(test);
