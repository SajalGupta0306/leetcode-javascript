const checkSquareInArray = (a1, a2) => {
  if (a1.length === 0) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (Math.pow(a1[i], 2) === a2[j]) {
        count += 1;
      }
      if (count === a1.length) {
        return true;
      }
    }
  }
  return false;
};

const arr1 = [1, 2, 2, 4];
const arr2 = [1, 4, 16, 25];

// console.log(checkSquareInArray(arr1, arr2));

// O(n^2)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Optimised
const checkSquareInArrayOptimized = (a1, a2) => {
  if (a1.length === 0) {
    return false;
  }
  const result = {};
  for (const value of a1) {
    if (!result[value]) {
      result[value] = value * value;
    }
  }

  let count = 0;
  for (const key in result) {
    if (a2.includes(result[key])) {
      count += 1;
    }
    if (count === Object.keys(result).length) {
      return true;
    }
  }
  return false;
};

console.log(checkSquareInArrayOptimized(arr1, arr2));
