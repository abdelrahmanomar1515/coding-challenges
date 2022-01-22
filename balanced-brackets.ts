function isBalanced(s: string): string {
  // Write your code here
  // create array of opening brackets
  // create array of closing brackets
  // loop through the string
  // if the element is in the opening brackets array add it to stack
  // if the element is in the closing brackets array
  //    if it's the same index as the element at the top of the stack is from the first array, pop stack
  //    if it's not the same return 'NO'

  let stack = [];
  const openings = ["[", "{", "("];
  const closing = ["]", "}", ")"];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    const opIdx = openings.indexOf(bracket);
    const closIdx = closing.indexOf(bracket);
    if (opIdx >= 0) {
      stack.push(opIdx);
    } else if (closIdx >= 0 && closIdx === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return "NO";
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}
