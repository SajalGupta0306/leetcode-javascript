// TRANSPOSE MATRIX - rows to columns and vice versa

const transpose = (arr) => {
  // size of result matrix
  const resultMatrix = Array.from(Array(arr[0].length), () =>
    Array(arr.length)
  );

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      resultMatrix[col][row] = arr[row][col];
    }
  }

  for (const row of resultMatrix) {
    row.reverse();
  }

  console.log(resultMatrix);
};

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]);
