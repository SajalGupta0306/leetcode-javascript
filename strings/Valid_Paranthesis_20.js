// valid parenthesis in Javascript

const validParanthesis = (str) => {
  const stack = [];
  const paranStr = "()[]{}";
  for (let i = 0; i < str.length; i++) {
    if (paranStr.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
      const open = stack[stack.length - 2];
      const closed = stack[stack.length - 1];
      if (paranStr.includes(open + closed)) {
        stack.pop();
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

console.log(validParanthesis("if (condition[) {}"));
