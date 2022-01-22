function getMinimumCost(k: number, c: number[]): number {
  c.sort((a, b) => b - a);
  let friends: number[][] = Array.from({ length: k }, (_) => []);
  for (let i = 0; i < c.length; i++) {
    const cost = c[i];
    const buyer = i % k;
    friends[buyer].push(cost);
  }
  const totalCost = friends.reduce(
    (cost, friend) =>
      cost + friend.reduce((acc, cost, i) => acc + (i + 1) * cost, 0),
    0
  );
  return totalCost;
}
console.log(getMinimumCost(3, [2, 5, 6]));
