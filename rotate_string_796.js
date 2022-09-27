// ROTATE STRING

const rotateString = (strA, strB) => {
  if (strA.length !== strB.length) {
    console.log(false);
  }
  if (strA.length === 0 && strB.length === 0) {
    console.log(true);
  }
  strA = strA + strA;

  console.log(strA.includes(strB));
};

rotateString("abcde", "cdaeb");
