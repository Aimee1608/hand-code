/**
 * 
 * 输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
*/

var twoSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res = [i, j]
        return res
      }
    }
  }
  return res
};
console.log(twoSum([2, 7, 11, 15], 9))

var twoSum2 = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    const m = map.has(key)
    if (m) {
      return [map.get(key), i]
    } else {
      map.set(nums[i], i)
    }
  }
}