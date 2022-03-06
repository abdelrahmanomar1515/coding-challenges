function findRemainingBalls(direction, strength) {
  // Loop through the array of strength creating a stack of indices remaining;
  let stack = [];
  let dir = direction[0];
  stack.push([0, dir, strength[0]]);
  let i = 1;
  while (i < direction.length) {
    const curDir = direction[i];
    const curStr = strength[i];
    if (!willCollide(stack[stack.length - 1], [i, curDir, curStr])) {
      stack.push([i, curDir, curStr]);
      i++;
    } else {
      // Compare curBall with top of stack;
      // If they don't collide or top of stack is empty: push curBall and break;
      // If they will collide
      //   If top of stack prevails: break;
      //   If curBall prevails: pop stack and continue
      const topStack = stack[stack.length - 1];
      const topStackStr = topStack[1];
      if (topStackStr > curStr) {
        continue;
      } else if (topStackStr === curStr) {
        stack.pop();
      } else if (topStackStr < curStr) {
        const curStackTop = stack[stack.length - 1];
        // Keep popping stack till either one item is there
        // while(curStackTop)
        stack.pop();
        stack.push([i, curStr]);
        dir = curDir;
      }
    }
  }
}

function willCollide(leftBall, rightBall) {
  if (leftBall[1] === 1 && rightBall[1] === -1) return true;
  return false;
}

console.log(findRemainingBalls([1, -1, 1], [5, 3, 1]));
