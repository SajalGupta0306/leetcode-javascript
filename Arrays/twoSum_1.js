// two sum

const twoSum = (arr, target) => {
  const hash = {};
  const result = [];
  arr.forEach((value, i) => {
    const remaining = target - value;
    const secondIndex = hash[remaining];
    if (typeof secondIndex === "undefined") {
      hash[value] = i;
    } else {
      result.push([secondIndex, i]);
    }
  });
  return result;
};

console.log(twoSum([8, 1, 7, 1], 9));

// O(n)
