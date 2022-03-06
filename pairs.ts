import { readFileSync } from "fs";

function pairs(k: number, arr: number[]): number {
  // Write your code here
  let numbersSet = new Set<number>(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const target1 = el - k;

    count += numbersSet.has(target1) ? 1 : 0;
  }

  return count;
}

// console.log(pairs(2, [1, 5, 3, 4, 2]));
// console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2]));
// console.log(
//   pairs(
//     1,
//     [
//       363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
//       428047635, 491595254, 879792181, 1069262793,
//     ]
//   )
// );
console.log(
  pairs(
    793735,
    readFileSync("./pairs.txt", "utf-8")
      .split("\n")[1]
      .split(" ")
      .map((t) => parseInt(t, 10))
  )
);
