import { readFileSync } from "fs";
// COUNT SORT CAN BE USED HERE TO OPTIMIZE THIS

// Loop through array
// get the first array of trailing days, and day after
// sorted window = sort the first array
// get median of first array, compare to day after
// As long as there are more days, increase day
//  get median of previous trailing days =>  remove from previous window an element, add new element, sort it, save the new window
//  compare day to median
function activityNotifications(expenditure: number[], d: number): number {
  if (d >= expenditure.length) {
    return 0;
  }
  let count = 0;
  const firstSlice = expenditure.slice(0, d);
  let sortedSection = firstSlice.sort((a, b) => a - b);

  for (let i = d; i < expenditure.length; i++) {
    const cur = expenditure[i];
    const median = getMedian(sortedSection);
    if (cur >= 2 * median) {
      count++;
    }
    const start = i - d;
    const valueToRemove = expenditure[start];
    const idx = sortedSection.indexOf(valueToRemove);
    sortedSection.splice(idx, 1);
    insert(sortedSection, cur);
  }

  return count;
}

function insert(arr: number[], number: number) {
  for (var j = arr.length - 1; number < arr[j] && j >= 0; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = number;
}

function getMedian(arr: number[]) {
  if (arr.length === 0) return 0;
  const isOdd = arr.length % 2 === 1;
  if (isOdd) return arr[(arr.length - 1) / 2];
  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
}

let inputFile = readFileSync("./activity-notification.txt", {
  encoding: "utf-8",
});

const splits = inputFile.split("\n");
const d = splits[0].split(" ")[1];
const s = splits[1].split(" ").map((item) => parseInt(item));

console.log(activityNotifications(s, parseInt(d)));

// function insertionSort(arr: number[]): number[] {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; currentVal < arr[j] && j >= 0; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
