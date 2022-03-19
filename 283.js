// move zeroes at the end

const moveZeroes = (arr) => {
  const prevLen = arr.length;
  arr = arr.filter((val) => val !== 0);
  const newLen = arr.length;
  const diff = prevLen - newLen;
  for (let i = 0; i < diff; i++) {
    arr.push(0);
  }
  console.log(arr);
};

moveZeroes([1, 3, 0, 1, 0, 4, 0, 7, 0, 0, 0, 12]);
