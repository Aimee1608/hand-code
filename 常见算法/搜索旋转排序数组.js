/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[right] >= target && target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
