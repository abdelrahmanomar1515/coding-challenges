// Complete the minimumSwaps function below.
function minimumSwaps(arr: number[]) {
  // Loop through the array, swap the element to its correct position; increment swap count
  // if element at index is at correct position , move forward;
  let i = 0;
  let swaps = 0;
  while (i < arr.length) {
    const val = arr[i];
    if (val === i + 1) {
      i++;
    } else {
      swap(arr, i, val - 1);
      swaps++;
    }
  }
  return swaps;
}

function swap(arr: number[], i1: number, i2: number) {
  console.log("swapping", i1, i2);
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
