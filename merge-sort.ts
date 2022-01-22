function mergeArrays<T>(
  arr1: T[],
  arr2: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a < b
): T[] {
  let i = 0;
  let j = 0;
  let result: T[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
function mergeSort<T>(
  arr: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a < b
): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const sortedLeft = mergeSort(left, comparator);
  const sortedRight = mergeSort(right, comparator);
  return mergeArrays(sortedLeft, sortedRight, comparator);
}

function main(arr: { name: string; score: number }[]) {
  return mergeSort(arr, (a, b) =>
    a.score !== b.score ? a.score > b.score : a.name < b.name
  )
    .map((p) => `${p.name} ${p.score}`)
    .join("\n");
}

const input = [
  { name: "amy", score: 100 },
  { name: "david", score: 100 },
  { name: "heraldo", score: 50 },
  { name: "aakansha", score: 75 },
  { name: "aleksa", score: 150 },
];
console.log(main(input));
// const sd = Array.from({ length: 11 }).map((_) =>
//   Math.floor(Math.random() * 1000)
// );
// console.log("sdsfsfds", sd);
// [1, 2, 9, 4, 5, 6, 7, 8, 5]
// console.log(mergeSort(sd));
