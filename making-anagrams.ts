//97 122

function makeAnagram(a: string, b: string): number {
  // make two arrays, index corresponds to character, value corresponds to number of times it happened
  // loop over two arrays, get absolute difference and add to count

  const first = Array.from({ length: 26 }, (_) => 0);
  const second = Array.from({ length: 26 }, (_) => 0);
  for (let i = 0; i < a.length; i++) {
    const idx = a.charCodeAt(i) - 97;
    first[idx]++;
  }
  for (let i = 0; i < b.length; i++) {
    const idx = b.charCodeAt(i) - 97;
    second[idx]++;
  }
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    count += Math.abs(first[i] - second[i]);
  }
  return count;
}

console.log(makeAnagram("cde", "abc"));
