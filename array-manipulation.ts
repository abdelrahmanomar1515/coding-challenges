function arrayManipulation(n: number, queries: number[][]): number {
  let arr = Array.from({ length: n + 1 }, (_) => 0);
  let max = 0;
  let acc = 0;

  for (let j = 0; j < queries.length; j++) {
    const query = queries[j];
    const start = query[0];
    const end = query[1];
    const val = query[2];
    arr[start] += val;
    if (end + 1 < arr.length) arr[end + 1] -= val;
  }
  for (let i = 1; i < arr.length; i++) {
    acc = acc + arr[i];
    max = Math.max(acc, max);
  }

  return max;
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
