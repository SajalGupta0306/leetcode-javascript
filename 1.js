// two sum

const twoSum = (arr, val) => {
  const hash = {};
  arr.forEach((value, index) => {
    hash[value] = index;
  });

  arr.forEach((value, i) => {
    const remaining = val - value;
    if (hash[remaining] && hash[remaining] !== i) {
      console.log([i, hash[remaining]]);
    }
  });
};

twoSum([11, 2, 7, 15], 9);
