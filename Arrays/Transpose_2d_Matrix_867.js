// TRANSPOSE MATRIX - rows to columns and vice versa

const transpose = (arr) => {
  const resultMatrix = Array.from({ length: arr[0].length }, () =>
    new Array(arr.length).fill(0)
  );

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      resultMatrix[col][row] = arr[row][col];
    }
  }

  // for (const row of resultMatrix) {
  //   row.reverse();
  // }

  console.log(resultMatrix);
};

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
