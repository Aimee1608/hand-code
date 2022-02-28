/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length
  let buy1 = prices[0]
  let buy2 = prices[0]
  let sell1 = 0
  let sell2 = 0
  for (let i = 0; i < len; i++) {
    // 第一次买入的最小价格
    buy1 = Math.min(buy1, prices[i])
    // 第一次卖出时，获取历史以来的最高价格
    sell1 = Math.max(sell1, prices[i] - buy1)
    // 第二次买入的最小价格
    buy2 = Math.min(buy2, prices[i] - sell1)

    sell2 = Math.max(sell2, prices[i] - buy2)
    console.log(buy1, sell1, buy2, sell2)
  }
  return sell2
}
