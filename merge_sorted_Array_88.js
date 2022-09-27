// MERGE SORTED ARRAY
const mergeSortedArr = (num1, m, num2, n) => {
  let firstIdx = m - 1;
  let secondIdx = n - 1;
  let mainIdx = num1.length - 1;

  while (secondIdx >= 0) {
    const firstVal = num1[firstIdx];
    const secondVal = num2[secondIdx];
    if (firstVal > secondVal) {
      num1[mainIdx] = firstVal;
      firstIdx--;
    } else {
      num1[mainIdx] = secondVal;
      secondIdx--;
    }
    mainIdx--;
  }
  console.log(num1);
};

mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
