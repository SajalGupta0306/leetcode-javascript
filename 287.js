// find duplicate number

const duplicate = (arr) => {
  let res = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      res = arr[i];
    }
  }
  console.log(res);
};

duplicate([3, 2, 1, 2]);
