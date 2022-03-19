// rotate array

const rotateArr = (arr, k) => {
  // k is bigger than length of array
  const len = arr.length;
  k = k % len;
  const diff = len - k;
  const remaining = arr.slice(diff);
  arr.splice(diff, k);
  arr.unshift(...remaining);
  console.log(arr);
};

rotateArr([1, 2, 3, 4, 5, 6, 7], 3);
