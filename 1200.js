// MINIMUM ABSOLUTE DIFFERENCE

const minDiff = (arr) => {
  let min = Infinity;
  const result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i] - arr[i + 1];
    min = Math.min(diff, min);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i] - arr[i + 1];
    if (min === diff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  console.log(result);
};

minDiff([4, 2, 1, 3]);
