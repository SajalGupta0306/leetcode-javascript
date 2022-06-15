const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const printDiagonalSums = (arr) => {
  const rows = arr.length;
  let leftToRightDiag = 0;
  let RightToLeftDiag = 0;
  for (let i = 0; i < rows; i++) {
    leftToRightDiag += arr[i][i];
    RightToLeftDiag += arr[i][rows - i - 1];
  }
  return diag1 + diag2;
};

const result = printDiagonalSums(arr);
console.log(result);
