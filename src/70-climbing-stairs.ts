function climbStairs(n: number): number {
  if (n < 1) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else {
    return climbStairs(n-1) + climbStairs(n-2);
  }
};

function climbStairsIter(n: number): number {
  if (n < 1) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;

  let prev1 = 1;
  let prev2 = 2;

  for(let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2
}

export { climbStairs, climbStairsIter };