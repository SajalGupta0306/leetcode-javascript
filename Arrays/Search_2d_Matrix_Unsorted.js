// O(m + n)

const matrix = [
  [1, 5, 45, 80, 81],
  [6, 7, 48, 82, 83],
  [20, 22, 49, 85, 86],
  [21, 23, 50, 90, 92],
];

const search = (arr, val) => {
  const rows = arr.length;
  const cols = arr[0].length;

  // starting from top right corner

  let i = 0;
  let j = cols - 1;

  while (i < rows && j >= 0) {
    if (arr[i][j] === val) {
      return [i, j];
    }
    if (val < arr[i][j]) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
};

console.log(search(matrix, 48));
