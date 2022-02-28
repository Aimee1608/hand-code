/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let right = prices.length - 1
  let max = 0
  let i = 1
  while (i <= right) {
    if (prices[i - 1] < prices[i]) {
      max += prices[i] - prices[i - 1]
    }
    i++
  }
  return max
}
