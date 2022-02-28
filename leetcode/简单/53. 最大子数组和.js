/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length <= 0) return 0;
  let max = nums[0];
  let left = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // left = Math.max(nums[i], left + nums[i])
    // 当前的总和
    if (left > 0) {
      left += nums[i]
    } else {
      left = nums[i]
    }
    max = Math.max(max, left)
  }
  return max
};

console.log(maxSubArray([5, 4, -1, 7, 8]))