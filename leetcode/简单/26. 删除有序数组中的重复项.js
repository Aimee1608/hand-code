/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 1)
      i--
    }
  }
  return nums.length
};

var removeDuplicates2 = function (nums) {
  console.log(nums)
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[index] = nums[i]
      index++
    }
  }
  console.log(nums)
  return index
};


console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4]))