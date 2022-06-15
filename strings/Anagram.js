const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const result = {};
  for (let i = 0; i < str1.length; i++) {
    if (result[str1[i]]) {
      result[str1[i]] += 1;
    } else {
      result[str1[i]] = 1;
    }
  }

  for (const char of str2) {
    if (!result[char]) {
      return false;
    } else {
      result[char]--;
    }
  }

  return true;
};

console.log(isAnagram("hello", "lleoh"));
