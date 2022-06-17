const str = "Hello";
const isPal = (str) => {
  const val = str.trim().toLowerCase();
  let result = "";
  for (let i = val.length - 1; i >= 0; i--) {
    result = result + val.charAt(i);
  }
  return val === result;
};

console.log(isPal(str));
