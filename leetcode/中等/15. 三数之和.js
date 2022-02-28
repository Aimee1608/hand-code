/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }
  let res = [];
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const arr = [nums[i], nums[j], nums[k]].sort()
          if (!list.includes(arr.join('*'))) {
            res.push(arr)
            list.push(arr.join('*'))
          }
        }
      }
    }
  }
  return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))


var threeSum2 = function (nums) {
  if (nums.length < 3) {
    return []
  }
  let res = [];
  nums.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      } else if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      }
    }

  }
  return res
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4]))