function foo(codeList, shoppingCart) {
  // Write your code here
  console.log("shoppingCart", shoppingCart);
  let stack = [];
  while (codeList.length) {
    const code = codeList.pop().split(" ");
    stack.push(code);
  }
  console.log("codeList after", stack);
  let i = 0;
  while (i < shoppingCart.length) {
    const groupToMatch = stack[stack.length - 1];
    console.log("groupToMatch", groupToMatch);

    const groupInCart = shoppingCart.slice(i, i + groupToMatch.length);
    console.log("groupInCart", groupInCart);
    if (groupsMatch(groupToMatch, groupInCart)) {
      stack.pop();
      console.log(stack);
      i += groupToMatch.length;
    } else {
      i++;
    }
  }

  return stack.length === 0 ? 0 : 1;
}

function groupsMatch(groupCode, groupCart) {
  if (groupCode.length !== groupCart.length) return false;
  return groupCode.every((val, i) => itemMatch(val, groupCart[i]));
}

function itemMatch(codeItem, cartItem) {
  if (codeItem === "anything") return true;
  return codeItem === cartItem;
}

console.log(
  foo(
    ["orange", "apple apple", "banana orange apple", "banana"],
    ["orange", "apple", "apple", "banana", "orange", "apple", "banana"]
  )
);
