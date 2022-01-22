function checkMagazine(magazine: string[], note: string[]): void {
  // create dictionary of word => occurance needed
  // loop through magazine => if word is in dictionary and is not 0 => decrese count
  // if dictionary is empty return 'YES'

  const wordsMap = new Map<string, number>();
  note.forEach((word) => {
    let count = wordsMap.get(word) || 0;
    wordsMap.set(word, count + 1);
  });

  magazine.forEach((word) => {
    if (wordsMap.has(word)) {
      wordsMap.set(word, Math.max(wordsMap.get(word) - 1, 0));
    }
  });

  const condition = [...wordsMap.values()].every((val) => val === 0);
  if (condition) {
    console.log("Yes");
    return;
  }
  console.log("No");
  return;
}
