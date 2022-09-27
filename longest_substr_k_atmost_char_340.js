// Longest Substring with At Most K Distinct Characters solution: Leetcode 340 (Javascript)

const lengthOfLongestSubstring = (str, k) => {
  const map = new Map();
  let windowStart = 0;
  let max = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!map.get(rightChar)) {
      map.set(rightChar, 1);
    } else {
      map.set(rightChar, map.get(rightChar) + 1);
    }

    while (map.size > k) {
      const leftChar = str[windowStart];
      if (map.get(leftChar) > 1) {
        map.set(leftChar, map.get(leftChar) - 1);
      } else {
        map.delete(leftChar);
      }
      windowStart++;
    }
    max = Math.max(max, (windowEnd - windowStart) + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("eccba", 3));
