/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n

  let pre1 = 2;
  let pre2 = 1;
  let current = pre1 + pre2;
  let i = 3;
  while (i <= n) {
    current = pre1 + pre2;
    pre2 = pre1;
    pre1 = current;
    i++
  }

  return current
};

console.log(climbStairs(4))

var climbStairs2 = function (n) {
  const help = (n) => {
    if (n <= 2) return n;
    return help(n - 1) + help(n - 2);
  }
  return help(n);
}
console.log(climbStairs2(4))