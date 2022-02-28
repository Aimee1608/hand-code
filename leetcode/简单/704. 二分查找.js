/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const help = (left, right) => {
    if (left > right) return -1
    const mid = parseInt((right - left) / 2) + left
    if (nums[mid] < target) {
      help(mid + 1, right)
    }
    if (nums[mid] > target) {
      help(left, mid - 1)
    }
    if (nums[mid] === target) {
      return mid
    }
  }
  return help(0, nums.length - 1)
};

var search2 = function (nums, target) {
  const stack = []
  stack.push([0, nums.length - 1])
  while (stack.length) {
    let [left, right] = stack.pop()
    if (left > right) return -1
    let mid = parseInt((right - left) / 2) + left
    if (nums[mid] < target) {
      stack.push([mid + 1, right])
    }
    if (nums[mid] > target) {
      stack.push([left, mid - 1])
    }
    if (nums[mid] === target) {
      return mid
    }
  }
}

var search3 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = parseInt((right - left) / 2) + left
    if (nums[mid] < target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      return mid
    } else {
      left = mid + 1
    }
  }
  return -1
}