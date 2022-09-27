//  SET MATRIX ZEROES - whereved in matrix, there is 0 set all rows and columns to 0

const matrixZero = (matrix) => {
  const arrContainingZeroIndexElem = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        arrContainingZeroIndexElem.push([row, col]);
      }
    }
  }

  for (const arr of arrContainingZeroIndexElem) {
    const rowValue = arr[0];
    const colValue = arr[1];
    replaceZeros(rowValue, colValue, matrix);
  }
  console.log(matrix);
};

const replaceZeros = (r, c, matrix) => {
  //   for (let i = 0; i < matrix.length; i++) {
  //     matrix[i][c] = 0;
  //   }
  for (let i = 0; i < matrix.length; i++) {
    matrix[r][i] = 0;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }
};

matrixZero([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
