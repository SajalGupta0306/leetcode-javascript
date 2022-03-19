// remove duplicates from array
const removeDuplicates = (arr) => {
  const hash = {};
  const res = [];
  arr.forEach((val, i) => {
    if (hash[val]) {
      hash[val] = hash[val] + 1;
    } else {
      hash[val] = 1;
    }
  });
  for (const key of Object.keys(hash)) {
    if (hash[key] > 1) {
      res.push(key);
    }
  }
  console.log(res);
};

removeDuplicates([4, 3, 2, 7, 7, 8, 2, 3, 1]);
