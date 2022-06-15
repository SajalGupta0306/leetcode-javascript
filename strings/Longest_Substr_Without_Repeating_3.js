const str = "welcome";

// make use of sliding window protocol

const maxLength = (s1) => {
  if (s1.length === 0) {
    return 0;
  }
  let startIdx = 0;
  let endIdx = 0;
  const uniqueChars = new Set();
  let max = 0;

  while (endIdx < s1.length) {
    if (!uniqueChars.has(s1[endIdx])) {
      uniqueChars.add(s1[endIdx]);
      endIdx++;
      max = Math.max(max, uniqueChars.size);
    } else {
      uniqueChars.delete(s1[startIdx]);
      startIdx++;
    }
  }
  return max;
};

console.log(maxLength(str));
