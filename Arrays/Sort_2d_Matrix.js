// O(n^2)
const matrix = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 9, 6],
];

function sortMatrix(arr) {
  const rows = arr.length;
  const col = arr[0].length;
  const size = rows * col;

  // comparing first element of matrix with its next one and swapping accordingly

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1; j++) {
      if (
        arr[Math.floor(j / col)][j % col] >
        arr[Math.floor((j + 1) / col)][(j + 1) % col]
      ) {
        const temp = arr[Math.floor(j / col)][j % col];
        arr[Math.floor(j / col)][j % col] =
          arr[Math.floor((j + 1) / col)][(j + 1) % col];
        arr[Math.floor((j + 1) / col)][(j + 1) % col] = temp;
      }
    }
  }
}

const printMatrix = (arr) => {
  const rows = arr.length;
  const cols = arr[0].length;
  for (let i = 0; i < rows; i++) {
    console.log("Row " + i);
    for (let j = 0; j < cols; j++) {
      console.log(arr[i][j] + "");
    }
  }
};

sortMatrix(matrix);
printMatrix(matrix);
