// 3 sum

const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
    const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    const target = arr[i] * -1;
    const subResult = twoSumApproach(i + 1, target, arr);
    result.push(...subResult);
  }
  console.log(result);
};

const twoSumApproach = (j, target, arr) => {
  let k = arr.length - 1;
  const result = [];
  while (j < k) {
    const leftVal = arr[j];
    const rightVal = arr[k];
    if (leftVal + rightVal > target) {
      k--;
    } else if (leftVal + rightVal < target) {
      j++;
    } else {
      result.push([target * -1, leftVal, rightVal]);
      while (j < k && arr[j] === arr[j + 1]) {
        j++;
      }
      while (j < k && arr[k] === arr[k - 1]) {
        k--;
      }
      j++;
      k--;
    }
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, 4]);
