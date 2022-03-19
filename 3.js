// Longest Substring Without Repeating Characters

const longestStr = (str) => {
  let max = 0;
  let windowStart = 0;
  const resultSoFar = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const startChar = str[windowEnd];
    if (!resultSoFar[startChar]) {
      resultSoFar[startChar] = 1;
    } else {
      resultSoFar[startChar] = resultSoFar[startChar] + 1;
    }

    while (resultSoFar[startChar] > 1) {
      const endChar = str[windowStart];
      if (resultSoFar[endChar] > 1) {
        resultSoFar[endChar] = resultSoFar[endChar] - 1;
      } else {
        delete resultSoFar[endChar];
      }
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

console.log(longestStr("bbbbb"));
