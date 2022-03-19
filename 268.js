// missing number in array

const missing = (arr) => {
  const len = arr.length;
  const sumOfTotalArr = (len * (len + 1)) / 2;
  const sumOfExistingNumbers = arr.reduce((acc, num) => acc + num, 0);
  const missingNumber = sumOfTotalArr - sumOfExistingNumbers;
  console.log(missingNumber);
};

missing([3, 0, 1, 4, 2]);
