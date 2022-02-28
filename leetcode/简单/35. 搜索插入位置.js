/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i
    }
    if (i === nums.length - 1) {
      return i + 1
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 2))


var searchInsert2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1
  while (left <= right) {
    // let middle = ((right - left) >> 1) + left;
    let middle = parseInt((right - left) / 2) + left;
    if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return left
};

console.log(searchInsert2([1, 3, 5, 6], 2))


const serchInsert3 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
}

const serchInsert4 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
    if (i === nums.length - 1) {
      return i + 1
    }
  }
}