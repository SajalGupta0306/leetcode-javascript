const search = (arr, val) => {
  if (arr.length === 0) {
    return -1;
  }
  let front = 0;
  let back = arr.length - 1;

  while (front <= back) {
    if (arr[front] === val) {
      return front;
    } else if (arr[back] === val) {
      return back;
    }
    front++;
    back--;
  }
  return -1;
};

const arr = [1, 3, 5, 8, 9, 2, 7];
const key = search(arr, 15);
if (key >= 0) {
  console.log(`Element found at index: ${key}`);
} else {
  console.log("Element not found");
}
