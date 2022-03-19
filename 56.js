// merge intervals

const mergeInterval = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  const result = [arr[0]];

  for (const data of arr) {
    const e1 = result[result.length - 1][1];
    const s2 = data[0];
    const e2 = data[1];
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(data);
    }
  }
  console.log(result);
};

mergeInterval([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
