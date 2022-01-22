function sherlockAndAnagrams(s: string): number {
  // create n x n grid of all possible substrings
  const grid = Array.from({ length: s.length }, (_) =>
    Array.from({ length: s.length }, (_) => ({} as { [key: string]: number }))
  );
  for (let row = 0; row < s.length; row++) {
    for (let col = row; col < s.length; col++) {
      const dict = grid[row][col - 1] ? { ...grid[row][col - 1] } : {};
      const char = s.charAt(col);
      const oldCharVal = dict[char] || 0;
      dict[char] = oldCharVal + 1;
      grid[row][col] = dict;
    }
  }

  let count = 0;
  for (let row = 0; row < s.length; row++) {
    for (let col = row; col < s.length; col++) {
      console.log("row: ", row, "  ", "col: ", col);
      for (let i = row + 1, j = col + 1; j < grid.length && j >= i; i++, j++) {
        console.log("i: ", i, "  ", "j: ", j);
        if (objectsEqual(grid[row][col], grid[i][j])) {
          count++;
        }
      }
    }
  }
  console.log(grid);
  console.log(count);
  return count;
}

sherlockAndAnagrams("ifailuhkqq");

function objectsEqual(
  map1: Record<string, number>,
  map2: Record<string, number>
) {
  return (
    Object.keys(map1).length === Object.keys(map2).length &&
    [...Object.entries(map1)].every(([key, val]) => map2[key] === val)
  );
}
