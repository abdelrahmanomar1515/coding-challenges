function minimumAbsoluteDifference(arr: number[]): number {
  // Write your code here
  arr.sort((a, b) => a - b);
  let min = Math.abs(arr[0] - arr[1]);
  for (let i = 1; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    min = Math.min(min, diff);
  }
  return min;
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
