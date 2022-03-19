// search in a 2d matrix

const search2D = (matrix, val) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = matrix[Math.floor(mid / cols)][mid % cols];
    if (midVal === val) {
      return true;
    }
    if (midVal > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  search2D(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    16
  )
);
