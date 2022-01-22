function alternatingCharacters(s: string): number {
  // Set last checked to be 'C'
  // Loop through the array starting at 0;
  // Check if the item at index is the same as last checked. If it is increase count;
  // If the item is different, set the last checked to be the new item.

  let lastChecked = "C";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (lastChecked === s[i]) {
      count++;
    } else {
      lastChecked = s[i];
    }
  }

  return count;
}
console.log(alternatingCharacters("AAABBB"));
