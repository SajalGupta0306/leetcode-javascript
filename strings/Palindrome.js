const str = " Leevl ";
const isPal = (str) => {
  const val = str.trim().toLowerCase();
  const arr = [];
  let result = "";
  for (let i = val.length - 1; i >= 0; i--) {
    arr.push(val.charAt(i));
  }
  for (const item of arr) {
    result += item;
  }
  return val === result;
};

console.log(isPal(str));
