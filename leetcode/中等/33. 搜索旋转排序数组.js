/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return nums.indexOf(target)
}

var search2 = function (nums, target) {
  // return nums.indexOf(target)
  let left = 0
  let right = nums.length - 1
  let stack = [[left, right]]
  while (stack.length) {
    const [left, right] = stack.pop()
    let mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return mid
    }
    left <= mid - 1 && stack.push([left, mid - 1])
    mid + 1 <= right && stack.push([mid + 1, right])
  }
  return -1
}
