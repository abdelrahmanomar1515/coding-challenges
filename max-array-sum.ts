import { readFileSync } from "fs";

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr: number[]) {
  const memo: any = Array.from({ length: arr.length });
  memo[0] = arr[0];
  memo[1] = Math.max(arr[1], arr[0]);

  for (let index = 2; index < arr.length; index++) {
    const el = arr[index];
    memo[index] = Math.max(
      el,
      el + memo[index - 2],
      memo[index - 1],
      memo[index - 2]
    );
  }
  console.log(memo);
  return memo[arr.length - 1];
}

// console.log(maxSubsetSum([-2, 1, 3, -4, 5]));
// console.log(maxSubsetSum([2, 1, 5, 8, 4]));
console.log(maxSubsetSum([3, 5, -7, 8, 10]));
// console.log(maxSubsetSum([3, 7, 4, 6, 5]));
console.log(
  maxSubsetSum(
    readFileSync("./max-array-sum.txt", "utf-8")
      .split(" ")
      .map((i) => parseInt(i))
  )
);
