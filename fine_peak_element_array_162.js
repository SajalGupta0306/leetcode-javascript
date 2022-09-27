// find peak element

const findPeak = (arr) => {
  if (arr.length === 1) {
    console.log(0);
  }
  if (arr[0] > arr[1]) {
    console.log(0);
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    console.log(arr.length - 1);
  }

  for (let i = 0; i < arr.length - 2; i++) {
    const left = arr[i];
    const mid = arr[i + 1];
    const right = arr[i + 2];
    if (mid > left && mid > right) {
      console.log(i + 1);
    }
  }
};

findPeak([1, 2, 3, 1, 5, 6, 2]);
