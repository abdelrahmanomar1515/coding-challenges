function luckBalance(k: number, contests: number[][]): number {
  const freeContests = contests.filter((contes) => contes[1] === 0);
  const luckFromFree = freeContests.reduce((acc, cur) => acc + cur[0], 0);
  const importantContests = contests.filter((contes) => contes[1] === 1);
  importantContests.sort((a, b) => b[0] - a[0]);
  let sum = luckFromFree;

  for (let i = 0; i < importantContests.length; i++) {
    const element = importantContests[i];
    if (i < k) {
      sum += element[0];
    } else {
      sum -= element[0];
    }
  }
  return sum;
}

const t1 = [
  [13, 1],
  [10, 1],
  [9, 1],
  [8, 1],
  [13, 1],
  [12, 1],
  [18, 1],
  [13, 1],
];
const k1 = 5;
const t2 = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];
const k2 = 3;
console.log(luckBalance(k1, t1));
