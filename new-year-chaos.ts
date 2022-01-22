function minimumBribes(q: number[]): void {
  // post =  index + 1
  // loop through that array, let swaps = 0 if the item at a specific position is higher that the pos by 2 => return 'too chaotic'
  // if the elment < pos see how many elements infront of it are higher than it, increase swaps according to that
  // the range to check these elements from is from the []

  let swaps = 0;
  for (let index = 0; index < q.length; index++) {
    const element = q[index];
    const pos = index + 1;
    if (element - pos > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, q[index] - 2); j < index; j++) {
      if (q[j] > q[index]) {
        swaps++;
      }
    }
  }
  console.log(swaps);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
// [1, 2, 3, 4, 5, 6, 7, 8]
