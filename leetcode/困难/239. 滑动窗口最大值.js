/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ret = []
  let start = 0
  let max = {}
  let code = 0
  let head = 0
  for (let i = 0; i < k; i++) {
    while (code - head > 0 && nums[i] > max[code - 1]) {
      delete max[--code]
    }
    max[code++] = nums[i]
  }
  ret.push(max[head])
  while (start < nums.length - k) {
    if (nums[start] === max[head]) {
      delete max[head++]
    }
    while (code - head > 0 && nums[start + k] > max[code - 1]) {
      delete max[--code]
    }
    max[code++] = nums[start + k]
    ret.push(max[head])
    // console.log(max)
    start++
  }
  return ret
}
