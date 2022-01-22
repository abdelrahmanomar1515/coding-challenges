import { readFileSync } from "fs";

function isValid(s: string): string {
  if (s.length === 1) {
    return "YES";
  }
  let freqArr = Array.from({ length: 26 }, (_) => 0);
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    freqArr[char - 97]++;
  }
  freqArr = freqArr.filter((i) => i);
  const freqFreq = new Map<number, number>();
  freqArr.forEach((el) => {
    const curFreq = freqFreq.get(el) || 0;
    freqFreq.set(el, curFreq + 1);
  });
  console.log("freqArr", freqArr);
  console.log("freqFreq", freqFreq);
  if (freqFreq.size === 1) {
    return "YES";
  }
  if (freqFreq.size > 2) {
    return "NO";
  }
  // If difference between keys is 1 and one of the values is 1
  if (
    Math.abs([...freqFreq.keys()][0] - [...freqFreq.keys()][1]) === 1 &&
    [...freqFreq.values()].includes(1)
  ) {
    return "YES";
  }
  return "NO";
}

const input = readFileSync("./sherlock-and-the-valid-string.txt", "utf-8");
console.log(isValid(input)); //YES
console.log("abcdefghhgfedecba", isValid("abcdefghhgfedecba")); //YES
console.log("aaaaabc", isValid("aaaaabc")); //NO
