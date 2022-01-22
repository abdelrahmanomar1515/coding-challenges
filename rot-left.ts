function rotLeft(a: number[], d: number): number[] {
  // Write your code here
  const newArray: number[] = Array.from({ length: a.length });
  const rot = d % a.length;
  a.forEach(
    (val, index) => (newArray[(index - rot + a.length) % a.length] = val)
  );
  return newArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
