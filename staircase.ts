function stepPerms(n: number): number {
  function doIt(n: number, memo: number[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n === 1) return 1;
    if (n === 0) return 1;
    if (n < 0) return 0;
    const res: number =
      doIt(n - 1, memo) + doIt(n - 2, memo) + doIt(n - 3, memo);
    memo[n] = res;
    return res;
  }
  return doIt(n, Array.from({ length: n }));
}
// 0 + 1 +

console.log(stepPerms(7));
