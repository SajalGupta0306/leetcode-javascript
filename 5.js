// Longest Palindromic Substring

const longestPal = (str) => {
  let max = [0, 1];
  for (let i = 0; i < str.length; i++) {
    const evenPal = getPal(i - 1, i, str);
    const oddPal = getPal(i - 1, i + 1, str);
    const currentMax =
      evenPal[1] - evenPal[0] > oddPal[1] - oddPal[0] ? evenPal : oddPal;
    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
  }
  return str.slice(max[0], max[1]);
};

const getPal = (left, right, s) => {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }
    left--;
    right++;
  }
  return [left + 1, right];
};

console.log(longestPal("aaabb"));
