const countOfUniqueNumbers = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }

  const hash = {};
  arr.forEach((elem) => {
    if (hash[elem]) {
      hash[elem] += 1;
    } else {
      hash[elem] = 1;
    }
  });

  return Object.keys(hash).length;
};

const arr = [1, 2, 3, 4, 5, 7, 8, 8, 9];
console.log(countOfUniqueNumbers(arr));
