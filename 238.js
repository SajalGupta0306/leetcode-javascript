// PRODUCT OF ARRAY EXCEPT SELF

const productExceptSelf = (arr) => {
  const left = Array.from(arr.length).fill(0);
  left[0] = 1;
  const right = new Array(arr.length).fill(0);
  right[right.length - 1] = 1;

  for (let i = 1; i < arr.length; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  for (let j = right.length - 2; j >= 0; j--) {
    debugger;
    right[j] = arr[j + 1] * right[j + 1];
  }

  for (let i = 0; i < left.length; i++) {
    arr[i] = left[i] * right[i];
  }

  console.log(arr);
};

productExceptSelf([-1,1,0,3,-3]);

// [1, 2, 3, 4]
// [0, 0, 0, 1];
